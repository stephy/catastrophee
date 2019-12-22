import * as React from "react";
import { List } from "./List";
import { ListItem as ListItemComponent } from "./ListItem";

interface SearchResultsType {
  id: string;
  results: any;
  query: string;
  selectedIndex: number;
  onSelected: () => void;
  selectedOptionId?: string;
  ListItem?: any;
}

export const SearchResults: React.SFC<SearchResultsType> = ({
  id,
  results,
  query,
  selectedIndex,
  selectedOptionId,
  onSelected,
  children,
  ListItem = ListItemComponent
}) => {
  if (results && results.length === 0 && query === "") {
    return null;
  }
  if (results && results.length === 0 && query !== "") {
    return <List id={id}>{children}</List>;
  }

  return (
    <List id={id}>
      {results &&
        results.map((result, i) => (
          <ListItem
            selectedOptionId={selectedOptionId}
            key={`result-${result.id}`}
            option={result}
            index={i}
            query={query}
            selectedIndex={selectedIndex}
            onSelected={onSelected}
          />
        ))}
    </List>
  );
};
