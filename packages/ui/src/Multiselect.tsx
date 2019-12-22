import * as React from "react";
import {
  faCaretDown,
  faCheckSquare,
  faSquare
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { css } from "glamor";
import { merge } from "lodash";
import {
  Color,
  Elevation,
  Margins,
  Paddings,
  Font,
  Borders,
  toRem,
  Family,
  DefaultScrollbarStyle,
  CssPropertyTypes
} from "@catastrophee/styles";
import { updateLayerPosition } from "./utils/DomUtils";
import { Menu } from "./Menu";
import withKeyFiltering, {
  SHORTCUT_BLOCKER_CLASS,
  CLICK_OUTSIDE_BLOCKER_CLASS
} from "./hoc/withKeyFiltering";

const truncateTextWithEllipsis = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
};

const defaultStyles = {
  container: {
    width: "180px",
    display: "flex",
    flexDirection: "column",
    position: "relative"
  },
  disabled: {
    opacity: 0.5,
    cursor: "not-allowed"
  },
  list: {
    backgroundColor: Color.primary300,
    boxSizing: "border-box",
    overflowY: "scroll",
    position: "absolute",
    ...Elevation.depth3,
    ...DefaultScrollbarStyle
  },
  listItemContainer: {
    padding: `0 ${Paddings.relaxed}`
  },
  listItem: {
    color: Color.onPrimary,
    cursor: "pointer",
    fontFamily: Family,
    fontSize: toRem(14),
    marginBottom: Margins.slim,
    marginTop: Margins.slim,
    padding: Paddings.slim,
    ...truncateTextWithEllipsis
  },
  selected: {
    border: `1px solid ${Color.primary100}`,
    borderRadius: Borders.radius,
    boxSizing: "border-box",
    color: Color.onPrimary,
    cursor: "pointer",
    fontFamily: Family,
    fontSize: toRem(12),
    minHeight: "32px",
    padding: `${Paddings.regular} 0 0 ${Paddings.relaxed}`
  },
  arrowIconWrapper: {
    marginLeft: Margins.slim,
    position: "absolute",
    right: Margins.relaxed
  },
  checkedIcon: {
    color: Color.secondary,
    marginRight: Margins.slim,
    fontSize: toRem(14)
  },
  icon: {
    color: Color.primary,
    fontSize: toRem(14),
    marginRight: Margins.slim
  },
  selectAllContainer: {
    padding: `${Paddings.slim} ${Paddings.relaxed} 0`,
    borderBottom: `1px solid ${Color.primary}`,
    marginBottom: Margins.relaxed,
  },
  selectAll: {
    display: "flex",
    justifyContent: "space-between",
    padding: Paddings.slim,
    paddingBottom: Paddings.relaxed
  },
  btnSelectAll: {
    backgroundColor: "transparent",
    border: 0,
    color: Color.onPrimary,
    margin: 0,
    padding: 0
  },
  searchTerm: {
    color: Color.primary10,
    fontStyle: "italic"
  },
  selectedAllLabel: {
    color: Color.onPrimary,
    fontFamily: Family,
    fontSize: toRem(12)
  },
  arrowIcon: {},
  optionLabel: {
    color: Color.onPrimary,
    fontFamily: Family,
    fontSize: toRem(12)
  },
  emptyMessage: {
    color: Color.onPrimary,
    fontFamily: Family,
    fontSize: toRem(12)
  }
};

export interface MultiselectItemType {
  id: string;
  label: string;
}

export interface MultiselectStyleType {
  arrowIcon?: CssPropertyTypes;
  arrowIconWrapper?: CssPropertyTypes;
  btnSelectAll?: CssPropertyTypes;
  checkedIcon?: CssPropertyTypes;
  container?: CssPropertyTypes;
  disabled?: CssPropertyTypes;
  emptyMessage?: CssPropertyTypes;
  icon?: CssPropertyTypes;
  list?: CssPropertyTypes;
  listItem?: CssPropertyTypes;
  optionLabel?: CssPropertyTypes;
  searchTerm?: CssPropertyTypes;
  selectAll?: CssPropertyTypes;
  selected?: CssPropertyTypes;
  selectedAllLabel?: CssPropertyTypes;
}

export interface MultiselectType {
  allowSelectAll?: boolean;
  defaultLabel?: string;
  emptyMessage: string;
  height?: string;
  id: string;
  isClickOutside?: boolean;
  onSelect: (selectedIds: Array<string>, allSelected: boolean) => void;
  options: Array<MultiselectItemType>;
  searchTerm?: string;
  selectAllByDefault: boolean;
  selected?: Array<string>;
  style?: MultiselectStyleType;
  width?: string;
  disabled?: boolean;
}

export class MultiselectClass extends React.Component<
  MultiselectType,
  {
    selected: Array<string>;
    showOptions: boolean;
  }
> {
  root: React.RefObject<HTMLDivElement> = React.createRef();
  constructor(props: MultiselectType) {
    super(props);
    this.state = {
      selected: props.selected || [],
      showOptions: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isClickOutside) {
      this.setState({
        showOptions: false
      });
    } else if (!nextProps.isClickOutside && nextProps.searchTerm === "") {
      if (!nextProps.disabled) {
        this.setState({
          showOptions: true
        });
      }
    }
  }
  componentWillUpdate(nextProps) {
    if (this.props.selected !== nextProps.selected) {
      this.setState({
        selected: nextProps.selected
      });
    }
  }
  componentDidMount() {
    const props = this.props;
    if (props.selectAllByDefault) {
      if ((props.selected && props.selected.length === 0) || !props.selected) {
        this.selectAll();
      }
    }
  }

  componentDidUpdate() {
    updateLayerPosition(this.root.current, this.props.id, true);
  }

  getLabelForOptionId(id) {
    const { options } = this.props;
    let label;

    const filteredOption = options.filter(option => option.id === id);
    if (filteredOption.length > 0) {
      label = filteredOption[0].label;
    }
    return label;
  }

  selectAll = () => {
    const { options, onSelect, disabled } = this.props;
    if (!disabled) {
      if (options) {
        const all = options.map(option => option.id);
        this.setState({
          selected: options.map(option => option.id)
        });
        onSelect(all, true);
      }
    }
  };

  deselectAll = () => {
    if (!this.props.disabled) {
      this.setState({
        selected: []
      });
    }
  };
  handleSelected = (e, option) => {
    e.preventDefault();
    e.stopPropagation();
    const { onSelect } = this.props;
    const { selected } = this.state;
    let updatedSelected = selected;
    // if already selected, let's deselect
    if (selected && selected.includes(option.id)) {
      updatedSelected = selected ? selected.filter(id => id !== option.id) : [];
    } else {
      updatedSelected = [...selected, option.id].filter((item, pos, self) => {
        return self.indexOf(item) == pos;
      });
    }
    this.setState({
      selected: updatedSelected
    });
    onSelect && onSelect(updatedSelected, false);
  };

  hasAllSelected = selected => {
    const { options } = this.props;
    if (options && options !== null) {
      return selected.length === options.length ? true : false;
    }
    return false;
  };

  render() {
    const {
      options,
      width = "180px",
      height = "180px",
      emptyMessage,
      id,
      searchTerm,
      disabled = false,
      allowSelectAll = true,
      style = {}
    } = this.props;
    const { selected, showOptions } = this.state;
    const styles = merge({}, defaultStyles, style);
    const allSelected = this.hasAllSelected(selected);
    const label = allSelected
      ? "All"
      : selected
          .map(selectedId => this.getLabelForOptionId(selectedId))
          .join(", ");
    const iconSelectAllStyle = allSelected ? styles.checkedIcon : styles.icon;
    const checkSelectAllIcon = allSelected ? faCheckSquare : faSquare;
    const allSelectedLabel = allSelected ? "All" : "Select All";
    const disabledStyle = disabled ? styles.disabled : {};
    let filteredOptions = options;
    if (searchTerm && searchTerm !== "") {
      filteredOptions = options.filter(option => {
        if (
          option.label.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        ) {
          return true;
        }
        return false;
      });
    }
    if (!options) {
      return (
        <div {...css(styles.emptyMessage)} data-style="emptyMessage">
          {emptyMessage}
        </div>
      );
    }
    return (
      <div
        id={id}
        {...css(styles.container, disabledStyle, { width })}
        className={SHORTCUT_BLOCKER_CLASS}
        data-style="container, disabled"
      >
        <div
          role="input"
          tabIndex={0}
          onClick={e => {
            if (!disabled) {
              e.stopPropagation();
              this.setState({ showOptions: !showOptions });
            }
          }}
          {...css(styles.selected)}
          data-style="selected"
        >
          {label}
          <span {...css(styles.arrowIconWrapper)} data-style="arrowIconWrapper">
            <FontAwesomeIcon
              icon={faCaretDown}
              {...css(styles.arrowIcon)}
              data-style="arrowIcon"
            />
          </span>
        </div>
        {showOptions && (
          <Menu visible={options.length > 0} width={width}>
            <div
              ref={this.root}
              {...css(styles.list, {
                width,
                height
              })}
              data-style="list"
            >
              {allowSelectAll && (
                <div
                  {...css(styles.selectAllContainer)}
                  data-style="selectAllContainer"
                >
                  <div
                    {...css(styles.selectAll)}
                    data-style="selectAll"
                  >
                    <button
                      {...css(styles.btnSelectAll)}
                      className={CLICK_OUTSIDE_BLOCKER_CLASS}
                      onClick={allSelected ? this.deselectAll : this.selectAll}
                      data-style="btnSelectAll"
                    >
                      <FontAwesomeIcon
                        {...css(iconSelectAllStyle)}
                        icon={checkSelectAllIcon}
                      />
                      <span
                        {...css(styles.selectedAllLabel)}
                        data-style="selectedAllLabel"
                      >
                      {allSelectedLabel}
                    </span>
                    </button>
                    <div {...css(styles.searchTerm)} data-style="searchTerm">
                      {searchTerm}
                    </div>
                  </div>
                </div>
              )}

              {filteredOptions.map(option => {
                const isSelected = selected.includes(option.id);
                const iconStyle = isSelected ? styles.checkedIcon : styles.icon;
                const checkIcon = isSelected ? faCheckSquare : faSquare;
                return (
                  <div
                    {...css(styles.listItemContainer)}
                    data-style="listItemContainer"
                    className={CLICK_OUTSIDE_BLOCKER_CLASS}
                    key={option.id}
                    onClick={e => {
                      if (!disabled) {
                        this.handleSelected(e, option);
                      }
                    }}
                  >
                    <div
                      {...css(styles.listItem)}
                      title={option.label}
                      data-style="listItem"
                    >
                      <FontAwesomeIcon
                        {...css(iconStyle)}
                        icon={checkIcon}
                        data-style="checkedIcon, icon"
                      />
                      <span {...css(styles.optionLabel)} data-style="optionLabel">
                      {option.label}
                    </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Menu>
        )}
      </div>
    );
  }
}
export const Multiselect = withKeyFiltering(MultiselectClass);
