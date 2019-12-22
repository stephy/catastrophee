import * as React from "react";
import { List } from "./List";
import { ListItem as ListItemComponent } from "./ListItem";
import { css } from "glamor";
import { Font, Color, Margins, defaults } from "@catastrophee/styles";

const styles = {
  label: {
    color: Color.onPrimary400,
    marginBottom: Margins.relaxed,
    marginTop: Margins.default,
    marginLeft: Margins.default,
    fontSize: defaults.fontSize
  }
};
interface GroupedSearchResultsItemType {
  group: string;
  id: string;
  label: string;
  index: number;
}
interface GroupedSearchResultsType {
  id: string;
  query: string;
  selectedIndex: number;
  onSelected: (query: string, option: any) => void;
  sortedByGroup?: { [id: string]: GroupedSearchResultsItemType[] };
  selectedOptionId: string;
  ListItem?: any;
}

export const GroupedSearchResults: React.SFC<GroupedSearchResultsType> = ({
  id,
  query,
  selectedIndex,
  onSelected,
  selectedOptionId,
  sortedByGroup = {},
  ListItem = ListItemComponent
}) => {
  return (
    <List id={id}>
      {Object.keys(sortedByGroup).map(key => {
        const group = sortedByGroup[key];
        if (group) {
          return (
            <div key={key}>
              <div {...css(Font.overline, styles.label)}>{key}</div>
              <div>
                {group.map((item: GroupedSearchResultsItemType) => {
                  return (
                    <ListItem
                      key={`group-${key}-result-${item.id}`}
                      option={item}
                      index={item.index}
                      query={query}
                      selectedIndex={selectedIndex}
                      selectedOptionId={selectedOptionId}
                      onSelected={onSelected}
                    />
                  );
                })}
              </div>
            </div>
          );
        }
        return null;
      })}
    </List>
  );
};
