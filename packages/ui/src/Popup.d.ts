import * as React from "react";
import { CssPropertyTypes } from "@catastrophee/styles";
export interface PopupStyles {
    container?: CssPropertyTypes;
    body?: CssPropertyTypes;
    btnCancel?: CssPropertyTypes;
    btnConfirm?: CssPropertyTypes;
    footer?: CssPropertyTypes;
    header?: CssPropertyTypes;
    title?: CssPropertyTypes;
}
export interface ActionButtonType {
    action: () => void;
    label: any;
    enabled?: boolean;
}
export interface PopupType {
    cancel?: ActionButtonType;
    children?: any;
    clearHeader?: boolean;
    confirm?: ActionButtonType;
    style?: PopupStyles;
    title: any;
}
export declare const Popup: React.SFC<PopupType>;
