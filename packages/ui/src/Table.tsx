import * as React from "react";
import { css } from "glamor";
import {
  Color,
  Font,
  Margins,
  Paddings,
  Hover,
  defaults,
  Family
} from "@catastrophee/styles";
import { ScrollableView } from "./ScrollableView";

const HEADER_HEIGHT = 60;

const styles = {
  container: {
    display: "grid",
    gridTemplateRows: `${HEADER_HEIGHT}px 1fr`,
    width: "100%",
    outline: "none"
  },
  header: {
    display: "flex",
    flexDirection: "row",
    ...Font.overline,
    color: Color.onPrimary,
    paddingTop: Paddings.relaxed,
    paddingBottom: Paddings.relaxed,
    borderBottom: `1px solid ${Color.primary200}`
  },
  headerCol: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: Margins.slim
  },
  row: {
    display: "flex",
    flexDirection: "row",
    paddingTop: Paddings.slim,
    paddingBottom: Paddings.slim,
    outline: "none",
    borderBottom: `1px solid ${Color.primary300}`,
    color: defaults.foregroundColor
  },
  rowButton: {
    outline: "none",
    display: "flex",
    flexDirection: "row",
    paddingTop: Paddings.slim,
    paddingBottom: Paddings.slim,
    borderBottom: `1px solid ${Color.primary300}`,
    cursor: "pointer",
    color: defaults.foregroundColor,
    ":hover": {
      backgroundColor: Hover.items.color,
      color: defaults.foregroundColor
    }
  },
  emptyRow: {
    paddingTop: Paddings.default,
    paddingBottom: Paddings.default,
    fontStyle: "italic",
    color: defaults.foregroundColor,
    fontFamily: Family,
    fontSize: defaults.fontSize
  },
  rowColumn: {
    outline: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    ...Font.body
  }
};

const renderHeader = (header, width, gridTemplateColumns) => {
  return (
    <div
      {...css(styles.header, { width, display: "grid", gridTemplateColumns })}
    >
      {header.map(columnHeader => {
        return (
          <div
            key={`header-${columnHeader.key}`}
            {...css(styles.headerCol, { flex: columnHeader.fill })}
          >
            {columnHeader.label}
          </div>
        );
      })}
    </div>
  );
};
const renderEmptyRow = () => {
  return <div {...css(styles.emptyRow)}>No results available</div>;
};

const renderColumn = (colIndex, item) => {
  return (
    <div
      {...css(styles.rowColumn)}
      tabIndex={-1}
      key={colIndex}
      role="gridcell"
    >
      {item}
    </div>
  );
};

const rowRenderer = ({
  item,
  index, // Index of row within collection
  header,
  width,
  onRowClick,
  gridTemplateColumns
}) => {
  if (onRowClick) {
    // render clickable rows
    return (
      <div
        {...css(styles.rowButton, {
          width,
          display: "grid",
          gridTemplateColumns
        })}
        tabIndex={-1}
        role="button"
        key={item.id}
        onClick={() => onRowClick(item)}
      >
        {header.map((column, i) => {
          const columnField = column.key;
          const currentItem = item[columnField];
          const colIndex = `col-${i}-columnField`;
          return renderColumn(colIndex, currentItem);
        })}
      </div>
    );
  } else {
    // render non-clickable rows
    return (
      <div
        {...css(styles.row, { width, display: "grid", gridTemplateColumns })}
        key={item.id}
        role="row"
      >
        {header.map((column, i) => {
          const columnField = column.key;
          const currentItem = item[columnField];
          const colIndex = `col-${i}-columnField`;
          return renderColumn(colIndex, currentItem);
        })}
      </div>
    );
  }
};

interface TableType {
  id?: string;
  data: {
    header: Array<any>;
    items: Array<any>;
  };
  width?: Number;
  height?: Number;
  onRowClick?: (item: any) => void;
}

export const Table: React.SFC<TableType> = ({
  id = "0",
  data,
  width = "100%",
  height = 800,
  onRowClick
}) => {
  const items = data.items;
  const header = data.header;
  const gridTemplateColumns = header.map(item => item.fill).join(" ");
  return (
    <div role="grid" tabIndex={0} {...css(styles.container)}>
      {renderHeader(header, width, gridTemplateColumns)}
      {items.length === 0 && (
        <div {...css({ width: "100%" })}>{renderEmptyRow()}</div>
      )}
      {items.length > 0 && (
        <ScrollableView id="projects-list">
          <div {...css({ width: "100%" })}>
            {items.map((item, index) => {
              return rowRenderer({
                item,
                index,
                header,
                width,
                onRowClick,
                gridTemplateColumns
              });
            })}
          </div>
        </ScrollableView>
      )}
    </div>
  );
};
