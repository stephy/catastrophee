import * as React from "react";
import { storiesOf } from "@storybook/react";

import {
  catastropheeColors,
  catastropheeColorsComplementary,
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

import { css } from "glamor";
import { Tag } from "@catastrophee/ui";
import { catColors } from "./defaultStyles";
const rioLogo = require("../public-assets/favicon-96.png");
const styles = {
  container: {
    background: catColors.background,
    padding: Paddings.default,
    display: "flex",
    alignItems: "center",
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
    padding: "12px",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "space-between"
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
    display: "flex",
    width: "970px",
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
const rioStories = storiesOf("@catastrophee/styles", module);
rioStories.add("README", () => {
  return (
    <div {...css(styles.container)}>
      <div {...css(styles.container)}>
        <div>
          <img src={rioLogo} />
        </div>

        <div {...css(Font.body, styles.fontColor)}>
          <Tag showBorder label="@catastrophee/styles" color="royalBlue" />
        </div>
      </div>

      <div>
        <div {...css(Font.h1, styles.fontColor)}>
          <h1>@catastrophee/styles</h1>
          <p>
            @catastrophee/styles has no dependencies and it is just a set of pre
            defined colors, styles and style helper functions.
          </p>
          To use @catastrophee/styles you can do so by installing rio-styles
          <Tag label="yarn add @catastrophee/styles" color="pink" /> or
          <Tag label="npm install @catastrophee/styles" color="violet" />
          <h1>Available colors</h1>
          <h2>catastropheeColors</h2>
          <Tag
            label="import { catastropheeColors } from '@catastrophee/styles' "
            color="violet"
          />
          <p>
            {Object.keys(catastropheeColors).map(color => {
              return <Tag label={`.${color}`} color={color} fill />;
            })}
          </p>
          <pre> Example: catastropheeColors.green </pre>
          <h2>catastropheeColorsComplementary</h2>
          <Tag
            label="import { catastropheeColorsComplementary } from '@catastrophee/styles' "
            color="violet"
          />
          <p>
            {Object.keys(catastropheeColorsComplementary).map(color => {
              return <Tag label={`.${color}`} color={color} fill />;
            })}
          </p>
          <pre> Example: catastropheeColorsComplementary.pink </pre>
          <h2>Colors</h2>
          <Tag
            label="import { Color } from '@catastrophee/styles' "
            color="violet"
          />
          <p {...css(styles.label)}>
            Primary and secondary colors are applied sparingly to strategic
            parts of your UI. They are typically chosen for their ability to
            represent your brand. Primary colors map to components and elements,
            like app bars and buttons. Secondary colors are most often used as
            accents on components, such as FABS and selection controls. Finally,
            color variants can also be used to complement and provide accessible
            options for your primary and secondary colors.
          </p>
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
          <pre> Example: Color.primary </pre>
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
          <pre> Example: Color.error </pre>
          <h2>On Colors</h2>
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
          <h2>Other Complementary Colors</h2>
          <div {...css(styles.boxContainer, { height: "80px" })}>
            {renderBox("In Progress", Color.inProgress, "#FFFFFF", "15")}
            {renderBox("Completed", Color.completed, "#FFFFFF", "16")}
            {renderBox("Decoration", Color.decoration, "#FFFFFF", "17")}
            {renderBox("Success", Color.success, "#FFFFFF", "18")}
          </div>
          <h1>Typography</h1>
          <Tag
            label="import { Font } from '@catastrophee/styles' "
            color="violet"
          />
          <div>
            <div {...css(Font.h6)}>
              Family: "Circular EP", -apple-system, "Helvetica Neue", "Lucida
              Grande", sans-serif'
            </div>
            <div {...css(Font.h1)}>h1</div>
            <div {...css(Font.h2)}>h2</div>
            <div {...css(Font.h3)}>h3</div>
            <div {...css(Font.h4)}>h4</div>
            <div {...css(Font.h5)}>h5</div>
            <div {...css(Font.h6)}>h6</div>
            <div {...css(Font.subtitle)}>Subtitle</div>
            <div {...css(Font.body)}>body</div>
            <div {...css(Font.button)}>button</div>
            <div {...css(Font.caption)}>caption</div>
            <div {...css(Font.overline)}>overline</div>
            <div {...css(Font.overlineBold)}>overlineBold</div>
            <pre> Example: Font.overlineBold </pre>
          </div>
          <h1>Elevation</h1>
          <Tag
            label="import { Elevation } from '@catastrophee/styles' "
            color="violet"
          />
          <pre> Example: Elevation.depth2 </pre>
          <div {...css(styles.elevationWrapper)}>
            <div {...css(styles.elevation, Font.overline, Elevation.depth0)}>
              Depth0
            </div>
            <div {...css(styles.elevation, Font.overline, Elevation.depth1)}>
              Depth1
            </div>
            <div {...css(styles.elevation, Font.overline, Elevation.depth2)}>
              Depth2
            </div>
            <div {...css(styles.elevation, Font.overline, Elevation.depth3)}>
              Depth3
            </div>
            <div {...css(styles.elevation, Font.overline, Elevation.depth4)}>
              Depth4
            </div>
            <div {...css(styles.elevation, Font.overline, Elevation.depth5)}>
              Depth5
            </div>
            <div {...css(styles.elevation, Font.overline, Elevation.depth6)}>
              Depth6
            </div>
            <div {...css(styles.elevation, Font.overline, Elevation.depth7)}>
              Depth7
            </div>
            <div {...css(styles.elevation, Font.overline, Elevation.depth8)}>
              Depth8
            </div>
            <div {...css(styles.elevation, Font.overline, Elevation.depth9)}>
              Depth9
            </div>
            <div {...css(styles.elevation, Font.overline, Elevation.depth10)}>
              Depth10
            </div>
            <div {...css(styles.elevation, Font.overline, Elevation.depth11)}>
              depth11
            </div>
            <div {...css(styles.elevation, Font.overline, Elevation.depth12)}>
              Depth12
            </div>
            <div {...css(styles.elevation, Font.overline, Elevation.depth13)}>
              Depth13
            </div>
            <div {...css(styles.elevation, Font.overline, Elevation.depth14)}>
              Depth14
            </div>
            <div {...css(styles.elevation, Font.overline, Elevation.depth15)}>
              Depth15
            </div>
            <div {...css(styles.elevation, Font.overline, Elevation.depth16)}>
              Depth16
            </div>
            <div {...css(styles.elevation, Font.overline, Elevation.depth17)}>
              Depth17
            </div>
            <div {...css(styles.elevation, Font.overline, Elevation.depth18)}>
              Depth18
            </div>
            <div {...css(styles.elevation, Font.overline, Elevation.depth19)}>
              Depth19
            </div>
            <div {...css(styles.elevation, Font.overline, Elevation.depth20)}>
              Depth20
            </div>
            <div {...css(styles.elevation, Font.overline, Elevation.depth21)}>
              depth21
            </div>
            <div {...css(styles.elevation, Font.overline, Elevation.depth22)}>
              Depth22
            </div>
            <div {...css(styles.elevation, Font.overline, Elevation.depth23)}>
              Depth23
            </div>
            <div {...css(styles.elevation, Font.overline, Elevation.depth24)}>
              Depth24
            </div>
          </div>
          <h1>Helper functions</h1>
          <Tag
            label="import { toRem, setAlpha } from '@catastrophee/styles' "
            color="violet"
          />
          <pre> Example: toRem(20) </pre>
          <pre> Example: setAlpha(Color.background, 0.5) </pre>
        </div>

        <div {...css(Font.h1, styles.fontColor)}>
          <h1>Predefined styles for Tooltip on hover</h1>
          <span
            {...css(styles.label, hint, hintTop)}
            aria-label="Hello I am a top tooltip"
          >
            Text with tooltip (hintTop)
          </span>
          <span
            {...css(styles.label, hint, hintBottom)}
            aria-label="Hello I am a bottom tooltip"
          >
            Text with tooltip (hintBottom)
          </span>
          <span
            {...css(styles.label, hint, hintLeft)}
            aria-label="Hello I am a left tooltip"
          >
            Text with tooltip (hintLeft)
          </span>
          <span
            {...css(styles.label, hint, hintRight)}
            aria-label="Hello I am a right tooltip"
          >
            Text with tooltip (hintRight)
          </span>

          <span
            {...css(styles.label, hint, hintTopLeft)}
            aria-label="Hello I am a top left tooltip"
          >
            Text with tooltip (hintTopLeft)
          </span>

          <span
            {...css(styles.label, hint, hintTopRight)}
            aria-label="Hello I am a top left tooltip"
          >
            Text with tooltip (hintTopRight)
          </span>

          <span
            {...css(styles.label, hint, hintBottomLeft)}
            aria-label="Hello I am a top left tooltip"
          >
            Text with tooltip (hintBottomLeft)
          </span>

          <span
            {...css(styles.label, hint, hintBottomRight)}
            aria-label="Hello I am a top left tooltip"
          >
            Text with tooltip (hintBottomRight)
          </span>
        </div>
      </div>
    </div>
  );
});
