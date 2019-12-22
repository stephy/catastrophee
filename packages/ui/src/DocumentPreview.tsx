import * as React from "react";
import { css } from "glamor";
import { Margins } from "@catastrophee/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row"
  },
  link: {
    marginLeft: Margins.slim
  }
};

interface DocumentPreviewType {
  url: string;
  filename: string;
  type: "PDF" | "DOC";
}
export class DocumentPreview extends React.Component<DocumentPreviewType, {}> {
  render() {
    const { url, filename } = this.props;
    return (
      <div {...css(styles.container)}>
        <FontAwesomeIcon {...css({ color: "red" })} icon={faFilePdf} />
        <a {...css(styles.link)} href={url}>
          {filename}
        </a>
      </div>
    );
  }
}
