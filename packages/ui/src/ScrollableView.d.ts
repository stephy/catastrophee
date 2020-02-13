import * as React from "react";
interface ScrollableViewType {
    id: string;
    topOffset?: number;
    children?: any;
    relativeTo?: string;
    refreshed?: string;
}
export declare class ScrollableView extends React.Component<ScrollableViewType, {
    height: string | undefined;
    refreshed: string | undefined;
}> {
    private view;
    private mounted;
    constructor(props: ScrollableViewType);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleResize(): void;
    updateDimensions(): void;
    render(): JSX.Element;
}
export {};
