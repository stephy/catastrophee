import * as React from "react";
import { CssPropertyTypes } from "@catastrophee/styles";
export declare const PROMISE_PENDING = "pending";
export declare const PROMISE_FULFILLED = "fulfilled";
export declare const PROMISE_REJECTED = "rejected";
export declare const UI_Z_INDEX_NOTIFICATION = 200;
interface NotificationStylesType {
    closeBtn?: CssPropertyTypes;
    pendingIcon?: CssPropertyTypes;
    message?: CssPropertyTypes;
    content?: CssPropertyTypes;
    container?: CssPropertyTypes;
}
interface NotificationType {
    status: string;
    message: string;
    onClose?: () => void;
    error?: any;
    style?: NotificationStylesType;
}
export declare const Notification: React.SFC<NotificationType>;
export {};
