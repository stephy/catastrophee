import * as React from "react";
interface AudioPlayerType {
    streamUrl: string;
}
declare class AudioPlayer extends React.Component<AudioPlayerType, {}> {
    render(): JSX.Element;
}
export default AudioPlayer;
