import * as React from "react";
import { css } from "glamor";
import {
  Color,
  Elevation,
  Margins,
  Paddings,
  toRem,
  CssPropertyTypes
} from "@catastrophee/styles";
import { merge } from "lodash";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const defaultStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    backgroundColor: Color.surface,
    marginBottom: Margins.default,
    border: `1px solid ${Color.primary400}`,
    ...Elevation.depth4
  },
  icon: {
    fontSize: toRem(18),
    color: Color.onPrimary,
    ":hover": {
      color: Color.light
    }
  },
  toggleSpacing: {
    width: toRem(20),
    padding: Paddings.relaxed
  },
  toggleButton: {
    width: "44px",
    paddingRight: 0,
    padding: Paddings.relaxed,
    display: "flex",
    alignItems: "center",
    border: 0,
    background: "transparent",
    outline: "none"
  },
  header: {
    display: "flex",
    alignItems: "center",
    paddingTop: Paddings.slim,
    paddingBottom: Paddings.slim,
    paddingRight: Paddings.slim,
    borderBottom: `1px solid ${Color.primary400}`
  },
  actionButton: {}
};

interface CollapsableStyleType {
  container?: CssPropertyTypes;
  icon?: CssPropertyTypes;
  toggleSpacing?: CssPropertyTypes;
  toggleButton?: CssPropertyTypes;
  header?: CssPropertyTypes;
  actionButton?: CssPropertyTypes;
}

interface CollapsableType {
  id: string;
  showExpandedIcon?: boolean;
  expanded: boolean;
  style?: CollapsableStyleType;
}

export const composeCollapsable = ({ Header, Body }) => {
  return class CollapsableView extends React.Component<
    CollapsableType,
    {
      expanded: boolean;
    }
  > {
    constructor(props: CollapsableType) {
      super(props);
      this.state = {
        expanded: props.expanded
      };
    }

    componentWillUpdate(nextProps: any) {
      if (nextProps.expanded !== this.props.expanded) {
        this.setState({
          expanded: nextProps.expanded
        });
      }
    }

    public render() {
      const { expanded } = this.state;
      const { style, showExpandedIcon, id } = this.props;
      const styles = merge({}, defaultStyles, style);

      return (
        <div {...css(styles.container)} data-style="container">
          <div {...css(styles.header)} data-style="header">
            {showExpandedIcon && (
              <button
                {...css(styles.toggleButton)}
                data-style="toggleButton"
                onClick={() =>
                  this.setState({ expanded: !this.state.expanded })
                }
              >
                {expanded && (
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    {...css(styles.icon)}
                    data-style="icon"
                  />
                )}
                {!expanded && (
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    {...css(styles.icon)}
                    data-style="icon"
                  />
                )}
              </button>
            )}
            {!showExpandedIcon && (
              <div {...css(styles.toggleSpacing)} data-style="toggleSpacing" />
            )}

            <Header {...this.props} />
          </div>
          {expanded && <Body key={id} {...this.props} />}
        </div>
      );
    }
  };
};
