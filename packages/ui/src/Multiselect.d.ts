import * as React from "react";
import { CssPropertyTypes } from "@catastrophee/styles";
export interface MultiselectItemType {
    id: string;
    label: string;
}
export interface MultiselectStyleType {
    arrowIcon?: CssPropertyTypes;
    arrowIconWrapper?: CssPropertyTypes;
    btnSelectAll?: CssPropertyTypes;
    checkedIcon?: CssPropertyTypes;
    container?: CssPropertyTypes;
    disabled?: CssPropertyTypes;
    emptyMessage?: CssPropertyTypes;
    icon?: CssPropertyTypes;
    list?: CssPropertyTypes;
    listItem?: CssPropertyTypes;
    optionLabel?: CssPropertyTypes;
    searchTerm?: CssPropertyTypes;
    selectAll?: CssPropertyTypes;
    selected?: CssPropertyTypes;
    selectedAllLabel?: CssPropertyTypes;
}
export interface MultiselectType {
    allowSelectAll?: boolean;
    defaultLabel?: string;
    emptyMessage: string;
    height?: string;
    id: string;
    isClickOutside?: boolean;
    onSelect: (selectedIds: Array<string>, allSelected: boolean) => void;
    options: Array<MultiselectItemType>;
    searchTerm?: string;
    selectAllByDefault: boolean;
    selected?: Array<string>;
    style?: MultiselectStyleType;
    width?: string;
    disabled?: boolean;
}
export declare class MultiselectClass extends React.Component<MultiselectType, {
    selected: Array<string>;
    showOptions: boolean;
}> {
    root: React.RefObject<HTMLDivElement>;
    constructor(props: MultiselectType);
    componentWillReceiveProps(nextProps: any): void;
    componentWillUpdate(nextProps: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    getLabelForOptionId(id: any): any;
    selectAll: () => void;
    deselectAll: () => void;
    handleSelected: (e: any, option: any) => void;
    hasAllSelected: (selected: any) => boolean;
    render(): JSX.Element;
}
export declare const Multiselect: {
    new (props: any): {
        wrapper: any;
        mounted: boolean;
        componentWillMount(): void;
        componentWillUnmount: () => void;
        componentDidMount: () => void;
        checkClick: (event: any) => void;
        render(): JSX.Element;
        context: any;
        setState<K extends string | number | symbol>(state: any, callback?: () => void): void;
        forceUpdate(callback?: () => void): void;
        readonly props: Readonly<any> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<any>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<any>, prevState: Readonly<any>): any;
        componentDidUpdate?(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): void;
    };
    contextType?: React.Context<any>;
};
