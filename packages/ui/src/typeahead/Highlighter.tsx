/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { css } from "glamor";
import { merge } from "lodash";
import * as React from "react";
import { CssPropertyTypes } from "@catastrophee/styles";
import {
  Color,
  Family,
  Paddings,
  Bold,
  Regular,
  defaults,
  setAlpha
} from "@catastrophee/styles";

export const escapeRegExp = text => {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

const DOMPurify = require("dompurify");
const defaultStyles = {
  highlighted: {
    color: Color.onPrimary400,
    fontFamily: Family,
    fontSize: defaults.fontSize,
    height: "30px",
    cursor: "pointer"
  },
  item: {
    alignItems: "center",
    backgroundColor: Color.primary400,
    color: setAlpha(Color.onPrimary400, 0.6),
    cursor: "pointer",
    display: "flex",
    fontFamily: Family,
    fontWeight: Regular,
    fontSize: defaults.fontSize,
    height: "30px",
    paddingBottom: Paddings.slim,
    paddingLeft: Paddings.default,
    paddingTop: Paddings.slim,
    ":hover": {
      color: Color.onPrimary400,
      backgroundColor: Color.highlight
    }
  },
  selected: {
    alignItems: "center",
    backgroundColor: Color.highlight,
    color: setAlpha(Color.onPrimary400, 0.6),
    cursor: "pointer",
    display: "flex",
    fontFamily: Family,
    fontWight: Bold,
    fontSize: defaults.fontSize,
    height: "30px",
    paddingBottom: Paddings.slim,
    paddingLeft: Paddings.default,
    paddingTop: Paddings.slim,
    ":hover": {
      color: Color.onPrimary400,
      backgroundColor: Color.highlight
    },
    highlighter: {}
  }
};

export interface HighlighterStylesType {
  highlighted: CssPropertyTypes;
  item: CssPropertyTypes;
  highlighter: CssPropertyTypes;
}

export interface HighlighterType {
  id: string;
  tabIndex: number;
  ariaSelected: boolean;
  /**
   * The set of characters that will be highlited
   * @type {String}
   */
  query: string;
  /**
   * The text that contains potential content to be highlited.
   * It may or may not contain text that will be highlighted
   * @type {String}
   */
  content: string;
  /**
   * Substitute styles for highlighter
   * @type {String}
   */
  style?: HighlighterStylesType;
  /**
   * callback function that will be called on selected
   */
  onSelected: (selected: string, e?: any) => void;
  defaultSelected: boolean;
}

/**
 * Highlighter will return a component that wraps a styled div around
 * a query parameter on the content given. Note: given that we have to inject
 * DOM elements based on a query given by the user dangerouslySetInnerHTML can be
 * dangerous if you do not know what is in the HTML string you are injecting is.
 * I will use DOMPurify to sanitize the query string. DOMPurify is a
 * DOM-only, super-fast, uber-tolerant XSS sanitizer for HTML, MathML and SVG.
 * read more about DOMPurify here: https://github.com/cure53/DOMPurify
 * @param {Bool} specifies if item is selected or not
 * @param {String} query content you want to be highlighted
 * @param {String} content the string you want to be highlighted
 * @param {String} highlighterStyle the class name for the highligh style
 */
export const Highlighter: React.SFC<HighlighterType> = ({
  ariaSelected,
  content,
  id,
  onSelected,
  query,
  defaultSelected,
  style
}) => {
  const styles = merge({}, defaultStyles, style);
  const filteredQuery = escapeRegExp(query);
  const re = new RegExp(filteredQuery, "gi");
  const highlightedContent =
    content &&
    content.replace(re, match => {
      if (filteredQuery === "") {
        return match;
      }
      if (filteredQuery === content) {
        return match;
      }

      return `<span
          style="
            background-color: #DBD34A;
            color: black;
            border-radius: 2px;
            font-weight: bold;
          ">
          ${match}
        </span>`;
    });
  const highlightStyles = ariaSelected ? styles.highlighted : styles.item;
  let DOMCONTENT = DOMPurify.sanitize(
    `<p style='border:0; padding: 0; margin:0;'>${highlightedContent}</p>`,
    {}
  );
  if (defaultSelected) {
    DOMCONTENT = DOMPurify.sanitize(
      `<p style='border:0; padding: 0; margin:0; margin-left: -14px; color: white'> ✓ ${highlightedContent}</p>`,
      {}
    );
  }

  return (
    <div
      key={`highlight-${id}`}
      role="option"
      {...css(
        styles.highlighter,
        highlightStyles,
        ariaSelected ? styles.selected : {}
      )}
      onClick={() => onSelected(content)}
      aria-selected={ariaSelected}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(DOMCONTENT, {})
      }}
    />
  );
};
