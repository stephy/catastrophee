import * as React from "react";
import { Highlighter, HighlighterStylesType } from "./Highlighter";

interface ItemType {
  id: string;
  label: string;
}

interface ListItemType {
  /**
   * The item content to be displayed in the list item
   * @type {ItemType}
   */
  option: ItemType;
  /**
   * The query from the input
   * @type {String}
   */
  query: string;
  /**
   * The index for this item on the list
   * @type {Number}
   */
  index: number;
  /**
   * The current selected index
   * @type {Number}
   */
  selectedIndex: number;
  /**
   * Function to be called when user clicks on result from autocomplete
   * @type {Function}
   */
  onSelected: (label: string, option: any) => void;
  /**
   * Substitute styles for highlighter
   * @type {String}
   */
  style?: HighlighterStylesType;
  selectedOptionId?: string;
}

export const ListItem: (item: ListItemType) => JSX.Element = ({
  option,
  query,
  index,
  selectedIndex,
  onSelected,
  selectedOptionId,
  style
}) => {
  const selected = index === selectedIndex;
  const defaultSelected = selectedOptionId === option.id;
  return (
    <Highlighter
      key={`highlighter-${option.id}`}
      id={option.id}
      tabIndex={-1}
      ariaSelected={selected}
      defaultSelected={defaultSelected}
      query={query}
      content={option.label}
      onSelected={content => onSelected(content, option)}
      style={style}
    />
  );
};
