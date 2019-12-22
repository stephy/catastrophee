import * as React from "react";
import { css } from "glamor";
import { Elevation } from "@catastrophee/styles";

const styles = {
  container: {
    backgroundColor: "black"
  },
  video: {
    ...Elevation.depth4
  },
  controls: {
    backgroundColor: "black",
    height: "30px"
  }
};

interface VideoPlayerType {
  streamUrl: string;
  onMount?: (ref: HTMLMediaElement | null) => void;
}
class VideoPlayer extends React.Component<VideoPlayerType, {}> {
  private video: HTMLMediaElement | null;
  constructor(props: VideoPlayerType) {
    super(props);
    this.video = null;
  }
  componentWillReceiveProps() {
    this.loadVideo();
  }
  componentDidMount() {
    this.loadVideo();
  }
  loadVideo = () => {
    const { onMount } = this.props;
    onMount && onMount(this.video);
  };
  render() {
    const { streamUrl } = this.props;
    return (
      <div {...css(styles.container)}>
        <video
          ref={node => (this.video = node)}
          {...css(styles.video)}
          width="100%"
          controls={true}
        >
          <source src={streamUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
}

export default VideoPlayer;
