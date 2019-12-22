import { css } from "glamor";
import * as React from "react";
import { DefaultSpinner, SpinnerType } from "./DefaultSpinner";
import { ScrollableView } from "./ScrollableView";
import { merge } from "lodash";
import { CssPropertyTypes, Color, Family, toRem } from "@catastrophee/styles";

const defaultStyles = {
  container: {
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100vh"
  },
  content: {
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100px"
  },
  loadingWrapper: {
    display: "grid",
    alignItems: "center",
    justifyContent: "center"
  },
  message: {
    justifySelf: "center",
    color: Color.onPrimary,
    fontFamily: Family,
    fontSize: toRem(13)
  }
};

interface LoadingStylesType {
  container?: CssPropertyTypes;
  content?: CssPropertyTypes;
  loadingWrapper?: CssPropertyTypes;
  message?: CssPropertyTypes;
}
interface LoadingScreenType {
  id: string;
  message?: string;
  style?: LoadingStylesType;
  spinner?: SpinnerType;
}
export const LoadingScreen: React.SFC<LoadingScreenType> = ({
  message,
  style,
  spinner,
  id
}) => {
  const styles = merge({}, defaultStyles, style);
  return (
    <ScrollableView id={id}>
      <div {...css(styles.container)}>
        <div {...css(styles.content)}>
          <div {...css(styles.loadingWrapper)}>
            <DefaultSpinner {...spinner} />
          </div>
          {message && <div {...css(styles.message)}>{message}</div>}
        </div>
      </div>
    </ScrollableView>
  );
};
