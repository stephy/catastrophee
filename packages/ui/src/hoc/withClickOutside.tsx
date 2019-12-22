import * as React from "react";

export default function withClickOutside(ComponentToEnhance) {
  return class WithClickOutside extends React.Component<any, any> {
    public wrapper: any;
    public mounted: boolean;
    constructor(props: any) {
      super(props);
      this.wrapper = React.createRef();
      this.state = {
        isClickOutside: false
      };
      this.mounted = false;
    }
    componentWillMount() {
      document.addEventListener("click", this.checkClick, false);
    }

    componentWillUnmount = () => {
      this.mounted = false;
      document.removeEventListener("click", this.checkClick, false);
    };

    componentDidMount = () => {
      this.mounted = true;
    };

    checkClick = event => {
      if (!this.mounted) {
        return;
      }
      const ignoreClick = event.target.closest(".ignoreClickOutside") !== null;
      if (ignoreClick) {
        return;
      }
      if (this.mounted) {
        if (this.wrapper.current) {
          const isClickInside = this.wrapper.current.contains(event.target);
          if (isClickInside) {
            this.setState({
              isClickOutside: false
            });
          } else {
            this.setState({
              isClickOutside: true
            });
          }
        }
      }
    };

    render() {
      return (
        <div id={`click-outside-${this.props.id}`} ref={this.wrapper}>
          <ComponentToEnhance
            isClickOutside={this.state.isClickOutside}
            {...this.props}
          />
        </div>
      );
    }
  };
}
