import { css } from "glamor";
import * as React from "react";
import {
  Color,
  Elevation,
  Paddings,
  Hover,
  CssPropertyTypes,
  toRem
} from "@catastrophee/styles";
import withClickOutside from "./hoc/withClickOutside";
import { Menu } from "./Menu";
import { merge } from "lodash";
import { updateFloatingMenuPosition } from "./utils/DomUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const truncateTextWithEllipsis = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis"
};
const defaultStyles = {
  container: {
    position: "relative"
  },
  button: {
    border: 0,
    margin: 0,
    backgroundColor: "transparent",
    cursor: "pointer",
    outline: "none"
  },
  list: {
    position: "absolute",
    paddingTop: Paddings.slim,
    paddingBottom: Paddings.slim,
    boxSizing: "border-box",
    overflow: "hidden",
    width: "200px",
    backgroundColor: Color.surface,
    ...Elevation.depth3
  },
  listItem: {
    padding: Paddings.relaxed,
    cursor: "pointer",
    color: Color.onPrimary,
    ...truncateTextWithEllipsis,
    ":hover": {
      backgroundColor: Hover.items.color
    }
  },
  ellipsisIcon: {
    color: Color.onPrimary,
    fontSize: toRem(14)
  },
  menuWrapper: {
    position: "absolute"
  },
  disabledOption: {
    cursor: "not-allowed",
    opacity: 0.7,
    ":hover": {
      backgroundColor: "transparent"
    }
  }
};

interface MenuItemType {
  id: string;
  label: any;
  action: (e?) => void;
  disabled?: boolean;
}

interface FloatingMenuStyle {
  container?: CssPropertyTypes;
  list?: CssPropertyTypes;
  listItem?: CssPropertyTypes;
  button?: CssPropertyTypes;
  ellipsisIcon?: CssPropertyTypes;
  menuWrapper?: CssPropertyTypes;
  disabledOption?: CssPropertyTypes;
}

interface FloatingMenyType {
  id: string;
  options: Array<MenuItemType>;
  defaultLabel?: string;
  width?: string;
  height?: string;
  isClickOutside?: boolean;
  allowSelectAll?: boolean;
  style?: FloatingMenuStyle;
  customTopOffset?: number;
}

class OptionsMenu extends React.Component<
  FloatingMenyType,
  {
    showOptions: boolean;
  }
> {
  private root: HTMLElement | null;
  private menu: HTMLElement | null;
  constructor(props: FloatingMenyType) {
    super(props);
    this.state = {
      showOptions: false
    };
    this.root = null;
    this.menu = null;
  }

  onHoverOutside = () => {
    this.setState({
      showOptions: false
    });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.isClickOutside) {
      this.setState({
        showOptions: false
      });
    } else if (!nextProps.isClickOutside && nextProps.searchTerm === "") {
      this.setState({
        showOptions: true
      });
    }
  }

  componentDidUpdate() {
    const topOffset = this.props.customTopOffset;
    updateFloatingMenuPosition(this.root, this.menu, true, topOffset);
  }

  render() {
    const {
      children,
      height = "auto",
      id,
      options,
      style,
      width = "180px"
    } = this.props;
    const styles = merge({}, defaultStyles, style);
    const { showOptions } = this.state;
    return (
      <div
        onMouseLeave={this.onHoverOutside}
        ref={node => {
          this.menu = node;
        }}
        id={id}
        {...css(styles.container)}
        data-style="container"
      >
        <button
          {...css(styles.button)}
          data-style="button"
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
            this.setState({ showOptions: true });
          }}
        >
          {!children && (
            <FontAwesomeIcon
              icon={faEllipsisV}
              {...css(styles.ellipsisIcon)}
              data-style="ellipsisIcon"
            />
          )}

          {children && children}
        </button>
        {showOptions && (
          <div {...css(styles.menuWrapper)} data-style="menuWrapper">
            <Menu visible={options.length > 0}>
              <div
                ref={node => {
                  this.root = node;
                }}
                {...css({ width, height }, styles.list)}
                data-style="list"
              >
                {options.map(option => {
                  return (
                    <div
                      id={option.id}
                      {...css(
                        styles.listItem,
                        option.disabled ? styles.disabledOption : {}
                      )}
                      data-style="listItem,disabledOption"
                      onClick={e => {
                        e.stopPropagation();
                        e.preventDefault();
                        if (option.disabled !== true) {
                          option.action(e);
                        }
                      }}
                      key={option.id}
                      title={option.label}
                    >
                      {option.label}
                    </div>
                  );
                })}
              </div>
            </Menu>
          </div>
        )}
      </div>
    );
  }
}

export const FloatingMenu = withClickOutside(OptionsMenu);
