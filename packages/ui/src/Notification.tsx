import { faCheck, faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css, keyframes } from "glamor";
import * as React from "react";
import {
  Margins,
  catastropheeColors,
  onCatastropheeColors,
  Family,
  defaults,
  Paddings
} from "@catastrophee/styles";
import { CssPropertyTypes } from "@catastrophee/styles";

// PROMISE STATUS
export const PROMISE_PENDING = "pending";
export const PROMISE_FULFILLED = "fulfilled";
export const PROMISE_REJECTED = "rejected";
export const UI_Z_INDEX_NOTIFICATION = 200;

const spin = keyframes({
  "100%": { transform: "rotate(360deg)" }
});
const styles = {
  container: {
    borderRadius: "0px 0px 5px 5px",
    display: "flex",
    flexDirection: "column",
    height: "50px",
    left: "-200px",
    marginLeft: "50%",
    position: "fixed",
    paddingLeft: Paddings.default,
    paddingRight: Paddings.default,
    transition: "all 1s ease",
    width: "400px",
    justifyContent: "center",
    zIndex: UI_Z_INDEX_NOTIFICATION
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  message: {
    fontFamily: Family,
    fontSize: defaults.fontSize,
    marginLeft: Margins.slim
  },
  pendingIcon: {
    animation: `${spin} 1s linear infinite`
  },
  closeBtn: {
    border: 0,
    backgroundColor: "transparent"
  }
};

interface NotificationStylesType {
  closeBtn?: CssPropertyTypes;
  pendingIcon?: CssPropertyTypes;
  message?: CssPropertyTypes;
  content?: CssPropertyTypes;
  container?: CssPropertyTypes;
}

interface NotificationType {
  status: string;
  message: string;
  onClose?: () => void;
  error?: any;
  style?: NotificationStylesType;
}

export const Notification: React.SFC<NotificationType> = ({
  status,
  message,
  onClose,
  error = null
}) => {
  let show = false;
  let backgroundColor = "";
  let color = "";
  let icon;
  let iconStyle = {};
  switch (status) {
    case PROMISE_FULFILLED: {
      backgroundColor = catastropheeColors.green;
      color = onCatastropheeColors.green;
      icon = faCheck;
      show = true;
      break;
    }
    case PROMISE_REJECTED: {
      icon = faTimes;
      backgroundColor = catastropheeColors.red;
      color = onCatastropheeColors.red;
      show = true;
      break;
    }
    case PROMISE_PENDING: {
      icon = faSpinner;
      iconStyle = styles.pendingIcon;
      backgroundColor = catastropheeColors.darkGrey;
      color = onCatastropheeColors.darkGrey;
      show = true;
      break;
    }
    default:
      break;
  }
  if (show) {
    return (
      <div {...css(styles.container, { backgroundColor, color })}>
        <div {...css(styles.content)}>
          <div title={message}>
            <FontAwesomeIcon icon={icon} {...css(iconStyle)} />
            <span {...css(styles.message)}>{message}</span>
          </div>
          <button
            {...css(styles.closeBtn)}
            onClick={() => onClose && onClose()}
          >
            <FontAwesomeIcon {...css({ color })} icon={faTimes} />
          </button>
          {error}
        </div>
      </div>
    );
  }

  return null;
};
