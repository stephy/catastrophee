import * as React from "react";
import withClickOutside from "./withClickOutside";
export const CLICK_OUTSIDE_BLOCKER_CLASS = "ignoreClickOutside";
export const SHORTCUT_BLOCKER_CLASS = "block-shortcut";

export default function withKeyFiltering(ComponentToEnhance: any) {
  class WithKeyFiltering extends React.Component<any, any> {
    private wrapper: any;
    constructor(props: any) {
      super(props);
      this.wrapper = React.createRef();
      this.state = {
        searchTerm: undefined,
        event: undefined
      };
      this.handleKeyDown = this.handleKeyDown.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }

    isSearchKey = key => {
      return key.length === 1 && key.replace(/[^a-z0-9]/gi, "");
    };

    handleClick(event) {
      // user clicked on component, let's clear search term
      console.log("this.wrapper.current", this.wrapper.current);
      if (this.wrapper.current !== event.target) {
        this.setState({
          searchTerm: "",
          event
        });
      }
    }

    handleKeyDown(event) {
      if (this.wrapper.current) {
        const key = event.key;

        const str = this.state.searchTerm;
        let term = str || "";
        if (key === "Backspace") {
          // remove last character from string
          term = str.substring(0, str.length - 1);
        } else if (key === "Escape") {
          // clear search term
          term = "";
        } else if (key === " " || this.isSearchKey(key)) {
          term = term + key;
        }

        this.setState({
          searchTerm: term,
          event
        });
      }
    }

    render() {
      return (
        <div
          ref={this.wrapper}
          onClick={this.handleClick}
          onKeyDown={this.handleKeyDown}
          className={SHORTCUT_BLOCKER_CLASS}
        >
          <ComponentToEnhance
            searchTerm={this.state.searchTerm}
            event={this.state.event}
            isClickOutside={this.props.isClickOutside}
            {...this.props}
          />
        </div>
      );
    }
  }
  return withClickOutside(WithKeyFiltering);
}
