import { faCaretDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css } from "glamor";
import * as React from "react";
import {
  Color,
  Elevation,
  Paddings,
  Borders,
  Hover,
  Family,
  defaults,
  Margins,
  CssPropertyTypes
} from "@catastrophee/styles";
import { merge } from "lodash";
import withKeyFiltering, {
  SHORTCUT_BLOCKER_CLASS
} from "./hoc/withKeyFiltering";

const defaultStyles = {
  container: {},
  list: {
    position: "absolute",
    boxSizing: "border-box",
    maxHeight: "200px",
    overflow: "scroll",
    backgroundColor: Color.primary200,
    ...Elevation.depth3
  },
  listItem: {
    paddingTop: Paddings.slim,
    paddingBottom: Paddings.slim,
    paddingLeft: Paddings.relaxed,
    paddingRight: Paddings.relaxed,
    color: Color.light,
    fontFamily: Family,
    fontSize: defaults.fontSize,
    display: "flex",
    alignItems: "Center",
    height: "30px",
    cursor: "pointer",
    ":hover": {
      backgroundColor: Hover.items.color
    }
  },
  selected: {
    border: `1px solid ${Color.primary100}`,
    borderRadius: Borders.radius,
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    padding: Paddings.regular
  },
  selectedText: {
    color: Color.light,
    fontFamily: Family,
    fontSize: defaults.fontSize
  },
  arrowIcon: {
    color: Color.light,
    position: "absolute",
    top: 0,
    right: 0,
    marginRight: Margins.slim
  },
  search: {
    position: "relative",
    width: "100%"
  }
};

interface MenuItemType {
  id: string;
  action: () => void;
  label: string;
}

interface JumpMenuStyleType {
  container?: CssPropertyTypes;
  list?: CssPropertyTypes;
  listItem?: CssPropertyTypes;
  selected?: CssPropertyTypes;
  selectedText?: CssPropertyTypes;
  arrowIcon?: CssPropertyTypes;
  search?: CssPropertyTypes;
}

interface JumpMenuType {
  id: string;
  options: Array<MenuItemType>;
  selected?: {
    id: string;
    label: string;
  };
  defaultLabel: any;
  width?: string;
  isClickOutside?: boolean;
  style?: JumpMenuStyleType;
  disabled?: boolean;
  selectedId?: string;
  searchTerm: string;
}

const DEFAULT_LABEL = "Select Option";
class JumpMenuClass extends React.Component<
  JumpMenuType,
  {
    selected: {
      id: string | null;
      label: string | null;
    };
    showOptions: boolean;
  }
> {
  constructor(props: JumpMenuType) {
    super(props);
    let selected = props.selected || {
      id: null,
      label: null
    };

    if (props.selectedId) {
      selected = {
        id: props.selectedId,
        label: this.getLabelForOptionId(props.selectedId)
      };
    }

    this.state = {
      selected,
      showOptions: false
    };
  }

  getLabelForOptionId = id => {
    const { options, defaultLabel } = this.props;
    const filteredOption = options
      ? options.filter(option => option.id === id)
      : [];
    if (filteredOption.length > 0) {
      return filteredOption[0].label;
    }
    return defaultLabel || DEFAULT_LABEL;
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.isClickOutside) {
      this.setState({
        showOptions: false
      });
    }
    // user just clicked on the menu again, after clicking outside
    if (
      this.props.isClickOutside &&
      !nextProps.isClickOutside &&
      !this.props.disabled
    ) {
      this.setState({
        showOptions: true
      });
    }
  }

  render() {
    const {
      options,
      defaultLabel,
      width = "180px",
      style,
      disabled,
      id,
      searchTerm,
      selectedId
    } = this.props;
    const { selected, showOptions } = this.state;
    let defaultSelected = selected.label || defaultLabel || DEFAULT_LABEL;
    const styles = style ? merge({}, defaultStyles, style) : defaultStyles;
    const disabledStyle = disabled
      ? { opacity: 0.7, cursor: "not-allowed" }
      : {};
    const hasSearchTerm = searchTerm && searchTerm !== "";
    let filteredOptions = options;
    if (hasSearchTerm && !disabled) {
      filteredOptions = options.filter(option => {
        if (
          option.label.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        ) {
          return true;
        }
        return false;
      });
    }
    if (!selectedId) {
      defaultSelected = defaultLabel || "Select Option";
    } else {
      defaultSelected =
        this.getLabelForOptionId(selectedId) || defaultLabel || "Select Option";
    }

    let searchLabel = searchTerm;

    if (disabled) {
      searchLabel = defaultSelected;
    }

    return (
      <div
        {...css(styles.container, { width })}
        data-style="container"
        tabIndex={0}
        id={id}
        className={SHORTCUT_BLOCKER_CLASS}
      >
        <div
          {...css(styles.selected, disabledStyle)}
          data-style="selected"
          onClick={() => {
            if (!disabled) {
              this.setState({ showOptions: !showOptions });
            }
          }}
        >
          {hasSearchTerm && (
            <div {...css(styles.search, disabledStyle)}>
              <span {...css(styles.selectedText)} data-style="selectedText">
                {searchLabel}
              </span>
              <span {...css(styles.arrowIcon)} data-style="arrowIcon">
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </div>
          )}
          {!hasSearchTerm && (
            <div {...css(styles.search, disabledStyle)} data-style="search">
              <span {...css(styles.selectedText)} data-style="selectedText">
                {defaultSelected}
              </span>
              <span {...css(styles.arrowIcon)} data-style="arrowIcon">
                <FontAwesomeIcon icon={faCaretDown} data-style="icon" />
              </span>
            </div>
          )}
        </div>
        {showOptions && (
          <div
            {...css(styles.list, { width })}
            style={
              style &&
              style.list &&
              style.list.width && { width: style.list.width }
            }
            data-style="list"
          >
            {filteredOptions &&
              filteredOptions.map(option => {
                return (
                  <div
                    {...css(styles.listItem)}
                    data-style="listItem"
                    onClick={() => {
                      this.setState({
                        showOptions: false,
                        selected: {
                          id: option.id,
                          label: option.label
                        }
                      });
                      option && option.action && option.action();
                    }}
                    key={`${id}-${option.id}`}
                  >
                    <span
                      {...css(styles.selectedText)}
                      data-style="selectedText"
                    >
                      {option.label}
                    </span>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    );
  }
}

export const JumpMenu = withKeyFiltering(JumpMenuClass);
