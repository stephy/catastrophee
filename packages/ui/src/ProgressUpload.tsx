import { css } from "glamor";
import * as React from "react";
import {
  Color,
  Margins,
  setAlpha,
  toRem,
  CssPropertyTypes
} from "@catastrophee/styles";
import { merge } from "lodash";

const defaultStyles = {
  container: {
    position: "relative",
    height: "100%",
    width: "100%",
    display: "grid",
    alignItems: "center",
    visibility: "visible",
    transition: "all 3s ease-in-out",
    margin: 0,
    padding: 0,
    boxSizing: "border-box"
  },
  loader: {
    display: "grid",
    gridTemplateRows: "12px 20px",
    width: "300px",
    margin: 0,
    padding: 0,
    boxSizing: "border-box"
  },
  wrapper: {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    backgroundColor: Color.background,
    width: "300px",
    height: "10px",
    border: "1px solid #161616",
    borderRadius: "4px",
    boxShadow: `1px 2px 3px ${setAlpha(Color.dark, 0.7)}`
  },
  label: {
    justifySelf: "end",
    fontSize: toRem(9),
    fontStyle: "italic",
    marginTop: Margins.slim,
    textShadow: `1px 2px 3px ${setAlpha(Color.dark, 0.7)}`
  },
  bar: {}
};

export interface UploadStyleType {
  container?: CssPropertyTypes;
  loader?: CssPropertyTypes;
  wrapper?: CssPropertyTypes;
  bar?: CssPropertyTypes;
  label?: CssPropertyTypes;
}

export interface ProgressUploadType {
  style?: UploadStyleType;
  progress: number;
}

export const ProgressUpload: React.SFC<ProgressUploadType> = ({
  progress,
  style
}) => {
  const styles = merge({}, defaultStyles, style);
  const currentProgress = (progress * 100).toFixed(0);
  if (progress > 1) {
    return null;
  }
  let fadeOut = {};
  if (progress === 1) {
    fadeOut = { opacity: 0 };
  }
  return (
    <div {...css(styles.container, fadeOut)} data-style="container">
      <div {...css(styles.loader)} data-style="loader">
        <div {...css(styles.wrapper)} data-style="wrapper">
          <div
            {...css(
              {
                margin: 0,
                padding: 0,
                width: `${currentProgress}%`,
                height: "10px",
                borderRadius: "4px",
                transition: "all 0.3s ease-in-out",
                background: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                ${Color.secondary} 10px,
                ${Color.secondary} 20px
              ),
              linear-gradient(
                to bottom,
                ${setAlpha(Color.secondary, 0.7)},
                ${setAlpha(Color.secondary, 0.9)}
              )`
              },
              styles.bar
            )}
            data-style="bar"
          />
        </div>
        <div {...css(styles.label)} data-style="label">
          {currentProgress}%
        </div>
      </div>
    </div>
  );
};
