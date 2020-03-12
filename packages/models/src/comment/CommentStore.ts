import { action, computed, observable, toJS, autorun } from "mobx";
import { uuid } from "uuidv4";
import Comment, { CommentType } from "./Comment";
import { fromPromise, FULFILLED } from "mobx-utils";

export class CommentsStore {
  @observable id: string;
  @observable comments: { [id: string]: Comment };
  @observable length: number;
  @observable active?: Comment;
  @observable status: any;
  @observable updated: number;
  @observable saving: boolean;
  @observable onSaveComment: (comment: Comment) => Promise<any>;
  @observable fetchComments: () => Promise<any>;

  constructor(
    id: string,
    fetchComments: () => Promise<any>,
    onSaveComment: (comment: Comment) => Promise<any>
  ) {
    this.id = id;
    this.comments = {};
    this.length = 0;
    this.active = this.getClearMessage();
    this.status = {};
    this.saving = false;
    this.updated = new Date().getTime();
    this.fetchComments = fetchComments;
    this.onSaveComment = onSaveComment;
    this.loadComments();
  }

  @computed
  get activeComment() {
    if (this.active && this.active.id) {
      return this.active;
    }
    return null;
  }

  @computed
  get totalComments() {
    if (this.updated > 0) {
      return Object.keys(this.comments).length - 1;
    }
    return 0;
  }

  @computed
  get sortedComments() {
    const comments: Comment[] = [];
    if (this.updated > 0) {
      Object.keys(this.comments).forEach(key => {
        comments.push(this.comments[key]);
      });
      const sortedComments = comments.sort((a: Comment, b: Comment) => {
        if (a.creationTimestamp < b.creationTimestamp) {
          return -1;
        } else if (a.creationTimestamp > b.creationTimestamp) {
          return 1;
        }
        return 0;
      });
      return sortedComments;
    }

    return comments;
  }

  @computed get list() {
    if (this.updated || this.length > 0) {
      return Object.keys(this.comments).map(key => this.comments[key]);
    }
    return [];
  }

  @computed
  get isSaving() {
    return this.saving;
  }

  getClearMessage = () => {
    return new Comment({
      id: uuid(),
      userId: "",
      messageText: "",
      displayName: "",
      initials: "",
      creationTimestamp: "",
      updateTimestamp: "",
      messageId: "",
      deleted: false
    });
  };

  @action clear = () => {
    this.comments = {};
    this.update;
  };

  @action resetActiveComment = () => {
    this.active = this.getClearMessage();
  };

  @action setActiveComment = (comment: Comment) => {
    this.active = comment;
  };

  @action setMessageText = (text: string) => {
    if (this.active) {
      this.active.set("messageText", text);
    }
  };

  @action setUserId = (userId: string) => {
    if (this.active) {
      this.active.set("userId", userId);
    }
  };

  @action setId = (id: string) => {
    this.id = id;
  };

  @action loadComments = async () => {
    if (this.id) {
      this.status = fromPromise(this.fetchComments());
    }
  };

  @action update = () => {
    this.updated = new Date().getTime();
  };

  @action addComments = (comments: Array<CommentType>) => {
    comments.forEach(comment => {
      this.set(comment);
    });
  };

  @action saveActiveComment(
    clearOnSave: boolean = true,
    cb?: (timestamp: number) => void
  ) {
    const comment = toJS(this.active);
    if (comment) {
      return this.saveComment(comment, clearOnSave, cb);
    }
    return undefined;
  }

  @action addComment(comment: CommentType) {
    this.set(comment);
  }

  @action set = (comment: CommentType) => {
    this.comments[comment.id] = new Comment(comment);
    this.update();
  };

  @action setActive = commentId => {
    this.active = this.comments[commentId];
  };

  @action saveComment = (
    comment: Comment,
    clearOnSave: boolean,
    cb?: (timestamp: number) => void
  ) => {
    this.saving = true;
    this.status = fromPromise(this.onSaveComment(comment));
    autorun(() => {
      if (this.status.state === FULFILLED) {
        this.saving = false;
        this.addComment(comment);
        if (clearOnSave) {
          this.resetActiveComment();
        }
        if (cb) {
          cb(new Date().getTime());
        }
      }
    });
  };
}
