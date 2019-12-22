import { action, computed, observable } from "mobx";
export enum PromiseStatusOptions {
  fulfilled = "fulfilled",
  pending = "pending",
  rejected = "rejected",
  notRequested = "notRequested"
}

export interface NotificationType {
  status: any;
  successMessage: string;
  failureMessage: string;
  pendingMessage: string;
  successAction: () => void;
  failAction: () => void;
  details: {
    state?: string;
  } | null;
}

export class ToastStore {
  @observable successMessage?: string;
  @observable failureMessage?: string;
  @observable pendingMessage?: string;
  @observable details?: any;
  @observable status?: any;
  @observable successAction: any;
  @observable failAction: any;

  constructor() {
    this.successMessage = "";
    this.failureMessage = "";
    this.pendingMessage = "";
    this.details = null;
    this.status = null;
    this.successAction = () => {};
    this.failAction = () => {};
  }

  @action setNotificationData(notification: NotificationType) {
    this.status = notification.status;
    this.successMessage = notification.successMessage || "";
    this.failureMessage = notification.failureMessage || "";
    this.pendingMessage = notification.pendingMessage || "";
    this.details = notification.details || {};
    this.successAction = notification.successAction;
    this.failAction = notification.failAction;
  }

  @action clearNotification(timeout: number) {
    const that = this;
    setTimeout(() => {
      that.setNotificationData({
        successMessage: "",
        failureMessage: "",
        pendingMessage: "",
        details: null,
        status: null,
        successAction: () => {},
        failAction: () => {}
      });
    }, timeout);
  }

  @computed get currentState() {
    return this.status;
  }

  @computed get notificationMessage() {
    const state =
      (this.details && this.details.state) || PromiseStatusOptions.pending;
    if (state === PromiseStatusOptions.rejected) {
      this.failAction();
      this.clearNotification(4000);
      return {
        status: PromiseStatusOptions.rejected,
        message: this.failureMessage,
        details: this.details
      };
    } else if (state === PromiseStatusOptions.fulfilled) {
      if (this.details.value === undefined) {
        this.failAction();
        this.clearNotification(4000);
        return {
          status: PromiseStatusOptions.rejected,
          message: `${this.failureMessage}`,
          details: this.details
        };
      }
      if (
        this.details &&
        this.details.value &&
        (this.details.value.errors ||
          (this.details.value.data &&
            this.details.value.data.statusCode === 400))
      ) {
        // although promise was fulfilled, there was an error
        let error = "";

        if (this.details.value.errors) {
          // graphql error
          // error = JSON.parse(this.details.value.errors)[0].message;
          error = "Graphql Response Parsing Error.";
        } else if (
          this.details.value.data &&
          this.details.value.data.statusCode === 400
        ) {
          error = this.details.value.data.message || "";
        }
        this.failAction();
        this.clearNotification(4000);
        return {
          status: PromiseStatusOptions.rejected,
          message: `${this.failureMessage} - ${error}`,
          details: this.details
        };
      } else {
        if (
          this.details &&
          this.details.value &&
          this.details.value.statusCode === 400
        ) {
          this.failAction();
          this.clearNotification(4000);
          return {
            status: PromiseStatusOptions.rejected,
            message: `${this.details.value.message}`,
            details: this.details
          };
        } else {
          this.successAction();
          this.clearNotification(4000);
          return {
            status: PromiseStatusOptions.fulfilled,
            message: this.successMessage,
            details: this.details
          };
        }
      }
    }
    return {
      status: PromiseStatusOptions.pending,
      message: this.pendingMessage,
      details: this.details
    };
  }

  @action
  setNotificationFailure = () => {
    this.details = {
      state: PromiseStatusOptions.rejected
    };
  };
}

export const toast = new ToastStore();
