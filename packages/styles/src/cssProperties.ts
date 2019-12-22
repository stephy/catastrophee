export interface CssPropertyTypes {
  alignContent?:
    | string
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "initial"
    | "inherit";
  alignItems?:
    | string
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit";
  alignSelf?:
    | "auto"
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit";
  all?: string;
  animation?: string;
  animationDelay?: string;
  animationDirection?:
    | "normal"
    | "reverse"
    | "alternate"
    | "alternate-reverse"
    | "initial"
    | "inherit";
  animationDuration?: string;
  animationFillMode?: string;
  animationIterationCount?: string;
  animationName?: string;
  animationPlayState?: "paused" | "running" | "initial" | "inherit";
  animationTimingFunction?: string;
  backfaceVisibility?: "visible" | "hidden" | "initial" | "inherit";
  background?: string;
  backgroundAttachment?: string;
  backgroundBlendMode?: string;
  backgroundClip?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundOrigin?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
  backgroundSize?: string;
  border?: string;
  borderBottom?: string;
  borderBottomColor?: string;
  borderBottomLeftRadius?: string;
  borderBottomRightRadius?: string;
  borderBottomStyle?: string;
  borderBottomWidth?: string;
  borderCollapse?: string;
  borderColor?: string;
  borderImage?: string;
  borderImageOutset?: string;
  borderImageRepeat?: string;
  borderImageSlice?: string;
  borderImageSource?: string;
  borderImageWidth?: string;
  borderLeft?: string;
  borderLeftColor?: string;
  borderLeftStyle?: string;
  borderLeftWidth?: string;
  borderRadius?: string;
  borderRight?: string;
  borderRightColor?: string;
  borderRightStyle?: string;
  borderRightWidth?: string;
  borderSpacing?: string;
  borderStyle?: string;
  borderTop?: string;
  borderTopColor?: string;
  borderTopLeftRadius?: string;
  borderTopRightRadius?: string;
  borderTopStyle?: string;
  borderTopWidth?: string;
  borderWidth?: string;
  bottom?: string;
  boxDecorationBreak?: string;
  boxShadow?: string;
  boxSizing?: string;
  breakAfter?: string;
  breakBefore?: string;
  breakInside?: string;
  captionSide?: string;
  caretColor?: string;
  "@charset"?: string;
  clear?: string;
  clip?: string;
  color?: string;
  columnCount?: string;
  columnFill?: string;
  columnGap?: string;
  columnRule?: string;
  columnRuleColor?: string;
  columnRuleStyle?: string;
  columnRuleWidth?: string;
  columnSpan?: string;
  columnWidth?: string;
  columns?: string;
  content?: string;
  counterIncrement?: string;
  counterReset?: string;
  cursor?: string;
  direction?: string;
  display?: string;
  emptyCells?: string;
  filter?: string;
  flex?: string;
  flexBasis?: string;
  flexDirection?:
    | string
    | "row"
    | "row-reverse"
    | "column"
    | "column-reverse"
    | "initial"
    | "inherit";
  flexFlow?: string;
  flexGrow?: string;
  flexShrink?: string;
  flexWrap?: string;
  float?: string;
  font?: string;
  "@fontFace"?: string;
  fontFamily?: string;
  fontFeatureSettings?: string;
  "@fontFeatureValues"?: string;
  fontKerning?: string;
  fontLanguageOverride?: string;
  fontSize?: string;
  fontSizeAdjust?: string;
  fontStretch?: string;
  fontStyle?: string;
  fontSynthesis?: string;
  fontVariant?: string;
  fontVariantAlternates?: string;
  fontVariantCaps?: string;
  fontVariantEastAsian?: string;
  fontVariantLigatures?: string;
  fontVariantNumeric?: string;
  fontVariantPosition?: string;
  fontWeight?: string | number;
  grid?: string;
  gridArea?: string;
  gridAutoColumns?: string;
  gridAutoFlow?: string;
  gridAutoRows?: string;
  gridColumn?: string;
  gridColumnEnd?: string;
  gridColumnGap?: string;
  gridColumnStart?: string;
  gridGap?: string;
  gridRow?: string;
  gridRowEnd?: string;
  gridRowGap?: string;
  gridRowStart?: string;
  gridTemplate?: string;
  gridTemplateAreas?: string;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  hangingPunctuation?: string;
  height?: string | number;
  hyphens?: string;
  imageRendering?: string;
  "@import"?: string;
  isolation?: string;
  justifyContent?: string;
  justifySelf?: string;
  "@keyframes"?: string;
  left?: string;
  letterSpacing?: string;
  lineBreak?: string;
  lineHeight?: string;
  listStyle?: string;
  listStyleImage?: string;
  listStylePosition?: string;
  listStyleType?: string;
  margin?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  marginTop?: string | number;
  maxHeight?: string | number;
  maxWidth?: string | number;
  "@media"?: any;
  minHeight?: string;
  minWidth?: string;
  mixBlendMode?: string;
  stringFit?: string;
  stringPosition?: string;
  opacity?: number;
  order?: string;
  orphans?: string;
  outline?: string;
  outlineColor?: string;
  outlineOffset?: string;
  outlineStyle?: string;
  outlineWidth?: string;
  overflow?: string;
  box?: string;
  overflowWrap?: string;
  overflowX?: string;
  overflowY?: string;
  padding?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  pageBreakAfter?: string;
  pageBreakBefore?: string;
  pageBreakInside?: string;
  perspective?: string;
  perspectiveOrigin?: string;
  pointerEvents?: string;
  position?: string;
  quotes?: string;
  resize?: string;
  right?: string;
  scrollBehavior?: string;
  tabSize?: string;
  tableLayout?: string;
  textAlign?: "left" | "right" | "center" | "justify" | "initial" | "inherit";
  textAlignLast?: string;
  textCombineUpright?: string;
  textDecoration?: string;
  textDecorationColor?: string;
  textDecorationLine?: string;
  textDecorationStyle?: string;
  textIndent?: string;
  textJustify?:
    | "auto"
    | "inter-word"
    | "inter-character"
    | "none"
    | "initial"
    | "inherit";
  textOrientation?: string;
  textOverflow?: string;
  textShadow?: string;
  textTransform?: string;
  textUnderlinePosition?: string;
  top?: string;
  transform?: string;
  transformOrigin?: string;
  transformStyle?: string;
  transition?: string;
  transitionDelay?: string;
  transitionDuration?: string;
  transitionProperty?: string;
  transitionTimingFunction?: string;
  unicodeBidi?: "normal" | "embed" | "bidi-override" | "initial" | "inherit";
  userSelect?: "auto" | "none" | "text" | "all";
  verticalAlign?:
    | "baseline"
    | "length"
    | "sub"
    | "super"
    | "top"
    | "text-top"
    | "middle"
    | "bottom"
    | "text-bottom"
    | "initial"
    | "inherit";
  visibility?: "visible" | "hidden" | "collapse" | "initial" | "inherit";
  whiteSpace?:
    | "normal"
    | "nowrap"
    | "pre"
    | "pre-line"
    | "pre-wrap"
    | "initial"
    | "inherit";
  width?: "auto" | "initial" | "inherit" | string | number;
  wordBreak?:
    | "normal"
    | "break-all"
    | "keep-all"
    | "break-word"
    | "initial"
    | "inherit";
  wordSpacing?: "normal" | number | "initial" | "inherit";
  wordWrap?: "normal" | "break-word" | "initial" | "inherit";
  writingMode?: "horizontal-tb" | "vertical-rl" | "vertical-lr";
  zIndex?: number | "auto" | "initial" | "inherit";
}
