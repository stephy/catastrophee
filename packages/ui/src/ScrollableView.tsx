import { css } from "glamor";
import * as React from "react";
import { DefaultScrollbarStyle } from "@catastrophee/styles";

const styles = {
  container: {
    position: "relative",
    width: "100%",
    overflow: "scroll",
    boxSizing: "border-box",
    ...DefaultScrollbarStyle
  }
};

interface ScrollableViewType {
  id: string;
  topOffset?: number;
  children?: any;
  relativeTo?: string; //the top most element that will have the topoffset wanted
  refreshed?: string;
}

export class ScrollableView extends React.Component<
  ScrollableViewType,
  {
    height: string | undefined;
    refreshed: string | undefined;
  }
> {
  private view: HTMLElement | null;
  private mounted: boolean;
  constructor(props: ScrollableViewType) {
    super(props);
    this.view = null;
    this.mounted = false;
    this.state = {
      height: undefined,
      refreshed: ""
    };
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.handleResize.bind(this));
    this.mounted = true;
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize.bind(this));
    this.mounted = false;
  }

  handleResize() {
    if (!this.mounted) {
      return;
    }
    const { relativeTo, topOffset } = this.props;
    if (this.view) {
      let offsetTop = this.view.offsetTop;

      if (relativeTo) {
        const relativeToNode = document.getElementById(relativeTo);
        offsetTop =
          (relativeToNode && relativeToNode.getBoundingClientRect().top) || 0;
      }
      const extraOffset = topOffset || 0;

      const newHeight = window.innerHeight - offsetTop - extraOffset;

      this.setState({
        height: `${newHeight}px`
      });
    }
  }

  updateDimensions() {
    const { relativeTo, topOffset } = this.props;
    if (this.view) {
      let offsetTop = this.view.offsetTop;
      const currentHeight = this.view.clientHeight;

      if (relativeTo) {
        const relativeToNode = document.getElementById(relativeTo);
        offsetTop =
          (relativeToNode && relativeToNode.getBoundingClientRect().top) || 0;
      }

      const extraOffset = topOffset || 0;
      const newHeight = window.innerHeight - offsetTop - extraOffset;
      // let's only modify height if the height is too big to fit the screen
      if (currentHeight > newHeight + 1) {
        // the plus one is added here, so we don't go on an infinite loop
        this.setState({
          height: `${window.innerHeight - offsetTop - extraOffset}px`
        });
      } else if (newHeight && newHeight > currentHeight + 1) {
        // this will be set when the new height of the component is larger than the current height
        // the plus one is added here, so we don't go on an infinite loop
        this.setState({
          height: `${newHeight}px`
        });
      }
    }
  }

  render() {
    const heightStyle = this.state.height ? { height: this.state.height } : {};
    const { id } = this.props;
    return (
      <div
        id={`scrollview-${id}`}
        {...css(styles.container, heightStyle)}
        ref={node => {
          this.view = node;
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
