/// <reference types="react" />
import { CssPropertyTypes } from "@catastrophee/styles";
export interface TagStyle {
    container?: CssPropertyTypes;
    label?: CssPropertyTypes;
}
export interface TagType {
    label: any;
    showBorder?: boolean;
    color?: string;
    fill?: boolean;
    truncateOnWidth?: number;
    style?: TagStyle;
}
export declare const Tag: {
    ({ label, showBorder, color, fill, truncateOnWidth, style }: TagType): JSX.Element;
    displayName: string;
    __docgenInfo: {
        "description": string;
        "displayName": string;
        "props": {
            "label": {
                "defaultValue": any;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "showBorder": {
                "defaultValue": any;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "color": {
                "defaultValue": any;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "fill": {
                "defaultValue": any;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "truncateOnWidth": {
                "defaultValue": any;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "style": {
                "defaultValue": {
                    value: string;
                };
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
        };
    };
};
