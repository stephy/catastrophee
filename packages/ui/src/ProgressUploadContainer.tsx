import { css } from "glamor";
import * as React from "react";
import { ProgressUpload, UploadStyleType } from "./ProgressUpload";
import { Color, CssPropertyTypes, setAlpha } from "@catastrophee/styles";
import { merge } from "lodash";

const defaultStyles = {
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box"
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "100%",
    position: "absolute"
  },
  progressBar: {
    zIndex: 100
  },
  mask: {
    zIndex: 99,
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundColor: setAlpha(Color.secondary, 0.45)
  }
};

export interface ProgressUploadContainerStyleType {
  progressUpload?: UploadStyleType;
  progressBar?: CssPropertyTypes;
  mask?: CssPropertyTypes;
  wrapper?: CssPropertyTypes;
}

interface ProgressUploadType {
  children?: any;
  id: string;
  status?: string;
  style?: ProgressUploadContainerStyleType;
  progress: number;
}

export const ProgressUploadContainer: React.SFC<ProgressUploadType> = ({
  children,
  id,
  status,
  style,
  progress
}) => {
  const styles = merge({}, defaultStyles, style);
  return (
    <div
      key={`progress-uploader-${id}`}
      {...css(styles.container)}
      data-style="container"
    >
      {status === "pending" && (
        <div {...css(styles.progressBar)} data-style="progressBar">
          <ProgressUpload progress={progress} style={styles.progressUpload} />
        </div>
      )}

      {status === "pending" && <div {...css(styles.mask)} data-style="mask" />}
      <div {...css(styles.wrapper)} data-style="wrapper">
        {children}
      </div>
    </div>
  );
};
