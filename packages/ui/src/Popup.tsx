import { css, any } from "glamor";
import { observer } from "mobx-react";
import { merge } from "lodash";
import * as React from "react";
import {
  Font,
  Buttons,
  Color,
  Paddings,
  setAlpha,
  CssPropertyTypes
} from "@catastrophee/styles";

const defaultStyles = {
  container: {
    backgroundColor: Color.surface,
    borderRadius: "4px",
    display: "grid",
    outline: "none"
  },
  header: {
    borderBottom: `1px solid ${setAlpha(Color.onPrimary, 0.1)}`,
    borderRadius: "6px 6px 0 0",
    paddingBottom: Paddings.default,
    paddingLeft: Paddings.default,
    paddingTop: Paddings.default
  },
  title: {
    color: Color.onPrimary,
    margin: 0,
    padding: 0
  },
  btnCancel: {},
  btnConfirm: {},
  body: {
    backgroundColor: Color.primary,
    paddingBottom: Paddings.slim,
    paddingLeft: Paddings.default,
    paddingRight: Paddings.default,
    paddingTop: Paddings.slim,
    outline: "none",
    overflow: "hidden"
  },
  footer: {
    borderTop: `1px solid ${setAlpha(Color.onPrimary, 0.1)}`,
    display: "flex",
    justifyContent: "flex-end",
    paddingBottom: Paddings.relaxed,
    paddingLeft: Paddings.default,
    paddingRight: Paddings.relaxed,
    paddingTop: Paddings.relaxed
  }
};

export interface PopupStyles {
  container?: CssPropertyTypes;
  body?: CssPropertyTypes;
  btnCancel?: CssPropertyTypes;
  btnConfirm?: CssPropertyTypes;
  footer?: CssPropertyTypes;
  header?: CssPropertyTypes;
  title?: CssPropertyTypes;
}

export interface ActionButtonType {
  action: () => void;
  label: any;
  enabled?: boolean;
}
export interface PopupType {
  cancel?: ActionButtonType;
  children?: any;
  clearHeader?: boolean;
  confirm?: ActionButtonType;
  style?: PopupStyles;
  title: any;
}

export const Popup: React.SFC<PopupType> = observer(
  ({ cancel, confirm, title, style, children, clearHeader = false }) => {
    const styles = merge({}, defaultStyles, style);
    return (
      <div tabIndex={0} {...css(styles.container)} data-style="container">
        <header
          {...css(
            styles.header,
            clearHeader
              ? { backgroundColor: Color.primary, borderBottom: 0 }
              : {}
          )}
          data-style="header"
        >
          <h1 {...css(Font.h2, styles.title)} data-style="title">
            {title}
          </h1>
        </header>
        <div tabIndex={0} {...css(styles.body)} data-style="body">
          {children}
        </div>
        <footer {...css(styles.footer)} data-style="footer">
          {cancel && (
            <button
              {...css(
                Buttons.secondary,
                styles.btnCancel,
                cancel.enabled === false
                  ? { opacity: 0.5, cursor: "blocked" }
                  : {}
              )}
              onClick={() => cancel.action()}
              data-style="btnCancel"
            >
              {cancel.label}
            </button>
          )}
          {confirm && (
            <button
              {...css(
                Buttons.primary,
                styles.btnConfirm,
                confirm.enabled === false
                  ? { opacity: 0.5, cursor: "blocked" }
                  : {}
              )}
              onClick={() => {
                if (confirm.enabled === true) {
                  confirm.action();
                }
              }}
              data-style="btnConfirm"
            >
              {confirm.label}
            </button>
          )}
        </footer>
      </div>
    );
  }
);
