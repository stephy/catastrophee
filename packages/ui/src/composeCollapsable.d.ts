import * as React from "react";
import { CssPropertyTypes } from "@catastrophee/styles";
interface CollapsableStyleType {
    container?: CssPropertyTypes;
    icon?: CssPropertyTypes;
    toggleSpacing?: CssPropertyTypes;
    toggleButton?: CssPropertyTypes;
    header?: CssPropertyTypes;
    actionButton?: CssPropertyTypes;
}
interface CollapsableType {
    id: string;
    showExpandedIcon?: boolean;
    expanded: boolean;
    style?: CollapsableStyleType;
}
export declare const composeCollapsable: {
    ({ Header, Body }: {
        Header: any;
        Body: any;
    }): {
        new (props: CollapsableType): {
            componentWillUpdate(nextProps: any): void;
            render(): JSX.Element;
            context: any;
            setState<K extends "expanded">(state: {
                expanded: boolean;
            } | ((prevState: Readonly<{
                expanded: boolean;
            }>, props: Readonly<CollapsableType>) => {
                expanded: boolean;
            } | Pick<{
                expanded: boolean;
            }, K>) | Pick<{
                expanded: boolean;
            }, K>, callback?: () => void): void;
            forceUpdate(callback?: () => void): void;
            readonly props: Readonly<CollapsableType> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<{
                expanded: boolean;
            }>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<CollapsableType>, nextState: Readonly<{
                expanded: boolean;
            }>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<CollapsableType>, prevState: Readonly<{
                expanded: boolean;
            }>): any;
            componentDidUpdate?(prevProps: Readonly<CollapsableType>, prevState: Readonly<{
                expanded: boolean;
            }>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<CollapsableType>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<CollapsableType>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<CollapsableType>, nextState: Readonly<{
                expanded: boolean;
            }>, nextContext: any): void;
        };
        contextType?: React.Context<any>;
    };
    displayName: string;
    __docgenInfo: {
        "description": string;
        "displayName": string;
        "props": {
            "Header": {
                "defaultValue": any;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "Body": {
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
