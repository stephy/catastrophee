import { css } from "glamor";
import * as React from "react";
import { Color, Margins, Paddings, defaults, Family } from "@catastrophee/styles";
import merge = require("lodash/merge");

const defaultStyles = {
  container: {
    display: "flex",
    flexDirection: "row",
    paddingTop: Paddings.relaxed,
    paddingBottom: Paddings.relaxed
  },
  input: {
    position: "absolute",
    opacity: 0,
    cursor: "pointer"
  },
  checkmark: {
    boxSizing: "border-box",
    position: "absolute",
    cursor: "pointer",
    top: 0,
    left: 0,
    height: "16px",
    width: "16px",
    border: `3px solid ${Color.primary300}`,
    backgroundColor: Color.primary100,
    borderRadius: "50%"
  },
  option: {
    display: "flex",
    position: "relative",
    userSelect: "none",
    marginRight: Margins.default
  },
  optionLabel: {
    marginLeft: "25px",
    marginTop: "3px",
    color: defaults.foregroundColor,
    fontFamily: Family,
    fontSize: defaults.fontSize
  },
  checkedCheckmark: {
    cursor: "pointer",
    position: "absolute",
    top: 0,
    left: 0,
    height: "16px",
    width: "16px",
    backgroundColor: Color.secondary,
    borderRadius: "50%"
  }
};

interface ItemType {
  id: string;
  label: string;
  onSelect: (id: string) => void;
}

interface StylesType {
  container?: object;
  option?: object;
  label?: object;
  input?: object;
  optionLabel?: object;
  checkmark?: object;
}

interface RadioInputType {
  id: string;
  title?: string;
  options: Array<ItemType>;
  selectedId: string;
  style?: StylesType;
}
export const RadioInput: React.SFC<RadioInputType> = ({
  id,
  options,
  title,
  selectedId,
  style
}) => {
  const styles = merge({}, defaultStyles, style);
  return (
    <div {...css(styles.container)}>
      {options.map(option => {
        const checked = selectedId === option.id;
        return (
          <label key={option.id} {...css(styles.option)}>
            <span {...css(styles.optionLabel)}>{option.label}</span>
            <input
              {...css(styles.input)}
              type="radio"
              name={id}
              checked={checked}
              onChange={() => option.onSelect(option.id)}
            />
            <span
              {...css(styles.checkmark, checked ? styles.checkedCheckmark : {})}
            />
          </label>
        );
      })}
    </div>
  );
};
