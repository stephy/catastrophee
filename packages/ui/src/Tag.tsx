import * as React from "react";
import { css } from "glamor";
import { merge } from "lodash";
import {
  palette,
  Color,
  Paddings,
  Family,
  defaults,
  onPalette,
  Margins,
  CssPropertyTypes
} from "@catastrophee/styles";

const defaultColor = palette.blue;
const defaultStyles = {
  container: {
    borderRadius: "4px",
    color: Color.light,
    fontFamily: Family,
    fontSize: defaults.fontSize,
    fontWeight: 500,
    margin: Margins.slim,
    paddingBottom: "4px",
    paddingLeft: Paddings.relaxed,
    paddingRight: Paddings.relaxed,
    paddingTop: "4px",
    display: "inline-flex"
  }
};

export interface TagStyle {
  container?: CssPropertyTypes;
  label?: CssPropertyTypes;
}
export interface TagType {
  label: any;
  showBorder?: boolean;
  color?: string;
  fill?: boolean;
  truncateOnWidth?: number;
  style?: TagStyle;
}
export const Tag = ({
  label,
  showBorder,
  color,
  fill,
  truncateOnWidth,
  style = {}
}: TagType) => {
  const currentColor = color || defaultColor;
  const styles = merge({}, defaultStyles, style);
  return (
    <span
      {...css(
        styles.container,
        fill
          ? {
              backgroundColor: palette[currentColor],
              color: onPalette[currentColor]
            }
          : {
              border: `0.092rem solid ${palette[currentColor]}`
            },
        showBorder
          ? {
              borderLeft: `0.4rem solid ${palette[currentColor]}`
            }
          : {}
      )}
      data-style="container"
      title={label}
    >
      {truncateOnWidth && (
        <span
          {...css(
            {
              width: `${truncateOnWidth}px`,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            },
            styles.label
          )}
          data-style="label"
        >
          {label}
        </span>
      )}
      {!truncateOnWidth && (
        <span {...css(styles.label)} data-style="label">
          {label}
        </span>
      )}
    </span>
  );
};
