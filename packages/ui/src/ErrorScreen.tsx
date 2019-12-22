import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css } from "glamor";
import * as React from "react";
import { Margins, defaults, Family } from "@catastrophee/styles";

const styles = {
  container: {
    display: "grid",
    width: "100%",
    height: "100%",
    marginTop: Margins.default
  },
  content: {
    display: "grid",
    gridTemplateRows: "30px 1fr",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100px"
  },
  icon: {
    alignSelf: "center",
    justifySelf: "center",
    color: defaults.foregroundColor
  },
  body: {
    alignSelf: "start",
    justifySelf: "center"
  },
  message: {
    color: defaults.foregroundColor,
    fontSize: defaults.fontSize,
    fontFamily: Family
  }
};

interface ErrorScreenType {
  message?: string;
}
export const ErrorScreen: React.SFC<ErrorScreenType> = ({ message }) => (
  <div {...css(styles.container)}>
    <div {...css(styles.content)}>
      <div {...css(styles.icon)}>
        <FontAwesomeIcon icon={faExclamationTriangle} />
      </div>
      <div {...css(styles.body)}>
        {message && <div {...css(styles.message)}>{message}</div>}
      </div>
    </div>
  </div>
);

export default ErrorScreen;
