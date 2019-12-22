import { css, focus } from "glamor";
import { merge } from "lodash";
import * as React from "react";
import {
  Color,
  Elevation,
  defaults,
  Family,
  Paddings,
  CssPropertyTypes
} from "@catastrophee/styles";

const defaultStyles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  wrapper: {
    borderRadius: "20px",
    width: "34px",
    height: "18px",
    padding: "2px",
    outline: "none",
    border: "2px solid transparent"
  },
  presentation: {
    width: "34px",
    height: "18px",
    borderRadius: "20px",
    outline: "none",
    padding: 0,
    margin: 0,
    position: "relative",
    cursor: "pointer",
    border: 0
  },
  thumb: {
    width: "14px",
    height: "14px",
    top: "2px",
    backgroundColor: "white",
    position: "absolute",
    borderRadius: "10px",
    transition: "all 0.2s cubic-bezier(0.42, 0, 0.58, 1)",
    cursor: "pointer",
    ...Elevation.depth3
  },
  label: {
    fontSize: defaults.fontSize,
    color: defaults.foregroundColor,
    fontFamily: Family,
    paddingLeft: Paddings.slim
  },
  disabled: {
    opacity: 0.5,
    cursor: "not-allowed"
  },
  on: {
    backgroundColor: Color.secondary
  },
  off: {
    backgroundColor: Color.primary100
  }
};

interface ToggleStyleType {
  container?: CssPropertyTypes;
  label?: CssPropertyTypes;
  presentation?: CssPropertyTypes;
  thumb?: CssPropertyTypes;
  wrapper?: CssPropertyTypes;
  on?: CssPropertyTypes;
  off?: CssPropertyTypes;
  disabled?: CssPropertyTypes;
}

interface ToggleType {
  on: boolean;
  onToggle: () => void;
  style?: ToggleStyleType;
  disabled?: boolean;
  label?: string;
}

export const Toggle: React.SFC<ToggleType> = ({
  on,
  onToggle,
  style,
  label,
  disabled = false
}) => {
  const styles = merge({}, defaultStyles, style);

  return (
    <div {...css(styles.container)} data-style="container">
      <div
        data-style="wrapper"
        role="switch"
        aria-checked={on}
        tabIndex={0}
        {...css(styles.wrapper)}
        {...focus({ border: `2px solid ${Color.secondary}` })}
        onClick={() => {
          onToggle();
        }}
      >
        <div
          role="presentation"
          data-style="presentation,on,off,disabled"
          {...css(
            styles.presentation,
            on ? styles.on : styles.off,
            disabled ? styles.disabled : {}
          )}
        >
          <div
            {...css(styles.thumb, { left: on ? "18px" : "2px" })}
            data-style="thumb"
          />
        </div>
      </div>
      <span {...css(styles.label)} data-style="label">
        {label}
      </span>
    </div>
  );
};
