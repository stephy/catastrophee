import * as React from "react";
import { storiesOf } from "@storybook/react";

import { Paddings, Font, Color } from "@catastrophee/styles";
import { css } from "glamor";
import { Tag } from "@catastrophee/ui";
import { defaultStyles, catColors } from "./defaultStyles";
const catastropheeLogo = require("../public-assets/catastropheelogo.png");
import { versions } from "./versions";

const styles = {
  container: {
    background: catColors.background,
    padding: Paddings.default,
    margin: 0,
    width: "100%",
    display: "flex",
    flexDirection: "column"
  },
  body: {
    display: "flex",
    flexDirection: "column"
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
  }
};

const stories = storiesOf("Catastrophee", module);
stories.add("Welcome to Catastrophee", () => {
  class Welcome extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div {...css(styles.container)}>
          <div {...css(Font.body, styles.fontColor, styles.body)}>
            <img src={catastropheeLogo} width="100" />
            <h1 {...css(defaultStyles.title)}>Welcome to Catastrophee!</h1>
          </div>

          <div {...css(Font.body, styles.fontColor, styles.body)}>
            Catastrophee is an opinionated set of libraries created by me. Hi, I
            am Stephani Bishop.
            <ul {...css(styles.list)}>
              <li>
                <Tag
                  showBorder
                  label={
                    <span>
                      <a
                        {...css(styles.link)}
                        href="?path=/story/@catastrophee/styles--readme"
                      >
                        @catastrophee/styles
                      </a>{" "}
                      <Tag
                        label={
                          <span>
                            {" "}
                            Latest version {versions["@catastrophee/styles"]}
                          </span>
                        }
                        fill={true}
                        color="violet"
                      />
                    </span>
                  }
                  color="violet"
                />
              </li>
              <li>
                <Tag
                  showBorder
                  label={
                    <span>
                      <a
                        {...css(styles.link)}
                        href="?path=/story/@catastrophee/ui--readme"
                      >
                        @catastrophee/ui
                      </a>{" "}
                      <Tag
                        label={
                          <span>
                            {" "}
                            Latest version {versions["@catastrophee/ui"]}
                          </span>
                        }
                        fill={true}
                        color="purple"
                      />
                    </span>
                  }
                  color="purple"
                />
              </li>
              <li>
                <Tag
                  showBorder
                  label={
                    <span>
                      <a
                        {...css(styles.link)}
                        href="?path=/story/@catastrophee/models--readme"
                      >
                        @catastrophee/models
                      </a>{" "}
                      <Tag
                        label={
                          <span>
                            {" "}
                            Latest version {versions["@catastrophee/models"]}
                          </span>
                        }
                        fill={true}
                        color="royalBlue"
                      />
                    </span>
                  }
                  color="royalBlue"
                />
              </li>
            </ul>
            <p {...css(defaultStyles.textBlock)}>
              I code all of catastrophee's models and components using
              Typescript so it is really easy for you to use. No guessing props
              or types.
            </p>
            <p {...css(defaultStyles.textBlock)}>
              I use{" "}
              <a
                href="https://mobx.js.org/intro/overview.html"
                target="_blank"
                {...css(styles.link)}
              >
                mobx
              </a>{" "}
              for the models, css in js (
              <a
                href="https://github.com/threepointone/glamor"
                target="_blank"
                {...css(styles.link)}
              >
                glamor
              </a>
              ) for styling and the free package of{" "}
              <a
                href="https://fontawesome.com/"
                target="_blank"
                {...css(styles.link)}
              >
                FontAwesome
              </a>{" "}
              for the icons.
            </p>
            <p {...css(defaultStyles.textBlock)}>
              You don't have to use all of them. You can use one or the other.
              However, they work really well together as a system.
            </p>
            <h1>Goal of Catastrophee</h1>
            <p {...css(defaultStyles.textBlock)}>
              The goal of Catastrophee is to allow you to easily reuse Mobx
              models, React components and predefined styles on{" "}
              <span {...css(defaultStyles.accentText)}>ANY</span> project you
              may own. When I say any I mean any.
            </p>
            <h1>Development</h1>
            <p {...css(defaultStyles.textBlock)}>
              Catastrophee is a Lerna repo. Lerna is just a tool for managing
              JavaScript projects with multiple packages. Lerna can be a bit
              cumbersome to use in the beginning. But you won't need to know
              much about it to be able to use Rio. However, if you want to learn
              more about Lerna,{" "}
              <a
                {...css(defaultStyles.link)}
                href="https://github.com/lerna/lerna"
              >
                click here
              </a>
            </p>
            <p {...css(defaultStyles.textBlock)}>
              Catastrophee uses Storybook to showcase all the components
              available for you to use. I use the stories to test our components
              and try different props. You can preview your changes instantly.
              It is a great way to ensure the component is working properly
              before publishing it. Storybook is open source and there are a lot
              of examples online. To know more about storybook{" "}
              <a href="https://storybook.js.org/" {...css(defaultStyles.link)}>
                click here
              </a>
            </p>
            <h1>Want to try Catastrophee?</h1>
            <p {...css(defaultStyles.textBlock)}>
              Navigate on the links to the right to see all components available
            </p>
            <h1>Want to update components in Catastrophee?</h1>
            <p {...css(defaultStyles.textBlock)}>
              {" "}
              Click on the 'Readme' link tab to read documentation.
            </p>
          </div>
        </div>
      );
    }
  }

  return <Welcome />;
});
