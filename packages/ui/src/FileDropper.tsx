import * as React from "react";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css } from "glamor";
import { get } from "lodash";
import {
  Color,
  Font,
  Margins,
  toRem,
  CssPropertyTypes
} from "@catastrophee/styles";
import { merge } from "lodash";

const URL = window.URL;

const defaultStyles = {
  container: {
    display: "grid",
    border: `1px dashed ${Color.primary200}`,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    boxSizing: "border-box"
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box"
  },
  bodyWrapper: {
    display: "grid",
    gridTemplateRows: "14px 14px 1fr",
    justifyContent: "center"
  },
  center: {
    alignSelf: "center",
    justifySelf: "center"
  },
  previewWrapper: {
    display: "grid",
    width: "100%",
    height: "100%",
    border: `1px solid ${Color.primary100}`
  },
  accepting: {
    fontStyle: "italic",
    color: Color.primary10
  },
  icon: {
    fontSize: toRem(30),
    marginBottom: Margins.relaxed,
    color: Color.primary10
  },
  upload: {
    position: "relative",
    overflow: "hidden",
    display: "inline-block"
  },
  uploadBtn: {
    color: Color.secondary,
    border: "none",
    background: "none"
  },
  uploadInput: {
    fontSize: "100px",
    position: "absolute",
    cursor: "pointer",
    left: 0,
    top: 0,
    opacity: 0
  },
  over: {
    border: `1px dashed ${Color.secondary}`
  },
  invalidFileName: {
    color: Color.primary300
  },
  errorMessage: {
    color: Color.error
  },
  messageWrapper: {
    marginBottom: Margins.default
  },
  acceptedMessage: {
    color: Color.success
  }
};

export interface FileDropperStylesType {
  container?: CssPropertyTypes;
  wrapper?: CssPropertyTypes;
  bodyWrapper?: CssPropertyTypes;
  center?: CssPropertyTypes;
  previewWrapper?: CssPropertyTypes;
  accepting?: CssPropertyTypes;
  icon?: CssPropertyTypes;
  upload?: CssPropertyTypes;
  uploadBtn?: CssPropertyTypes;
  uploadInput?: CssPropertyTypes;
  over?: CssPropertyTypes;
  invalidFileName?: CssPropertyTypes;
  errorMessage?: CssPropertyTypes;
  messageWrapper?: CssPropertyTypes;
  acceptedMessage?: CssPropertyTypes;
}

export interface FileMetadataType {
  lastModified: number;
  lastModifiedDate: string;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

export interface FileDropperType {
  id: string;
  label?: string;
  onFileDrop: (file: FileList[]) => void;
  showIcon?: boolean;
  style?: FileDropperStylesType;
}

export class FileDropper extends React.Component<FileDropperType, any> {
  private FileDropper: React.RefObject<any>;
  constructor(props: FileDropperType) {
    super(props);
    this.FileDropper = React.createRef();
    this.state = {
      over: false
    };
  }

  handleDrop = (e: any) => {
    e.preventDefault();
    const files = get(e, "dataTransfer.files") || get(e, "target.files");
    if (!files) {
      return;
    }
    this.props.onFileDrop(files);
  };

  handleDragOver = (e: any) => {
    e.preventDefault();
    this.setState({
      over: true
    });
  };

  handleDragLeave = (e: any) => {
    e.preventDefault();
    this.setState({
      over: false
    });
  };

  render() {
    const {
      id,
      label = "Drop files here!",
      showIcon = true,
      style = {}
    } = this.props;
    const { over } = this.state;
    const styles = merge({}, defaultStyles, style);
    return (
      <div
        key={id}
        {...css(styles.container, over ? styles.over : {})}
        onDrop={this.handleDrop}
        onDragOver={this.handleDragOver}
        onDragLeave={this.handleDragLeave}
        ref={this.FileDropper}
      >
        <div {...css(styles.wrapper)}>
          {showIcon && (
            <div {...css(styles.center)}>
              <FontAwesomeIcon {...css(styles.icon)} icon={faUpload} />
            </div>
          )}
          <div {...css(styles.bodyWrapper, styles.center)}>
            <span
              {...css(
                Font.body,
                { fontSize: toRem(16), color: Color.primary10 },
                styles.center
              )}
            >
              {label}
            </span>

            <div {...css(styles.upload, styles.center)}>
              <button {...css(styles.uploadBtn)}>Browse Desktop</button>
              <input
                onChange={e => this.handleDrop(e)}
                {...css(styles.uploadInput)}
                type="file"
                name="myfile"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
