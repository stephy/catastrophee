import * as React from "react";
import { css } from "glamor";
import { storiesOf } from "@storybook/react";
import { Dropzone, ProgressUpload, FileDropper } from "@catastrophee/ui";

export enum SupportedPreviewTypes {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO",
  DOCUMENT = "DOCUMENT",
  AUDIO = "AUDIO"
}

const uploadStories = storiesOf("@catastrophee/ui", module);
uploadStories
  .add("FileDropper", () => {
    return (
      <FileDropper
        id="mydropzone"
        onFileDrop={files => {
          console.log({ files });
        }}
      />
    );
  })
  .add("Dropzone", () => {
    return (
      <Dropzone
        id="mydropzone"
        onFileDrop={() => {}}
        acceptedFileTypes={["mov", "mp4"]}
        onError={() => {
          alert("Error!");
        }}
      />
    );
  })
  .add("Dropzone With Image Preview", () => {
    class DropzoneWithViewer extends React.Component<any, any> {
      constructor(props) {
        super(props);
        this.state = {
          previewUrl: undefined
        };
      }
      render() {
        const previewUrl = this.state.previewUrl;
        return (
          <Dropzone
            showIcon={true}
            id={"id"}
            acceptedFileLabel={"We only accept"}
            previewUrl={previewUrl}
            previewType={SupportedPreviewTypes.IMAGE}
            onFileDrop={(fileData, previewUrl) => {
              console.log({ fileData, previewUrl });
              this.setState({
                previewUrl
              });
            }}
            acceptedFileTypes={["png", "jpg", "jpeg"]}
            style={{}}
            onError={() => {
              alert("Error/Invalid File!");
            }}
          />
        );
      }
    }
    return <DropzoneWithViewer />;
  })
  .add("Dropzone With Video Preview", () => {
    class DropzoneWithViewer extends React.Component<any, any> {
      constructor(props) {
        super(props);
        this.state = {
          previewUrl: undefined
        };
      }
      render() {
        const previewUrl = this.state.previewUrl;
        return (
          <Dropzone
            showIcon={true}
            id={"unique-id"}
            acceptedFileLabel={"We only accept"}
            previewUrl={previewUrl}
            previewType={SupportedPreviewTypes.VIDEO}
            onFileDrop={(fileData, previewUrl) => {
              console.log({ fileData, previewUrl });
              this.setState({
                previewUrl
              });
            }}
            acceptedFileTypes={["mp4"]}
            style={{}}
            onError={() => {
              alert("Error!");
            }}
          />
        );
      }
    }
    return <DropzoneWithViewer />;
  })
  .add("Dropzone With Audio Preview", () => {
    class DropzoneWithViewer extends React.Component<any, any> {
      constructor(props) {
        super(props);
        this.state = {
          previewUrl: undefined
        };
      }
      render() {
        const previewUrl = this.state.previewUrl;
        return (
          <Dropzone
            showIcon={true}
            id={"unique-id"}
            acceptedFileLabel={"We only accept"}
            previewUrl={previewUrl}
            previewType={SupportedPreviewTypes.AUDIO}
            onFileDrop={(fileData, previewUrl) => {
              console.log({ fileData, previewUrl });
              this.setState({
                previewUrl
              });
            }}
            acceptedFileTypes={["wav"]}
            style={{}}
            onError={() => {
              alert("Error!");
            }}
          />
        );
      }
    }
    return <DropzoneWithViewer />;
  })
  .add("Dropzone With PDF Preview", () => {
    class DropzoneWithViewer extends React.Component<any, any> {
      constructor(props) {
        super(props);
        this.state = {
          previewUrl: undefined
        };
      }
      render() {
        const previewUrl = this.state.previewUrl;
        return (
          <Dropzone
            showIcon={true}
            id={"unique-id"}
            acceptedFileLabel={"We only accept"}
            previewUrl={previewUrl}
            previewType={SupportedPreviewTypes.DOCUMENT}
            onFileDrop={(fileData, previewUrl) => {
              console.log({ fileData, previewUrl });
              this.setState({
                previewUrl
              });
            }}
            acceptedFileTypes={["pdf"]}
            style={{}}
            onError={() => {
              alert("Error!");
            }}
          />
        );
      }
    }
    return <DropzoneWithViewer />;
  })
  .add("Progress Upload", () => {
    return (
      <div {...css({ height: "150px" })}>
        <ProgressUpload
          progress={0.4}
          style={{
            container: {},
            loader: {},
            wrapper: {},
            label: {},
            bar: {}
          }}
        />
      </div>
    );
  });
