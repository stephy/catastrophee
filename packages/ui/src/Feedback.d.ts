import * as React from "react";
import { CssPropertyTypes } from "@catastrophee/styles";
export declare enum FeedbackOptions {
    error = "error",
    loading = "loading",
    success = "success",
    warning = "warning"
}
export interface FeedbackStyle {
    btnClose: CssPropertyTypes;
    container: CssPropertyTypes;
    details: CssPropertyTypes;
    icon: CssPropertyTypes;
    iconError: CssPropertyTypes;
    iconSuccess: CssPropertyTypes;
    iconWarning: CssPropertyTypes;
    spinner: CssPropertyTypes;
    text: CssPropertyTypes;
}
export interface FeedbackType {
    message?: any;
    details?: any;
    type?: FeedbackOptions;
    show: boolean;
    onCancel: () => void;
    zIndex?: number;
    style?: FeedbackStyle;
}
export declare const Feedback: React.SFC<FeedbackType>;
