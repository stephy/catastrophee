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
import VideoPlayer from "./VideoPlayer";
import AudioPlayer from "./AudioPlayer";
import { merge } from "lodash";

import { DocumentPreview } from "./DocumentPreview";

export enum SupportedPreviewTypes {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  DOCUMENT = "DOCUMENT",
  AUDIO = "AUDIO"
}

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

export interface FileDataType {
  width?: number;
  height?: number;
  content?: any;
  file: any;
}

export interface DropzoneStylesType {
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

export interface DropzoneType {
  id: string;
  onFileDrop: (fileData: FileDataType, previewUrl?: string) => void;
  onError?: () => void;
  acceptedFileTypes: Array<string>;
  height?: string;
  width?: string;
  showIcon?: boolean;
  previewUrl?: string;
  previewType?: SupportedPreviewTypes;
  acceptedFileLabel?: string;
  style?: DropzoneStylesType;
}

// interface FileType {
//   lastModified: number;
//   lastModifiedDate: string;
//   name: string;
//   size: number;
//   type: string;
//   webkitRelativePath: string;
// }

const getFileTypePrefix = (fileExt: string) => {
  switch (fileExt) {
    case "png":
    case "jpg":
    case "jpeg":
      return `image/${fileExt}`;
    case "mp4":
      return `video/${fileExt}`;
    case "mov":
    case "quicktime":
      return `video/quicktime`;
    case "mp3":
    case "wav":
    case "ac3":
      return `audio/${fileExt}`;
    default:
      return `application/${fileExt}`;
  }
};

export class Dropzone extends React.Component<DropzoneType, any> {
  private dropzone: React.RefObject<any>;
  constructor(props: DropzoneType) {
    super(props);
    this.dropzone = React.createRef();
    this.state = {
      over: false
    };
  }

  loadPDFPreview = (files: any) => {
    const { onFileDrop } = this.props;

    files.forEach(file => {
      const fileData = {
        width: 0,
        height: 0,
        content: null,
        file
      };
      onFileDrop(fileData, URL.createObjectURL(files[0]));
    });
  };

  loadAudioPreview = (files: any) => {
    const { onFileDrop } = this.props;
    let fileData: any = {
      width: null,
      height: null,
      content: null,
      file: null
    };

    // only load preview for the first file
    if (files.length === 1) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const video = document.createElement("audio");
        const fileBlob = e.target.result;
        video.src = fileBlob;
        const file = files[0];
        fileData = {
          content: fileBlob,
          file
        };
        onFileDrop(fileData, URL.createObjectURL(files[0]));
      };
      reader.readAsDataURL(files[0]);
    }
  };

  loadImagePreview = (files: any) => {
    const { onFileDrop } = this.props;
    let fileData: FileDataType = {
      content: null,
      file: null
    };
    // send file data, only support one image for now
    if (files.length === 1) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        const target = e.target;
        const fileBlob = target && target.result;
        image.src = fileBlob;
        const file = files[0];
        image.onload = function() {
          fileData = {
            width: image.width,
            height: image.height,
            content: fileBlob,
            file
          };
          onFileDrop(fileData, URL.createObjectURL(files[0]));
        };
      };
      reader.readAsDataURL(files[0]);
    }
  };

  loadVideoPreview = (files: any) => {
    const { onFileDrop } = this.props;
    let fileData: any = {
      width: null,
      height: null,
      content: null,
      file: null
    };

    // only load preview for the first file
    if (files.length === 1) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const video = document.createElement("video");
        const fileBlob = e.target.result;
        video.src = fileBlob;
        const file = files[0];
        fileData = {
          width: video.width,
          height: video.height,
          content: fileBlob,
          file
        };
        onFileDrop(fileData, URL.createObjectURL(files[0]));
      };
      reader.readAsDataURL(files[0]);
    }
  };

  handleDrop = (e: any) => {
    e.preventDefault();
    const { acceptedFileTypes, onError } = this.props;
    const files = get(e, "dataTransfer.files") || get(e, "target.files");
    if (!files) {
      return;
    }
    const normalizedFileTypes = acceptedFileTypes.map(fileType =>
      getFileTypePrefix(fileType)
    );
    const acceptedFilesList: Array<any> = [];
    const rejectedFilesList: Array<any> = [];
    const filesList = Object.keys(files);
    filesList.forEach(key => {
      const file = files[key];
      const fileType = file.type;
      if (
        normalizedFileTypes.includes(fileType) ||
        acceptedFileTypes.length === 0
      ) {
        acceptedFilesList.push(file);
      } else {
        rejectedFilesList.push(file);
      }
    });

    const hasRejected = rejectedFilesList.length > 0;
    const hasAccepted = acceptedFilesList.length > 0;

    if (hasAccepted) {
      const filetype = acceptedFilesList[0].type;
      if (filetype) {
        // load preview image
        if (filetype.includes("image")) {
          this.loadImagePreview(files);
        }

        if (filetype.includes("video")) {
          this.loadVideoPreview(files);
        }

        if (filetype.includes("audio")) {
          this.loadAudioPreview(files);
        }

        const pdfs = acceptedFilesList.filter(file => {
          if (file.type.includes("pdf")) {
            return true;
          }
          return false;
        });

        if (pdfs.length) {
          this.loadPDFPreview(pdfs);
        }
      }
    }
    if (hasRejected) {
      onError && onError();
    }
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
      acceptedFileLabel,
      acceptedFileTypes,
      height,
      id,
      previewType,
      previewUrl,
      showIcon = true,
      width,
      style = {}
    } = this.props;
    const { over } = this.state;
    const styles = merge({}, defaultStyles, style);
    let hasPreview = previewUrl;
    if (previewUrl && previewUrl.includes("unavailableUrl")) {
      hasPreview = undefined;
    }

    const label = acceptedFileLabel || "We accept ";
    return (
      <div
        key={id}
        {...css(
          styles.container,
          over ? styles.over : {},
          previewUrl ? styles.previewWrapper : {}
        )}
        onDrop={this.handleDrop}
        onDragOver={this.handleDragOver}
        onDragLeave={this.handleDragLeave}
        ref={this.dropzone}
      >
        {hasPreview && (
          <div
            {...css({ width: "100%", height: "100%", position: "absolute" })}
          >
            {previewType === SupportedPreviewTypes.IMAGE && previewUrl && (
              <div
                className="dropzone-image-preview"
                {...css({
                  backgroundImage: `url(${previewUrl})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: height || "100%",
                  width: width || "100%"
                })}
              />
            )}

            {previewType === SupportedPreviewTypes.VIDEO && previewUrl && (
              <VideoPlayer streamUrl={previewUrl} />
            )}

            {previewType === SupportedPreviewTypes.AUDIO && previewUrl && (
              <AudioPlayer streamUrl={previewUrl} />
            )}

            {previewType === SupportedPreviewTypes.DOCUMENT && previewUrl && (
              <DocumentPreview
                url={previewUrl}
                filename={previewUrl}
                type="PDF"
              />
            )}
          </div>
        )}
        {!hasPreview && (
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
                Drop Here!
              </span>
              <span {...css(styles.accepting, Font.body)}>
                {acceptedFileTypes && acceptedFileTypes.length !== 0 && (
                  <span>
                    {label} {acceptedFileTypes.join(", ")} files
                  </span>
                )}
                {acceptedFileTypes && acceptedFileTypes.length === 0 && (
                  <span>We accept any file type</span>
                )}
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
        )}
      </div>
    );
  }
}
