import { css } from "glamor";
import * as React from "react";
import { Color, Borders, DefaultScrollbarStyle } from "@catastrophee/styles";

const styles = {
  container: {
    position: "relative",
    width: "100%",
    outline: "none",
    border: 0
  },
  listbox: {
    backgroundColor: Color.primary400,
    borderRadius: Borders.radius,
    boxSizing: "border-box",
    display: "block",
    left: "0px",
    maxHeight: "200px",
    overflowY: "scroll",
    position: "absolute",
    top: "100%",
    width: "100%",
    zIndex: 100,
    outline: "none",
    border: 0,
    ...DefaultScrollbarStyle
  },
  listboxbody: {
    boxSizing: "border-box",
    width: "100%"
  }
};
interface ListType {
  id: string;
  children: any;
}

export const List: React.SFC<ListType> = ({ id, children }) => {
  return (
    <div {...css(styles.container)}>
      <div
        tabIndex={0}
        id={id}
        role="listbox"
        aria-expanded={true}
        {...css(styles.listbox)}
      >
        <div role="presentation" {...css(styles.listboxbody)}>
          {children}
        </div>
      </div>
    </div>
  );
};
