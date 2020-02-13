import * as React from "react";
import { CssPropertyTypes } from "@catastrophee/styles";
export interface TabItemStyles {
    container?: CssPropertyTypes;
    selected?: CssPropertyTypes;
}
interface TabItemType {
    style?: TabItemStyles;
    item: {
        action: () => void;
        icon?: any;
        id: string;
        label: any;
        type?: string;
    };
    isSelected: boolean;
}
export declare const TabItem: React.SFC<TabItemType>;
export {};
