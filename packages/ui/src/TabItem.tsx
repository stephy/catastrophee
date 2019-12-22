import { css } from "glamor";
import * as React from "react";
import {
  Color,
  Paddings,
  Margins,
  Bold,
  CssPropertyTypes,
  toRem
} from "@catastrophee/styles";
import { merge } from "lodash";

const defaultStyles = {
  container: {
    backgroundColor: "transparent",
    border: 0,
    borderBottom: "4px solid transparent",
    color: Color.onPrimary,
    display: "flex",
    fontSize: toRem(13),
    height: "40px",
    marginRight: Margins.default,
    padding: Paddings.slim,
    ":hover": {
      color: Color.onPrimary300
    }
  },
  selected: {
    borderBottom: `4px solid ${Color.secondary}`,
    color: Color.onPrimary300,
    fontWeight: Bold
  }
};
export interface TabItemStyles {
  container?: CssPropertyTypes;
  selected?: CssPropertyTypes;
}
interface TabItemType {
  style?: TabItemStyles;
  item: {
    action: () => void;
    icon?: any;
    id: string;
    label: any;
    type?: string;
  };
  isSelected: boolean;
}
export const TabItem: React.SFC<TabItemType> = ({
  item,
  isSelected,
  style
}) => {
  const styles = merge({}, defaultStyles, style);
  return (
    <button
      key={item.id}
      onClick={() => item.action()}
      {...css(
        styles.container,
        isSelected ? styles.selected : { opacity: 0.4 }
      )}
    >
      {item.label}
    </button>
  );
};
