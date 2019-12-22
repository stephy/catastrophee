import * as React from "react";
import { css } from "glamor";
import {
  catastropheeColors,
  Color,
  Paddings,
  Family,
  defaults,
  Margins
} from "@catastrophee/styles";
import { setAlpha } from "@catastrophee/styles";

const defaultColor = catastropheeColors.blue;
const defaultStyles = {
  container: {
    alignItems: "center",
    border: `0.092rem solid ${catastropheeColors.blue}`,
    borderRadius: "30px",
    color: Color.light,
    display: "inline-flex",
    fontFamily: Family,
    fontSize: defaults.fontSize,
    fontWeight: 700,
    margin: Margins.slim,
    paddingBottom: "2px",
    paddingLeft: Paddings.relaxed,
    paddingRight: Paddings.relaxed,
    paddingTop: "2px"
  }
};

interface PillType {
  label: any;
  showBorder?: boolean;
  color?: string;
  fill?: boolean;
  truncateOnWidth?: number;
}
export const Pill = ({
  label,
  showBorder,
  color,
  fill,
  truncateOnWidth
}: PillType) => {
  const currentColor = catastropheeColors[color] || color;

  return (
    <span
      {...css(
        defaultStyles.container,
        !showBorder ? { border: 0 } : {},
        color ? { borderColor: currentColor } : {},
        fill
          ? {
              backgroundColor: setAlpha(currentColor, 0.3)
            }
          : {}
      )}
      title={label}
    >
      <span
        {...css({
          color: currentColor,
          marginRight: Margins.slim
        })}
      >
        ●
      </span>
      <span
        {...css(
          truncateOnWidth
            ? {
                width: `${truncateOnWidth}px`,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }
            : {}
        )}
      >
        {label}
      </span>
    </span>
  );
};
