import { observable, action, computed } from "mobx";

export enum FeedbackOptions {
  error = "error",
  loading = "loading",
  success = "success",
  warning = "warning"
}

export class Feedback {
  @observable message?: string;
  @observable show: boolean;
  @observable details?: string;
  @observable onCancel: () => void;
  @observable type?: FeedbackOptions;

  constructor() {
    this.message = undefined;
    this.details = undefined;
    this.show = false;
    this.onCancel = () => {};
    this.type = FeedbackOptions.loading;
  }

  @computed get currentMessage() {
    return this.message;
  }

  @computed get currentDetails() {
    return this.details;
  }

  @computed get display() {
    return this.show;
  }

  @computed get currentType() {
    return this.type;
  }

  @action setType = (type: FeedbackOptions) => {
    this.type = type;
  };

  @action setOnCancel = (cb: () => void) => {
    this.setOnCancel = cb;
  };

  @action cancel = () => {
    this.onCancel();
    this.show = false;
    setTimeout(() => {
      this.message = undefined;
      this.details = undefined;
    }, 3000);
  };

  @action setDetails = (details: string) => {
    this.details = details;
  };

  @action setMessage = (message: string) => {
    this.message = message;
  };

  @action showFeedback = (timeout?: number) => {
    this.message = this.message;
    this.details = this.details;
    this.show = true;
    if (timeout) {
      setTimeout(() => {
        this.message = undefined;
        this.details = undefined;
        this.type = FeedbackOptions.loading;
      }, timeout);
    }
  };

  @action fadeOut = (message: string, details?: string) => {
    this.message = message;
    this.details = details;
    this.show = false;
    setTimeout(() => {
      this.message = undefined;
      this.details = undefined;
      this.type = FeedbackOptions.loading;
    }, 3000);
  };
}

export const feedback = new Feedback();
