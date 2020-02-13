import * as React from "react";
import { storiesOf } from "@storybook/react";

import {
  palette,
  paletteComplementary,
  Margins,
  Font,
  Color,
  Family,
  defaults,
  Paddings,
  Elevation,
  hint,
  hintTop,
  hintBottom,
  hintLeft,
  hintRight,
  hintTopLeft,
  hintTopRight,
  hintBottomLeft,
  hintBottomRight
} from "@catastrophee/styles";
import SyntaxHighlighter from "react-syntax-highlighter";
import { css } from "glamor";
import { Tag } from "@catastrophee/ui";
import { catColors } from "./defaultStyles";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
const catLogo = require("../public-assets/favicon-96.png");
const styles = {
  p: {
    fontSize: "13px",
    fontWeight: 400,
    display: "inline-block"
  },
  container: {
    background: catColors.background,
    padding: Paddings.default,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  color: {
    borderRadius: "4px",
    color: Color.light,
    fontFamily: Family,
    fontSize: defaults.fontSize,
    fontWeight: 500,
    margin: Margins.slim,
    paddingBottom: "4px",
    paddingLeft: Paddings.relaxed,
    paddingRight: Paddings.relaxed,
    paddingTop: "4px",
    display: "inline-flex"
  },
  fontColor: {
    color: Color.onPrimary
  },
  list: {
    listStyleType: "none",
    padding: 0
  },
  link: {
    color: Color.onPrimary
  },
  boxContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    marginTop: "10px",
    width: "970px",
    justifyContent: "space-around"
  },
  box: {
    fontSize: "11px",
    padding: "12px",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "space-between",
    margin: 1
  },
  boxFooter: {
    justifyContent: "space-between",
    display: "flex"
  },
  titleWrapper: {
    width: "82px"
  },
  numWrapper: {
    background: "pink",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px"
  },
  label: {
    margin: Margins.regular,
    fontSize: "9px",
    color: "#cccccc",
    lineHeight: "0.9rem"
  },
  elevationWrapper: {
    backgroundColor: Color.surface,
    padding: Paddings.default,
    display: "flex",
    width: "900px",
    flexWrap: "wrap"
  },
  elevation: {
    width: "120px",
    height: "120px",
    backgroundColor: Color.primary300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: Margins.default,
    marginBottom: Margins.default
  },
  buttonsWrapper: {
    width: "300px"
  }
};
const renderBox = (
  title: string,
  color: string,
  textColor: string,
  index: string,
  label?: string
) => {
  return (
    <div {...css(styles.box, { backgroundColor: color })}>
      <div {...css({ color: textColor })}>
        <div {...css(styles.titleWrapper)}>{title}</div>
      </div>
      <div {...css(styles.label)}> {label} </div>
      <div {...css(styles.boxFooter)}>
        <div {...css(styles.numWrapper, { color, backgroundColor: textColor })}>
          {index}
        </div>
        <div {...css({ color: textColor })}>{color}</div>
      </div>
    </div>
  );
};
const catStories = storiesOf("@catastrophee/styles", module);
catStories.add("README", () => {
  const hintStringCode = `<span
  {...css(hint, hintBottomRight)}
  aria-label="Hello I am a top left tooltip"
>
  Text with tooltip (hintBottomRight)
</span>`;
  return (
    <div {...css(styles.container)}>
      <div>
        <div>
          <img src={catLogo} />
        </div>

        <div {...css(Font.body, styles.fontColor)}>
          <Tag
            showBorder={true}
            label="@catastrophee/styles"
            color="darkGrey"
            style={{
              label: {
                fontSize: "32px"
              }
            }}
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div>
        <div {...css(Font.h1, styles.fontColor)}>
          <p style={styles.p}>
            @catastrophee/styles has no dependencies and it is just a set of pre
            defined colors, styles and style helper functions.
          </p>
          <br />
          <Tag
            label="yarn add @catastrophee/styles"
            color="darkGrey"
            showBorder={true}
          />{" "}
          <p style={styles.p}>or</p>
          <Tag
            label="npm install @catastrophee/styles"
            color="darkGrey"
            showBorder={true}
          />
          <h2>Colors</h2>
          <Tag
            label="import { Color } from '@catastrophee/styles' "
            color="darkGrey"
            showBorder={true}
          />
          <br /> <br />
          <p {...css(styles.label)}>
            Primary and secondary colors are applied sparingly to strategic
            parts of your UI. They are typically chosen for their ability to
            represent your brand. Primary colors map to components and elements,
            like app bars and buttons. Secondary colors are most often used as
            accents on components, such as FABS and selection controls. Finally,
            color variants can also be used to complement and provide accessible
            options for your primary and secondary colors.
          </p>
          <br />
          <div {...css(styles.boxContainer, { height: "200px" })}>
            {renderBox("Primary", Color.primary, Color.onPrimary, "500")}
            {renderBox(
              "Primary 400",
              Color.primary400,
              Color.onPrimary400,
              "400"
            )}
            {renderBox(
              "Primary 300",
              Color.primary300,
              Color.onPrimary300,
              "300"
            )}
            {renderBox(
              "Primary 200",
              Color.primary200,
              Color.onPrimary200,
              "200"
            )}
            {renderBox(
              "Primary 100",
              Color.primary100,
              Color.onPrimary100,
              "100"
            )}
            {renderBox("Primary 10", Color.primary10, Color.onPrimary10, "10")}
            {renderBox("Secondary", Color.secondary, Color.onSecondary, "S")}
          </div>
          <br />
          <br />
          <div {...css(styles.boxContainer, { height: "110px" })}>
            {renderBox(
              "Background",
              Color.background,
              Color.onBackground,
              "5",
              "Background color is found behind scrollable content"
            )}
            {renderBox(
              "Surface",
              Color.surface,
              Color.onSurface,
              "7",
              "Surface colors map to components such as cards, sheets, and menus"
            )}
            {renderBox(
              "Error",
              Color.error,
              Color.onError,
              "8",
              "Error color indicates errors in components, such as text fields"
            )}
          </div>
          <br />
          <br />
          <br />
          <h2>On Colors</h2>
          <Tag
            label="import { Color } from '@catastrophee/styles' "
            color="darkGrey"
            showBorder={true}
          />
          <p {...css(styles.label)}>
            “On” colors The elements in an app use colors from specific
            categories in your color palette, such as a primary color. Whenever
            other screen elements, such as text or icons, appear in front of
            surfaces using those colors, those elements should use colors
            specifically designed to appear clearly and legibly against the
            colors behind them. This category of colors is called “on” colors,
            referring to the fact that they color elements that are sometimes
            placed “on” top of key surfaces that use a primary color, secondary
            color, surface color, background color, or error color. These are
            labelled using the original category name (such as primary color)
            with the prefix “on”. “On” colors are primarily applied to text,
            iconography, and strokes. Sometimes, they are also applied to
            surfaces.
          </p>
          <br /> <br />
          <div {...css(styles.boxContainer, { height: "80px" })}>
            {renderBox("On Primary", Color.onPrimary, Color.primary, "500")}
            {renderBox(
              "On Primary 10",
              Color.onPrimary10,
              Color.primary10,
              "10"
            )}
            {renderBox(
              "On Primary 100",
              Color.onPrimary100,
              Color.primary100,
              "100"
            )}
            {renderBox(
              "On Primary 400",
              Color.onPrimary400,
              Color.primary400,
              "400"
            )}
            {renderBox("On Secondary", Color.onSecondary, Color.secondary, "S")}
          </div>
          <div {...css(styles.boxContainer, { height: "80px" })}>
            {renderBox(
              "on Background",
              Color.onBackground,
              Color.background,
              "12"
            )}
            {renderBox("on Surface", Color.onSurface, Color.surface, "13")}
            {renderBox("on Error", Color.onError, "#000000", "14")}
          </div>
          <br /> <br /> <br />
          <h2>Other Complementary Colors</h2>
          <div {...css(styles.boxContainer, { height: "80px" })}>
            {renderBox("In Progress", Color.inProgress, "#FFFFFF", "15")}
            {renderBox("Completed", Color.completed, "#FFFFFF", "16")}
            {renderBox("Decoration", Color.decoration, "#FFFFFF", "17")}
            {renderBox("Success", Color.success, "#FFFFFF", "18")}
          </div>
          <br /> <br /> <br />
          <h2>Palette</h2>
          <Tag
            label="import { palette } from '@catastrophee/styles' "
            color="darkGrey"
            showBorder={true}
          />
          <p {...css({ width: "760px" })}>
            {Object.keys(palette).map(color => {
              return (
                <Tag
                  label={`palette.${color}`}
                  color={color}
                  fill
                  style={{
                    container: {
                      height: "80px",
                      width: "160px",
                      alignItems: "flex-end"
                    },
                    label: { fontSize: "10px" }
                  }}
                />
              );
            })}
          </p>
          <br /> <br /> <br />
          <h2>Palette Complementary</h2>
          <Tag
            label="import { paletteComplementary } from '@catastrophee/styles' "
            color="darkGrey"
            showBorder={true}
          />
          <p {...css({ width: "760px" })}>
            {Object.keys(paletteComplementary).map(color => {
              return (
                <Tag
                  label={`paletteComplementary.${color}`}
                  color={color}
                  fill
                  style={{
                    container: {
                      height: "80px",
                      width: "160px",
                      alignItems: "flex-end"
                    },
                    label: { fontSize: "10px" }
                  }}
                />
              );
            })}
          </p>
          <br /> <br /> <br />
          <h1>Typography</h1>
          <Tag
            label="import { Font } from '@catastrophee/styles' "
            color="darkGrey"
            showBorder={true}
          />
          <div>
            {Object.keys(Font).map(key => {
              return (
                <div key={key} {...css(Font[key], { margin: "10px" })}>
                  Font.{key}
                </div>
              );
            })}
          </div>
          <br />
          <br />
          <br />
          <h1>Elevation</h1>
          <Tag
            label="import { Elevation } from '@catastrophee/styles' "
            color="darkGrey"
            showBorder={true}
          />
          <br />
          <br />
          <div {...css(styles.elevationWrapper)}>
            {Object.keys(Elevation).map(key => {
              return (
                <div {...css(styles.elevation, Font.overline, Elevation[key])}>
                  elevation.{key}
                </div>
              );
            })}
          </div>
          <h1>Helper functions</h1>
          <Tag
            label="import { toRem, setAlpha } from '@catastrophee/styles' "
            color="darkGrey"
            showBorder={true}
          />
          <pre> Example: toRem(20) </pre>
          <pre> Example: setAlpha(Color.background, 0.5) </pre>
        </div>

        <div {...css(Font.h1, styles.fontColor)}>
          <h1>Predefined styles for Tooltip on hover</h1>
          <div {...css({ width: "500px" })}>
            <span
              {...css(styles.label, hint, hintTop)}
              aria-label="Hello I am a top tooltip"
            >
              Text with tooltip, hover over me! (hintTop)
            </span>
            <span
              {...css(styles.label, hint, hintBottom)}
              aria-label="Hello I am a bottom tooltip"
            >
              Text with tooltip, hover over me!(hintBottom)
            </span>
            <span
              {...css(styles.label, hint, hintLeft)}
              aria-label="Hello I am a left tooltip"
            >
              Text with tooltip, hover over me! (hintLeft)
            </span>
            <span
              {...css(styles.label, hint, hintRight)}
              aria-label="Hello I am a right tooltip"
            >
              Text with tooltip, hover over me! (hintRight)
            </span>

            <span
              {...css(styles.label, hint, hintTopLeft)}
              aria-label="Hello I am a top left tooltip"
            >
              Text with tooltip, hover over me! (hintTopLeft)
            </span>

            <span
              {...css(styles.label, hint, hintTopRight)}
              aria-label="Hello I am a top left tooltip"
            >
              Text with tooltip, hover over me! (hintTopRight)
            </span>

            <span
              {...css(styles.label, hint, hintBottomLeft)}
              aria-label="Hello I am a top left tooltip"
            >
              Text with tooltip,hover over me! (hintBottomLeft)
            </span>

            <span
              {...css(styles.label, hint, hintBottomRight)}
              aria-label="Hello I am a top left tooltip"
            >
              Text with tooltip (hintBottomRight)
            </span>
          </div>
        </div>
        <div>
          <SyntaxHighlighter
            language="javascript"
            style={docco}
            customStyle={{ color: "white" }}
          >
            {hintStringCode}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
});
