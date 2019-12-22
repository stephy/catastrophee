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

interface AudioPlayerType {
  streamUrl: string;
}
class AudioPlayer extends React.Component<AudioPlayerType, {}> {
  render() {
    const { streamUrl } = this.props;
    return (
      <div {...css(styles.container)}>
        <audio {...css(styles.video)} controls={true}>
          <source src={streamUrl} type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio>
      </div>
    );
  }
}

export default AudioPlayer;
