import { css, focus } from "glamor";
import { merge } from "lodash";
import * as React from "react";
import {
  Color,
  defaults,
  Family,
  Paddings,
  CssPropertyTypes
} from "@catastrophee/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
const defaultStyles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  wrapper: {
    borderRadius: "2px",
    width: "22px",
    height: "22px",
    padding: "2px",
    outline: "none",
    border: "2px solid transparent"
  },
  focused: { border: `2px solid ${Color.secondary}` },
  presentation: {
    width: "22px",
    height: "22px",
    outline: "none",
    padding: 0,
    margin: 0,
    position: "relative",
    cursor: "pointer",
    border: 0
  },
  label: {
    fontSize: defaults.fontSize,
    color: defaults.foregroundColor,
    fontFamily: Family,
    paddingLeft: Paddings.slim
  },
  iconChecked: {
    marginTop: "-1px",
    fontSize: "24px",
    color: Color.secondary,
    ":hover": {
      color: Color.secondary
    }
  },
  icon: {
    marginTop: "-1px",
    fontSize: "24px",
    color: Color.onPrimary,
    ":hover": {
      color: Color.secondary
    }
  },
  disabled: {
    opacity: 0.5,
    cursor: "not-allowed"
  }
};

interface CheckboxStyle {
  icon: CssPropertyTypes;
}
interface CheckboxType {
  id: string;
  checked: boolean;
  onToggle: () => void;
  style?: CheckboxStyle;
  disabled?: boolean;
  label?: any;
}

export const Checkbox: React.SFC<CheckboxType> = ({
  id,
  label,
  checked,
  style,
  onToggle,
  disabled = false
}) => {
  const styles = merge({}, defaultStyles, style);
  const icon = checked ? faCheckSquare : faSquare;
  return (
    <div key={id} {...css(styles.container)} data-style="container">
      <div
        role="checkbox"
        aria-checked={checked}
        tabIndex={0}
        {...css(styles.wrapper)}
        {...focus(!disabled ? styles.focused : {})}
        onClick={() => {
          if (!disabled) {
            onToggle();
          }
        }}
        data-style="wrapper, focused"
      >
        <div
          role="presentation"
          {...css(styles.presentation, disabled ? styles.disabled : {})}
          data-style="presentation, disabled"
        >
          <FontAwesomeIcon
            {...css(checked ? styles.iconChecked : styles.icon)}
            icon={icon}
          />
        </div>
      </div>
      <span
        {...css(styles.label, disabled ? styles.disabled : {})}
        data-style="label, disabled"
      >
        {label}
      </span>
    </div>
  );
};
