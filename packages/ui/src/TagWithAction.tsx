import * as React from "react";
import { css } from "glamor";
import {
  catastropheeColors,
  Color,
  Paddings,
  Family,
  defaults,
  onCatastropheeColors,
  Margins,
  catastropheeColorsComplementary
} from "@catastrophee/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const defaultColor = catastropheeColors.blue;
const defaultStyles = {
  container: {
    color: Color.light,
    display: "inline-grid",
    gridTemplateColumns: "20px 1fr 20px",
    borderRadius: "4px",
    alignItems: "center",
    fontFamily: Family,
    fontSize: defaults.fontSize,
    fontWeight: 500,
    margin: Margins.slim
  },
  btnDelete: {
    backgroundColor: "transparent",
    padding: 0,
    margin: 0,
    cursor: "pointer",
    border: `1px solid`,
    outline: "none",
    borderRadius: "0px 4px 4px 0px",
    height: "24px",
    width: "24px"
  },
  btnArrow: {
    backgroundColor: "transparent",
    padding: 0,
    margin: 0,
    cursor: "pointer",
    border: `1px solid`,
    outline: "none",
    borderRadius: "4px 0px 0px 4px",
    height: "24px",
    width: "24px"
  },
  label: {
    paddingLeft: Paddings.relaxed,
    paddingRight: Paddings.relaxed
  }
};

interface ActionType {
  id: string;
  label: string;
  action: () => void;
}

export interface TagWithActionType {
  id: string;
  label: any;
  showBorder?: boolean;
  color?: string;
  showDelete?: boolean;
  onDelete?: () => void;
  actions?: ActionType[];
  truncateOnWidth?: number;
}
export const TagWithAction = ({
  label,
  color = "blue",
  actions = undefined,
  showDelete = true,
  onDelete,
  truncateOnWidth
}: TagWithActionType) => {
  const iw = 20; // icons width

  const currentColor = color || defaultColor;
  let gridTemplateColumns = `${iw}px 1fr ${iw}px`;
  let width = truncateOnWidth ? truncateOnWidth - 2 * iw : 0;
  if (!showDelete && actions) {
    gridTemplateColumns = `${iw}px  1fr`;
    width = truncateOnWidth ? truncateOnWidth - iw : 0;
  }
  if (!actions && !showDelete) {
    gridTemplateColumns = "1fr";
    width = truncateOnWidth ? truncateOnWidth + 2 * iw : 0;
  }
  if (showDelete && !actions) {
    gridTemplateColumns = "1fr 20px";
    width = truncateOnWidth ? truncateOnWidth - iw : 0;
  }

  return (
    <div
      {...css(defaultStyles.container, {
        backgroundColor: catastropheeColors[currentColor],
        color: onCatastropheeColors[currentColor],
        gridTemplateColumns
      })}
    >
      {actions && (
        <button
          {...css(defaultStyles.btnArrow, {
            backgroundColor: catastropheeColorsComplementary[currentColor],
            borderColor: catastropheeColorsComplementary[currentColor]
          })}
          onClick={e => onDelete && onDelete()}
        >
          <FontAwesomeIcon
            {...css({ color: onCatastropheeColors[currentColor] })}
            icon={faCaretDown}
          />
        </button>
      )}
      <span
        {...css(
          defaultStyles.label,
          truncateOnWidth
            ? {
                width: `${width}px`,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }
            : {}
        )}
        title={label}
      >
        {label}
      </span>
      {showDelete && (
        <button
          {...css(defaultStyles.btnDelete, {
            backgroundColor: catastropheeColorsComplementary[currentColor],
            borderColor: catastropheeColorsComplementary[currentColor]
          })}
          onClick={e => onDelete && onDelete()}
        >
          <FontAwesomeIcon
            {...css({ color: onCatastropheeColors[currentColor] })}
            icon={faTrash}
          />
        </button>
      )}
    </div>
  );
};
