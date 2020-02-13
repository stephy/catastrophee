import * as React from "react";
export declare const UI_Z_INDEX_MENU = 150;
export interface MenuProps {
    visible: boolean;
    width?: string;
}
export declare const MENU_LAYER_PORTAL_SELECTOR = "rio-menu-layer";
export declare class Menu extends React.Component<MenuProps> {
    constructor(props: any);
    render(): React.ReactPortal;
}
