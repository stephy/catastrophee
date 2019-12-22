import { Color, Paddings, setAlpha } from "@catastrophee/styles";
const DesktopStyles = {
  verticalCenter: {
    position: "absolute",
    top: "50%"
  },
  modCssInputContainer: {
    overflow: "visible",
    maxWidth: "100%"
  },
  globalSearchInput: {
    width: "100%"
  },
  focus: {
    width: "200px"
  },
  btnCloseSearch: {
    position: "absolute",
    top: "6px",
    right: "20px"
  },
  btnSearch: {
    left: "9px",
    outline: "none"
  },
  btnClearInput: {
    position: "absolute",
    marginTop: "2px",
    outline: "none",
    color: setAlpha(Color.onPrimary400, 0.6),
    padding: Paddings.relaxed,
    cursor: "pointer"
  },
  inputStyle: {
    position: "relative",
    verticalAlign: "top"
  },
  globalSearchContainer: {
    width: "100%",
    float: "right"
  },
  buttonClearStyle: {
    border: 0,
    position: "absolute",
    right: "10px",
    background: "transparent",
    fontFamily: "inherit"
  },
  listStyle: {
    position: "absolute",
    top: "100%",
    left: "0px",
    zIndex: 100,
    display: "block",
    backgroundColor: Color.primary
  },
  accessibilityStatus: {
    position: "absolute",
    padding: "0px",
    border: "0px",
    height: "1px",
    width: "1px",
    marginBottom: "-1px",
    marginRight: "-1px",
    overflow: "hidden",
    clip: "rect(0px 0px 0px 0px)",
    whiteSpace: "nowrap"
  },
  accessibilityHelper: {
    display: "none"
  },
  highlightedItem: {
    backgroundColor: Color.primary100,
    padding: Paddings.slim
  },
  item: {
    padding: Paddings.slim
  }
};

export { DesktopStyles };
