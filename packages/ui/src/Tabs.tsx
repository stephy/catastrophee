import * as React from "react";
import { css } from "glamor";
import { Margins, CssPropertyTypes } from "@catastrophee/styles";
import { TabItem, TabItemStyles } from "./TabItem";
import { merge } from "lodash";

const defaultStyles = {
  container: {
    display: "flex",
    height: "40px",
    marginRight: Margins.default,
    outline: "none",
    marginTop: "-15px"
  }
};
interface TabsStyles {
  container?: CssPropertyTypes;
  tabItem?: TabItemStyles;
}

interface TabsType {
  items: Array<{
    action: () => void;
    icon?: any;
    id: string;
    label: string;
    type?: string;
  }>;
  selectedId?: string;
  style?: TabsStyles;
}
export const Tabs: (tabs: TabsType) => JSX.Element | null = ({
  items,
  selectedId,
  style
}) => {
  const styles = merge({}, defaultStyles, style);
  if (selectedId) {
    return (
      <div role="navigation" tabIndex={0} {...css(styles.container)}>
        {items.map(item => (
          <TabItem
            key={item.id}
            item={item}
            isSelected={selectedId === item.id}
            style={styles.tabItem}
          />
        ))}
      </div>
    );
  }
  return null;
};

export default Tabs;
