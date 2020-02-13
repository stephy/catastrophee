/// <reference types="react" />
import { CssPropertyTypes } from "@catastrophee/styles";
export interface InputStyle {
    container?: CssPropertyTypes;
    errorMessage?: CssPropertyTypes;
    inputWrapper?: CssPropertyTypes;
    input?: CssPropertyTypes;
    iconDisabled?: CssPropertyTypes;
    iconInvalid?: CssPropertyTypes;
    textarea?: CssPropertyTypes;
}
export interface MultilineType {
    rows: number;
    cols: number;
}
export interface InputPropType {
    disabled?: boolean;
    errorMessage?: string;
    id: string;
    label?: string;
    multiline?: MultilineType;
    pattern?: any;
    placeholder?: string;
    style?: InputStyle;
    valid?: boolean;
    value: string;
    width?: string;
}
export declare const TEXTAREA_PROPS: string[];
export declare const INPUT_PROPS: string[];
export declare const Input: {
    (props: any): JSX.Element;
    displayName: string;
    __docgenInfo: {
        "description": string;
        "displayName": string;
        "props": {};
    };
};
