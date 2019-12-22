import * as React from "react";
import { css } from "glamor";
import { Color, Family, Paddings, defaults } from "@catastrophee/styles";

const styles = {
  container: {
    fontStyle: "italic",
    color: Color.onPrimary400,
    fontFamily: Family,
    padding: Paddings.default,
    fontSize: defaults.fontSize
  }
};
export const EmptySuggestion = ({ emptyLabel }) => {
  return <div {...css(styles.container)}>{emptyLabel}</div>;
};
