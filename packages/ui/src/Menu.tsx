import { css } from "glamor";
import * as React from "react";
import * as ReactDOM from "react-dom";

export const UI_Z_INDEX_MENU = 150;
export interface MenuProps {
  visible: boolean;
  width?: string;
}

const style = {
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  height: 0,
  display: "flex",
  zIndex: UI_Z_INDEX_MENU
};

export const MENU_LAYER_PORTAL_SELECTOR = "rio-menu-layer";

export class Menu extends React.Component<MenuProps> {
  constructor(props) {
    super(props);
    if (!document.getElementById(MENU_LAYER_PORTAL_SELECTOR)) {
      // There's no menu layer
      const node = document.createElement("div");
      node.id = MENU_LAYER_PORTAL_SELECTOR;
      // append menu layer as the first child of the body to create the portal
      document.body.insertBefore(node, document.body.firstChild);
    }
  }
  render() {
    const menuRoot = document.getElementById(MENU_LAYER_PORTAL_SELECTOR);
    if (!menuRoot || !this.props.visible) {
      return null;
    }

    return ReactDOM.createPortal(
      <div {...css(style)}>{this.props.children}</div>,
      menuRoot
    );
  }
}
