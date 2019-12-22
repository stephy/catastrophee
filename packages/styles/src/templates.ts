import {
  Color,
  toRem,
  setAlpha,
  Paddings,
  Bold,
  Margins,
  catastropheeColors,
  Borders,
  Family,
  Regular
} from "./styles";

export const DefaultScrollbarStyle = {
  "::-webkit-scrollbar": {
    width: "10px",
    overflow: "overlay",
    display: "none"
  },
  "::-webkit-scrollbar-track": {
    background: "transparent"
  },
  "::-webkit-scrollbar-thumb": {
    background: "transparent",
    borderRadius: "5px"
  },
  "::-webkit-scrollbar-thumb:hover": {
    background: "black"
  },
  "::-webkit-scrollbar-corner": {
    background: "transparent"
  }
};

export const Buttons = {
  secondary: {
    background: "transparent",
    border: `1px solid ${setAlpha(Color.onPrimary, 0.4)}`,
    borderRadius: "4px",
    color: Color.onPrimary,
    fontSize: toRem(12),
    minWidth: "80px",
    fontWeight: Bold,
    margin: Margins.slim,
    padding: Paddings.relaxed
  },
  primary: {
    backgroundColor: catastropheeColors.royalBlue,
    border: `1px solid ${catastropheeColors.royalBlue}`,
    borderRadius: "4px",
    color: Color.onPrimary,
    fontSize: toRem(12),
    fontWeight: Bold,
    minWidth: "80px",
    margin: Margins.slim,
    padding: Paddings.relaxed
  },
  clear: {
    background: "none",
    border: 0,
    borderRadius: "0.1875rem",
    color: Color.secondary,
    cursor: "pointer",
    fontSize: "1.3rem",
    fontWeight: 500,
    letterSpacing: "1.5px",
    margin: "6px",
    outline: "none",
    padding: "10px 20px",
    textTransform: "uppercase"
  },
  action: {
    border: `0.8px solid ${Color.light}`,
    borderRadius: Borders.radius,
    color: Color.light,
    cursor: "pointer",
    fontFamily: Family,
    fontSize: toRem(10),
    fontWeight: Regular,
    letterSpacing: 1.5,
    margin: Margins.slim,
    outline: "none",
    padding: "5px 10px",
    textTransform: "uppercase",
    marginBottom: Margins.default
  },
  disabled: {
    cursor: "not-allowed",
    opacity: 0.7
  }
};
