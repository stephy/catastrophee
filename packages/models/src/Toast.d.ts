export declare enum PromiseStatusOptions {
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
export declare class ToastStore {
    successMessage?: string;
    failureMessage?: string;
    pendingMessage?: string;
    details?: any;
    status?: any;
    successAction: any;
    failAction: any;
    constructor();
    setNotificationData(notification: NotificationType): void;
    clearNotification(timeout: number): void;
    get currentState(): any;
    get notificationMessage(): {
        status: PromiseStatusOptions;
        message: string;
        details: any;
    };
    setNotificationFailure: () => void;
}
export declare const toast: ToastStore;
