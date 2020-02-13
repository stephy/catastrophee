/// <reference types="react" />
interface ActionType {
    id: string;
    label: string;
    action: () => void;
}
export interface TagWithActionType {
    id: string;
    label: any;
    showBorder?: boolean;
    color?: string;
    showDelete?: boolean;
    onDelete?: () => void;
    actions?: ActionType[];
    truncateOnWidth?: number;
}
export declare const TagWithAction: {
    ({ label, color, actions, showDelete, onDelete, truncateOnWidth }: TagWithActionType): JSX.Element;
    displayName: string;
    __docgenInfo: {
        "description": string;
        "displayName": string;
        "props": {
            "id": {
                "defaultValue": any;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
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
            "showDelete": {
                "defaultValue": {
                    value: boolean;
                };
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "onDelete": {
                "defaultValue": any;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "actions": {
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
