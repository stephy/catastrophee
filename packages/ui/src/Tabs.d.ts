/// <reference types="react" />
import { CssPropertyTypes } from "@catastrophee/styles";
import { TabItemStyles } from "./TabItem";
interface TabsStyles {
    container?: CssPropertyTypes;
    tabItem?: TabItemStyles;
}
interface TabsType {
    items: Array<{
        action: () => void;
        icon?: any;
        id: string;
        label: string;
        type?: string;
    }>;
    selectedId?: string;
    style?: TabsStyles;
}
export declare const Tabs: (tabs: TabsType) => JSX.Element | null;
export default Tabs;
