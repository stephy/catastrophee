import { css, keyframes } from "glamor";
import { merge } from "lodash";
import * as React from "react";
import {
  toRem,
  Margins,
  Color,
  Paddings,
  CssPropertyTypes,
  Bold,
  Regular
} from "@catastrophee/styles";
import {
  faSpinner,
  faTimes,
  faExclamationCircle,
  faInfoCircle,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const spin = keyframes({
  "100%": { transform: "rotate(360deg)" }
});

const disappear = keyframes({
  "0%": { bottom: 0 },
  "100%": { bottom: -100 }
});

const appear = keyframes({
  "0%": { bottom: -100 },
  "100%": { bottom: 0 }
});
const defaultStyles = {
  container: {
    backgroundColor: Color.surface,
    borderRadius: "5px",
    display: "grid",
    gridTemplateColumns: "1fr 20px",
    left: 0,
    margin: Margins.default,
    marginLeft: Margins.default,
    marginTop: Margins.regular,
    padding: Paddings.regular,
    paddingBottom: Paddings.regular,
    paddingTop: Paddings.regular,
    position: "fixed"
  },
  icon: {
    fontSize: toRem(12)
  },
  spinner: {
    fontSize: toRem(18),
    marginRight: Margins.regular,
    animation: `${spin} 1s linear infinite`,
    color: Color.onSecondary
  },
  text: {
    fontWeight: Bold,
    color: Color.onSecondary,
    marginRight: Margins.slim
  },
  details: {
    fontWeight: Regular,
    color: Color.onSecondary,
    marginRight: Margins.slim
  },
  btnClose: {
    background: "none",
    border: 0,
    cursor: "pointer",
    color: Color.onSecondary
  },
  iconError: {
    color: Color.error,
    fontSize: toRem(20),
    marginRight: Margins.regular
  },
  iconWarning: {
    color: Color.warning,
    fontSize: toRem(20),
    marginRight: Margins.regular
  },
  iconSuccess: {
    color: Color.success,
    fontSize: toRem(20),
    marginRight: Margins.regular
  }
};

export enum FeedbackOptions {
  error = "error",
  loading = "loading",
  success = "success",
  warning = "warning"
}

export interface FeedbackStyle {
  btnClose: CssPropertyTypes;
  container: CssPropertyTypes;
  details: CssPropertyTypes;
  icon: CssPropertyTypes;
  iconError: CssPropertyTypes;
  iconSuccess: CssPropertyTypes;
  iconWarning: CssPropertyTypes;
  spinner: CssPropertyTypes;
  text: CssPropertyTypes;
}

export interface FeedbackType {
  message?: any;
  details?: any;
  type?: FeedbackOptions;
  show: boolean;
  onCancel: () => void;
  zIndex?: number;
  style?: FeedbackStyle;
}

export const Feedback: React.SFC<FeedbackType> = ({
  message,
  details,
  show = false,
  onCancel,
  zIndex = 1000,
  style,
  type = FeedbackOptions.loading
}) => {
  const styles = merge({}, defaultStyles, style);
  if (!message) {
    return null;
  }
  return (
    <div
      tabIndex={0}
      {...css(
        styles.container,
        { zIndex },
        show
          ? {
              bottom: 0,
              animation: `${appear} 0.3s ease-in`
            }
          : {
              bottom: -100,
              animation: `${disappear} 0.3s ease-out`
            }
      )}
      data-style="container"
    >
      <div>
        {type === FeedbackOptions.loading && (
          <FontAwesomeIcon {...css(styles.spinner)} icon={faSpinner} />
        )}
        {type === FeedbackOptions.error && (
          <FontAwesomeIcon
            {...css(styles.iconError)}
            icon={faExclamationCircle}
          />
        )}
        {type === FeedbackOptions.warning && (
          <FontAwesomeIcon {...css(styles.iconWarning)} icon={faInfoCircle} />
        )}
        {type === FeedbackOptions.success && (
          <FontAwesomeIcon {...css(styles.iconSuccess)} icon={faCheckCircle} />
        )}
        <span {...css(styles.text)} data-style="text">
          {message}
        </span>
        <span {...css(styles.details)} data-style="details">
          {details}
        </span>
      </div>
      <button
        onClick={() => onCancel()}
        {...css(styles.btnClose)}
        data-style="btnClose"
      >
        <FontAwesomeIcon
          {...css(styles.icon)}
          data-style="icon"
          icon={faTimes}
        />
      </button>
    </div>
  );
};
