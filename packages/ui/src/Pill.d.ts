/// <reference types="react" />
interface PillType {
    label: any;
    showBorder?: boolean;
    color?: string;
    fill?: boolean;
    truncateOnWidth?: number;
}
export declare const Pill: {
    ({ label, showBorder, color, fill, truncateOnWidth }: PillType): JSX.Element;
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
        };
    };
};
export {};
