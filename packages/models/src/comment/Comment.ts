import { observable, action } from "mobx";
import { uuid } from "uuidv4";

export interface BasicCommentType {
  messageText: string;
  userId: string;
}

export interface CommentType {
  creationTimestamp: string;
  deleted: boolean;
  displayName: string;
  id: string;
  initials: string;
  messageId: string;
  messageText: string;
  updateTimestamp: string;
  userId: string;
}

export class Comment {
  @observable creationTimestamp: string;
  @observable deleted: boolean;
  @observable displayName: string;
  @observable id: string;
  @observable initials: string;
  @observable messageId: string;
  @observable messageText: string;
  @observable updateTimestamp: string;
  @observable userId: string;

  constructor(props: CommentType) {
    this.creationTimestamp = props.creationTimestamp;
    this.deleted = props.deleted;
    this.displayName = props.displayName;
    this.id = props.id;
    this.initials = props.initials;
    this.messageId = props.messageId;
    this.messageText = props.messageText;
    this.updateTimestamp = props.updateTimestamp;
    this.userId = props.userId;
  }

  @action reset = () => {
    this.id = uuid();
    this.messageText = "";
  };

  @action set = (key, value) => {
    this[key] = value;
  };

  @action setDisplayName = (displayName: string) => {
    this.displayName = displayName;
  };

  @action setMessageText = (text: string) => {
    this.messageText = text;
  };
}

export default Comment;
