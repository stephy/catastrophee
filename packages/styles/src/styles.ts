const appName = (<any>window).appName || "catastrophee";

// Helper function to transform a hex color into RGB numbers into a comma
// separated string. Example: #FFFFFF will return '255,255,255'
export const hexToRGB = (hex: string): string => {
  if (typeof hex !== "string") {
    throw new TypeError("Expected a string");
  }
  let hexColor = hex.replace(/^#/, "");
  if (hexColor.length === 3) {
    hexColor = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  const num = parseInt(hexColor, 16);
  return `${num >> 16}, ${(num >> 8) & 255}, ${num & 255}`;
};

export const toRem = (value: number): string => `${value * 0.0625}rem`;

export const setAlpha = (hex: string, alpha: number): string =>
  `rgba(${hexToRGB(hex)}, ${alpha})`;

export const STORAGE_THEME_ID = `catastrophee.${appName}.theme`;
export const STORAGE_DEFAULT_FILTER_ID = `catastrophee.${appName}.defaultFilter`;
export const STORAGE_NOTIFICATIONS_ID = `catastrophee.${appName}.notifications`;
export const STORAGE_CUSTOM_COLORS = `catastrophee.${appName}.theme.custom.colors`;
export const STORAGE_THEME_OVERRIDE = `catastrophee.${appName}.theme.override`;
export const THEME_DARK = "dark";
export const THEME_LIGHT = "light";
export const THEME_CUSTOM = "custom";

const localStorage = window.localStorage;
if (localStorage) {
  if (!localStorage[STORAGE_THEME_ID]) {
    localStorage[STORAGE_THEME_ID] = THEME_DARK;
  }
}

const CURRENT_THEME = localStorage[STORAGE_THEME_ID];

const WHITE = "#EEEEEE";
const DARK = "#000000";
const BLUE_DE_FRANCE = "#2196F3";
const DOVEGRAY = "#747474";
const HUNTER_GREEN = "#1f1f1f";
const NERO = "#272525";
const OCEAN_GREEN = "#009966";
const RAGOON_GREEN = "#171717";
const YELLOW = "#ffff00";
const DUBBING_PURPLE = "#7157E6";
const ONIX = "#0F0F0F";

export const palette = {
  lime: "#95C747",
  green: "#60B15D",
  cyan: "#58AABD",
  blue: "#3D7CCF",
  royalBlue: "#455FDD",
  purple: "#6342DA",
  violet: "#A146C2",
  pink: "#C5426C",
  red: "#D22F26",
  orange: "#E6702E",
  pastel: "#E8A239",
  yellow: "#DBD34A",
  darkGrey: "#535353",
  grey: "#C8C8C8"
};

export const paletteComplementary = {
  lime: "#86B340",
  green: "#57A054",
  cyan: "#509AAA",
  blue: "#3770BA",
  royalBlue: "#3F56C7",
  purple: "#5A3CC3",
  violet: "#913FAF",
  pink: "#B23B61",
  red: "#BD2A22",
  orange: "#CE6529",
  pastel: "#D19132",
  yellow: "#C5BE42",
  darkGrey: "#4B4B4B",
  grey: "#B4B4B4"
};

export const onPalette = {
  lime: "#050505",
  green: "#EFEFEF",
  cyan: "#EFEFEF",
  blue: "#EFEFEF",
  royalBlue: "#EFEFEF",
  purple: "#EFEFEF",
  violet: "#EFEFEF",
  pink: "#EFEFEF",
  red: "#EFEFEF",
  orange: "#EFEFEF",
  pastel: "#050505",
  yellow: "#050505",
  darkGrey: "#EFEFEF",
  grey: "#050505"
};

export const Borders = {
  radius: toRem(5)
};

export const Opacity = {
  light: 0.1
};

export const Margins = {
  default: "24px",
  relaxed: "12px",
  regular: "8px",
  slim: "6px"
};

export const PaddingsNumbers = {
  default: 24,
  relaxed: 12,
  regular: 8,
  slim: 6
};

export const Paddings = {
  default: `${PaddingsNumbers.default}px`,
  relaxed: `${PaddingsNumbers.relaxed}px`,
  regular: `${PaddingsNumbers.regular}px`,
  slim: `${PaddingsNumbers.slim}px`
};

export const Size = {
  appBarHeight: 56,
  appMargin: 24,
  border: 1,
  iconSize: 24,
  iconSpacing: 24,
  itemSpacing: 12,
  keyLine: 72
};

export const superExtraLight = 100;
export const extraLight = 200;
export const Light = 300;
export const Regular = 400;
export const Medium = 500;
export const Bold = 700;
export const Black = 900;

export const Family =
  '"Circular EP", -apple-system, "Helvetica Neue", "Lucida Grande", sans-serif';

export const appVariationColors = {
  completed: OCEAN_GREEN,
  decoration: "orange",
  done: "#189309",
  inProgress: OCEAN_GREEN,
  onCompleted: "#FFFFFF",
  onDone: "#225d1b",
  onInProgress: "#FFFFFF",
  onOverdue: "#FFFFFF",
  onSuccess: "#FFFFFF",
  onPending: "#FFFFFF",
  overdue: "red",
  pending: DOVEGRAY,
  rejection: "#cc3333",
  success: OCEAN_GREEN,
  shadow: DARK,
  warning: YELLOW,
  brand: DUBBING_PURPLE,
  onBrand: WHITE,
  highlight: "#242424"
};
export const DarkThemeColors = {
  primary: RAGOON_GREEN,
  primary10: "#AAAAAA",
  primary100: "#505050",
  primary200: "#323232",
  primary300: "#242424",
  primary400: "#181818",
  onPrimary: WHITE,
  onPrimary10: "#505050",
  onPrimary200: WHITE,
  onPrimary100: WHITE,
  onPrimary300: WHITE,
  onPrimary400: WHITE,
  secondary: palette.royalBlue,
  onSecondary: "#FFFFFF",
  background: RAGOON_GREEN,
  surface: HUNTER_GREEN,
  surface10: ONIX,
  surface100: "#323232",
  error: "#e81919",
  onBackground: WHITE,
  onBackgroundVariant: WHITE,
  onSurface: WHITE,
  onError: "#FFFFFF",
  dark: DARK,
  light: WHITE,
  foreground: WHITE,
  // app variations (decoration)
  ...appVariationColors,
  toggleBackground: DARK,
  toggleThumb: NERO
};
export const LightThemeColors = {
  primary: "#FFFFFF",
  primary10: "#AAAAAA",
  primary100: "#818181",
  primary200: "#FFFFFF",
  primary300: "#F9FAFC",
  primary400: "#f6f6f6",
  onPrimary: DARK,
  onPrimary10: "#5a5a5a",
  onPrimary200: "#545454",
  onPrimary100: "#545454",
  onPrimary300: "#545454",
  onPrimary400: DARK,
  secondary: BLUE_DE_FRANCE,
  onSecondary: "#FFFFFF",
  background: "#FFFFFF",
  surface10: "#FFFFFF",
  surface: "#fdfbfb",
  surface100: "#F9FAFC",
  error: "#e81919",
  onBackground: DARK,
  onBackgroundVariant: DARK,
  onSurface: DARK,
  onError: "#FFFFFF",
  dark: WHITE,
  light: "#666666",
  foreground: "#666666",
  // app variations (decoration)
  ...appVariationColors,
  toggleBackground: "#e2e1e1",
  toggleThumb: BLUE_DE_FRANCE
};

let selectedColors =
  CURRENT_THEME === THEME_DARK ? DarkThemeColors : LightThemeColors;
const customColors = localStorage[STORAGE_CUSTOM_COLORS];
const themeOverride = localStorage[STORAGE_THEME_OVERRIDE]
  ? JSON.parse(localStorage[STORAGE_THEME_OVERRIDE])
  : false;

if (customColors && themeOverride) {
  selectedColors = JSON.parse(customColors);
}

export const defaults = {
  fontSize: "13px",
  smallFontSize: "11px",
  foregroundColor: selectedColors.foreground,
  inputBorderWidth: "2px"
};
export const Color = selectedColors;
export const InputStyle = {
  backgroundColor: Color.primary200,
  color: Color.onPrimary200,
  fontSize: defaults.fontSize,
  border: `0.092rem solid ${Color.primary200}`,
  margin: 0,
  outline: 0,
  padding: Paddings.slim,
  marginTop: Margins.slim,
  marginBottom: Margins.slim,
  borderRadius: "3px",
  ":focus": {
    border: `0.092rem solid ${Color.secondary}`
  },
  ":disabled": {
    border: `0.092rem solid ${Color.primary200}`,
    backgroundColor: "transparent",
    cursor: "not-allowed",
    color: setAlpha(Color.onPrimary200, 0.5)
  },
  ":invalid": {
    border: `0.092rem solid ${palette.red}`,
    backgroundColor: setAlpha(palette.red, 0.3)
  }
};
export const Font = {
  h1: {
    fontFamily: Family,
    fontWeight: Bold,
    fontSize: toRem(26),
    letterSpacing: 0.35
  },
  h2: {
    fontFamily: Family,
    fontWeight: Bold,
    fontSize: toRem(20),
    letterSpacing: 0.6
  },
  h3: {
    fontFamily: Family,
    fontWeight: Regular,
    fontSize: toRem(12),
    letterSpacing: 0.6
  },
  h4: {
    fontFamily: Family,
    fontWeight: Regular,
    fontSize: toRem(34),
    letterSpacing: 0.25
  },
  h5: {
    fontFamily: Family,
    fontWeight: Light,
    fontSize: toRem(24),
    letterSpacing: 0
  },
  h6: {
    fontFamily: Family,
    fontWeight: Light,
    fontSize: toRem(18),
    letterSpacing: 1
  },
  subtitle: {
    fontFamily: Family,
    fontWeight: Light,
    fontSize: toRem(12),
    letterSpacing: 1.6
  },
  body: {
    fontFamily: Family,
    fontWeight: Regular,
    fontSize: toRem(12),
    letterSpacing: 0.5
  },
  button: {
    fontFamily: Family,
    fontWeight: Medium,
    fontSize: toRem(14),
    letterSpacing: 0.75,
    textTransform: "uppercase"
  },
  paragraph: {
    margin: 0,
    padding: 0,
    lineHeight: toRem(14)
  },
  emphasis: {
    fontFamily: Family,
    fontWeight: Light,
    fontSize: toRem(12),
    letterSpacing: 1.6,
    fontStyle: "italic"
  },
  caption: {
    fontFamily: Family,
    fontWeight: Regular,
    fontSize: toRem(12),
    letterSpacing: 0.4
  },
  overline: {
    fontFamily: Family,
    fontWeight: Bold,
    fontSize: toRem(9),
    letterSpacing: 0.8,
    textTransform: "uppercase",
    color: defaults.foregroundColor
  },
  overlineBold: {
    fontFamily: Family,
    fontWeight: Black,
    fontSize: toRem(9),
    letterSpacing: 1.5,
    textTransform: "uppercase",
    color: defaults.foregroundColor
  },
  icon: {
    fontSize: toRem(24)
  },
  default: {
    fontFamily: Family,
    fontSize: toRem(13)
  }
};

export const Elevation = {
  depth0: {
    boxShadow:
      "0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)",
    zIndex: 0
  },
  depth1: {
    boxShadow:
      "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
    zIndex: 1
  },
  depth2: {
    boxShadow:
      "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
    zIndex: 2
  },
  depth3: {
    boxShadow:
      "0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)",
    zIndex: 3
  },
  depth4: {
    boxShadow:
      "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
    zIndex: 4
  },
  depth5: {
    boxShadow:
      "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12)",
    zIndex: 5
  },
  depth6: {
    boxShadow:
      "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
    zIndex: 6
  },
  depth7: {
    boxShadow:
      "0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12)",
    zIndex: 7
  },
  depth8: {
    boxShadow:
      "0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)",
    zIndex: 8
  },
  depth9: {
    boxShadow:
      "0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12)",
    zIndex: 9
  },
  depth10: {
    boxShadow:
      "0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12)",
    zIndex: 10
  },
  depth11: {
    boxShadow:
      "0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12)",
    zIndex: 11
  },
  depth12: {
    boxShadow:
      "0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12)",
    zIndex: 12
  },
  depth13: {
    boxShadow:
      "0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12)",
    zIndex: 13
  },
  depth14: {
    boxShadow:
      "0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12)",
    zIndex: 14
  },
  depth15: {
    boxShadow:
      "0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12)",
    zIndex: 15
  },
  depth16: {
    boxShadow:
      "0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12)",
    zIndex: 16
  },
  depth17: {
    boxShadow:
      "0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12)",
    zIndex: 17
  },
  depth18: {
    boxShadow:
      "0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12)",
    zIndex: 18
  },
  depth19: {
    boxShadow:
      "0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12)",
    zIndex: 19
  },
  depth20: {
    boxShadow:
      "0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12)",
    zIndex: 20
  },
  depth21: {
    boxShadow:
      "0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12)",
    zIndex: 21
  },
  depth22: {
    boxShadow:
      "0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12)",
    zIndex: 22
  },
  depth23: {
    boxShadow:
      "0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12)",
    zIndex: 23
  },
  depth24: {
    boxShadow:
      "0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)",
    zIndex: 24
  }
};

export const Hover = {
  items: {
    color: setAlpha(Color.surface10, 0.9)
  }
};

export const hint = {
  display: "inline-block",
  position: "relative",
  // ARROW
  ":before": {
    background: "transparent",
    border: "6px solid transparent",
    borderTopColor: "#383838",
    content: "''",
    opacity: "0",
    pointerEvents: "none",
    position: "absolute",
    transform: "translate3d(0, 0, 0)",
    transition: "0.3s ease",
    transitionDelay: "0ms",
    visibility: "hidden",
    zIndex: "1000000"
  },
  // BODY
  ":after": {
    background: "#383838",
    borderRadius: "4px",
    color: "white",
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: "12px",
    lineHeight: "12px",
    opacity: "0",
    padding: "8px 10px",
    pointerEvents: "none",
    position: "absolute",
    transform: "translate3d(0, 0, 0)",
    transition: "0.3s ease",
    transitionDelay: "0ms",
    visibility: "hidden",
    whiteSpace: "nowrap",
    zIndex: "1000000"
  },
  ":hover:before": {
    opacity: "1",
    visibility: "visible"
  },
  ":hover:after": {
    opacity: "1",
    visibility: "visible"
  },
  "[aria-label]:after": {
    content: "attr(aria-label)"
  }
};

export const hintTop = {
  ":before": {
    bottom: "100%",
    left: "calc(50% - 6px)",
    marginBottom: "-11px"
  },
  ":after": {
    bottom: "100%",
    left: "50%",
    transform: "translateX(-50%)"
  },
  ":hover:before": {
    transform: "translateY(-8px)"
  },
  ":hover:after": {
    transform: "translateX(-50%) translateY(-8px)"
  }
};
export const hintLeft = {
  ":before": {
    bottom: "50%",
    marginBottom: "-6px",
    marginRight: "-11px",
    right: "100%"
  },
  ":after": {
    bottom: "50%",
    marginBottom: "-14px",
    right: "100%"
  },
  ":hover:before": {
    transform: "translateX(-8px) rotate(-90deg)"
  },
  ":hover:after": {
    transform: "translateX(-8px)"
  }
};

export const hintBottom = {
  ":before": {
    left: "calc(50% - 6px)",
    marginTop: "-11px",
    top: "100%",
    transform: "translateX(-50%)"
  },
  ":after": {
    left: "50%",
    top: "100%",
    transform: "translateX(-50%)"
  },
  ":hover:before": {
    transform: "translateY(8px) rotate(180deg)"
  },
  ":hover:after": {
    transform: "translateX(-50%) translateY(8px)"
  }
};

export const hintRight = {
  ":before": {
    bottom: "50%",
    left: "100%",
    marginBottom: "-6px",
    marginLeft: "-11px"
  },
  ":after": {
    marginBottom: "-14px",
    left: "100%",
    bottom: "50%"
  },
  ":hover:before": {
    transform: "translateX(8px) rotate(90deg)"
  },
  ":hover:after": {
    transform: "translateX(8px)"
  }
};

export const hintTopLeft = {
  ":before": {
    bottom: "100%",
    left: "calc(50% - 6px)",
    marginBottom: "-11px"
  },
  ":after": {
    bottom: "100%",
    left: "50%",
    marginLeft: "12px",
    transform: "translateX(-100%)"
  },
  ":hover:before": {
    transform: "translateY(-8px)"
  },
  ":hover:after": {
    transform: "translateX(-100%) translateY(-8px)"
  }
};

export const hintTopRight = {
  ":before": {
    marginBottom: "-11px",
    bottom: "100%",
    left: "calc(50% - 6px)"
  },
  ":after": {
    bottom: "100%",
    left: "50%",
    transform: "translateX(0)",
    marginLeft: "-12px"
  },
  ":hover:before": {
    transform: "translateY(-8px)"
  },
  ":hover:after": {
    transform: "translateY(-8px)"
  }
};

export const hintBottomLeft = {
  ":before": {
    marginTop: "-11px",
    top: "100%",
    left: "calc(50% - 6px)"
  },
  ":after": {
    top: "100%",
    left: "50%",
    transform: "translateX(-100%)",
    marginLeft: "12px"
  },
  ":hover:before": {
    transform: "translateY(8px) rotate(180deg)"
  },
  ":hover:after": {
    transform: "translateX(-100%) translateY(8px)"
  }
};

export const hintBottomRight = {
  ":before": {
    marginTop: "-11px",
    top: "100%",
    left: "calc(50% - 6px)"
  },
  ":after": {
    top: "100%",
    left: "50%",
    transform: "translateX(0)",
    marginLeft: "-12px"
  },
  ":hover:before": {
    transform: "translateY(8px) rotate(180deg)"
  },
  ":hover:after": {
    transform: "translateY(8px)"
  }
};
