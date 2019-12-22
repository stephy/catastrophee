import { css } from "glamor";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Color, Borders, defaults, Margins, setAlpha } from "@catastrophee/styles";

const styles = {
  icon: {
    border: 0,
    color: setAlpha(Color.onPrimary400, 0.7),
    fontSize: defaults.fontSize,
    marginTop: "3px"
  },
  button: {
    border: 0,
    top: 4,
    right: 0,
    position: "absolute",
    background: "transparent",
    cursor: "pointer",
    outline: "none",
    margin: Margins.slim
  },
  container: {
    position: "relative",
    boxSizing: "border-box",
    borderRadius: Borders.radius,
    backgroundColor: Color.primary400,
    width: "100%"
  },
  typeaheadcontainer: {
    position: "relative",
    display: "inline-block",
    width: "100%"
  }
};
interface SearchWrapperType {
  /**
   * DOM elements to be placed inside of this wrapper
   * @type {DOMElements}
   */
  children: any;
  /**
   * Flag that holds the focused state of the input, if true the user
   * is currently focused on the input, if false, user is not focusing on the
   * input
   * @type {Bool}
   */
  active: boolean;
  /**
   * Query typed on the input
   * @type {String}
   */
  query: string;
  /**
   * Callback function to handle when user clicks on clear button
   * @type {Function}
   */
  handleClearInput: () => void;
  handleShowSuggestions: () => void;
}

export const SearchWrapper: React.SFC<SearchWrapperType> = props => {
  const { handleClearInput, query, handleShowSuggestions } = props;
  const hasQuery = query !== "";
  return (
    <div {...css(styles.container)}>
      <div {...css(styles.typeaheadcontainer)}>{props.children}</div>
      {hasQuery && (
        <button
          title="clear search"
          {...css(styles.button)}
          onClick={() => handleClearInput()}
        >
          <FontAwesomeIcon {...css(styles.icon)} icon={faTimes} />
        </button>
      )}
      {!hasQuery && (
        <button {...css(styles.button)} onClick={() => handleShowSuggestions()}>
          <FontAwesomeIcon {...css(styles.icon)} icon={faSearch} />
        </button>
      )}
    </div>
  );
};
