import * as React from "react";
interface VideoPlayerType {
    streamUrl: string;
    onMount?: (ref: HTMLMediaElement | null) => void;
}
declare class VideoPlayer extends React.Component<VideoPlayerType, {}> {
    private video;
    constructor(props: VideoPlayerType);
    componentWillReceiveProps(): void;
    componentDidMount(): void;
    loadVideo: () => void;
    render(): JSX.Element;
}
export default VideoPlayer;
