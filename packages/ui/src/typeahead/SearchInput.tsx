import * as React from "react";
import { css } from "glamor";
import { Family, Paddings, Color, Borders, defaults } from "@catastrophee/styles";
import { merge } from "lodash";
const defaultStyles = {
  container: {
    width: "100%"
  },
  label: {
    fontFamily: Family
  },
  input: {
    backgroundColor: Color.primary200,
    border: `2px solid ${Color.primary200}`,
    borderRadius: Borders.radius,
    boxSizing: "border-box",
    color: Color.onPrimary400,
    fontSize: defaults.fontSize,
    height: "40px",
    margin: 0,
    outline: 0,
    padding: Paddings.relaxed,
    paddingRight: "30px",
    width: "100%",
    ":focus": {
      border: `2px solid ${Color.secondary}`,
      borderRadius: Borders.radius
    }
  }
};
interface SearchInputType {
  /**
   * Unique Id for search input
   */
  id: string;
  /**
   * Function to be called every time a change occurs on the input
   * @type {Function}
   */
  onInputChange: () => void;
  /**
   * Function to be called when user presses keyDown
   * @type {Function}
   */
  label?: string;
  onKeyDown: () => void;
  onFocus: () => void;
  onBlur: () => void;
  temporaryQuery: {
    id: string;
    label: string;
  };
  ariaDescribedby: string;
  ariaOwns: string;
  style?: any;
  placeholder?: string;
}

export const SearchInput: React.SFC<SearchInputType> = ({
  id,
  temporaryQuery,
  ariaDescribedby,
  ariaOwns,
  onInputChange,
  onKeyDown,
  onFocus,
  onBlur,
  style,
  placeholder = "Search"
}) => {
  const styles = merge({}, defaultStyles, style);
  return (
    <input
      {...css(styles.input)}
      autoComplete="off"
      id={id}
      name="search"
      placeholder={placeholder}
      value={temporaryQuery.label}
      onChange={onInputChange}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      onBlur={onBlur}
      spellCheck={false}
      aria-describedby={ariaDescribedby}
      aria-owns={ariaOwns}
      aria-autocomplete="both"
      aria-activedescendant=""
    />
  );
};
