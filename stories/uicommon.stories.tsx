import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { palette, Margins, Family, Bold } from "@catastrophee/styles";
import { css } from "glamor";

import {
  Checkbox,
  composeCollapsable,
  DefaultSpinner,
  ErrorScreen,
  Feedback,
  FloatingMenu,
  Input,
  JumpMenu,
  LoadingScreen,
  Multiselect,
  Notification,
  Pill,
  Popup,
  RadioInput,
  ScrollableView,
  TabItem,
  Table,
  Tabs,
  Tag,
  TagInput,
  TagWithAction,
  Toggle,
  FeedbackOptions
} from "@catastrophee/ui";
import { Color, Font, Paddings } from "@catastrophee/styles";
// import uicommonREADME from "../packages/ui/README.md";
// import jumpMenuREADME from "../packages/ui/src/docs/JumpMenuReadme.md";
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
  body: {},
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
  separatorLabels: {
    color: Color.onPrimary,
    fontFamily: Family,
    marginBottom: Margins.default,
    marginTop: Margins.default
  }
};

const uicommonDocs = storiesOf("@catastrophee/ui", module);
uicommonDocs
  // .addParameters({
  //   readme: {
  //     codeTheme: "duotone-dark",
  //     sidebar: uicommonREADME
  //   }
  // })
  .add("README", () => {
    return (
      <div {...css(styles.container)}>
        <div>
          <img src={rioLogo} />
        </div>

        <div {...css(Font.body, styles.fontColor)}>
          <Tag showBorder label="@catastrophee/ui" color="royalBlue" />
        </div>
      </div>
    );
  });

const jumpMenuStories = storiesOf("@catastrophee/ui", module);
jumpMenuStories
  // .addParameters({
  //   readme: {
  //     codeTheme: "duotone-dark",
  //     sidebar: jumpMenuREADME
  //   }
  // })
  .add("JumpMenu", () => {
    const options = [
      {
        id: "item1",
        label: "Stranger Things",
        action: () => {
          console.log("item 1");
        }
      },
      {
        id: "item2",
        label: "Good Girls",
        action: () => {
          console.log("item 2");
        }
      }
    ];
    return (
      <JumpMenu
        id={"menu-1"}
        options={options}
        selectedId={undefined}
        width={346}
      />
    );
  })
  .add("JumpMenu with styles", () => {
    const options = [
      {
        id: "item1",
        label: "Stranger Things",
        action: () => {
          console.log("item 1");
        }
      },
      {
        id: "item2",
        label: "Good Girls",
        action: () => {
          console.log("item 2");
        }
      }
    ];
    return (
      <div>
        <JumpMenu
          id={"menu-2"}
          options={options}
          selectedId={undefined}
          width={346}
          style={{
            list: {
              overflow: "hide"
            }
          }}
        />
        <div {...css({ display: "flex" })}>
          <div {...css({ width: "200px" })} />
          <div {...css({ position: "relative" })}>
            <JumpMenu
              id={"menu-3"}
              options={options}
              defaultLabel={
                <button
                  {...css({
                    backgroundColor: Color.secondary,
                    width: "95px",
                    height: "30px",
                    border: "0",
                    color: "white",
                    cursor: "pointer"
                  })}
                />
              }
              selectedId={undefined}
              width={120}
              style={{
                container: {
                  position: "absolute",
                  backgroundColor: Color.secondary,
                  border: 0
                },
                arrowIcon: {
                  top: "7px"
                },
                selected: {
                  padding: 0,
                  border: 0
                },
                list: {
                  width: "200px",
                  marginLeft: "-81px",
                  backgroundColor: "white",
                  overflow: "hide"
                },
                listItem: {
                  color: "black"
                },
                selectedText: {
                  color: "black"
                }
              }}
            />
            <button
              {...css({
                backgroundColor: Color.secondary,
                position: "absolute",
                width: "95px",
                height: "30px",
                border: "0",
                color: "white",
                cursor: "pointer"
              })}
              onClick={e => {
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              Submit all
            </button>
          </div>
        </div>
      </div>
    );
  });
const uicommonStories = storiesOf("@catastrophee/ui", module);
uicommonStories
  .add("ScrollableView", () => {
    return (
      <div>
        <ScrollableView topOffset={200} id="myScrollingView">
          {[...Array(400)].map((_, i) => {
            return <div {...css({ color: "white" })}>Line {i}</div>;
          })}
        </ScrollableView>
      </div>
    );
  })
  .add("Collapsable", () => {
    const Header = () => {
      return <div>Header</div>;
    };
    const Body = () => {
      return <div>Body</div>;
    };
    const Collapsable = composeCollapsable({
      Header,
      Body
    });
    return (
      <Collapsable
        id={`collapsable-id}`}
        expanded={true}
        showExpandedIcon={true}
      />
    );
  })
  .add("Collapsable with override styles", () => {
    const Header = () => {
      return <div>Header</div>;
    };
    const Body = () => {
      return <div>Body</div>;
    };
    const Collapsable = composeCollapsable({
      Header,
      Body
    });
    return (
      <Collapsable
        id={`collapsable-id}`}
        expanded={true}
        showExpandedIcon={true}
        style={{
          header: {
            background: "grey"
          }
        }}
      />
    );
  })
  .add("Default Table", () => {
    const data = {
      header: [
        { key: "title", label: "Title", fill: "1fr", sortType: "string" },
        {
          key: "episodes",
          label: "Number of Episodes",
          fill: "1fr",
          sortType: "string"
        }
      ],
      items: [
        { id: 1, title: "Stranger Things", episodes: 5 },
        { id: 2, title: "Girl Boss", episodes: 8 },
        { id: 3, title: "Beat Bugs", episodes: 12 }
      ]
    };
    return (
      <Table
        data={data}
        onRowClick={item => {
          console.log("row click", item);
        }}
      />
    );
  })
  .add("Empty Table", () => {
    const data = {
      header: [
        { key: "title", label: "Title", fill: "1fr", sortType: "string" },
        {
          key: "episodes",
          label: "Number of Episodes",
          fill: "1fr",
          sortType: "string"
        }
      ],
      items: []
    };
    return <Table data={data} />;
  })
  .add("Pill", () => {
    return (
      <div>
        {Object.keys(palette).map(color => {
          return (
            <div key={color} {...css({ marginBottom: Margins.default })}>
              <Pill showBorder={false} label={color} color={color} />
              <Pill showBorder={true} label={color} color={color} />
              <Pill showBorder={true} label={color} color={color} fill={true} />
            </div>
          );
        })}
      </div>
    );
  })
  .add("Pill truncated", () => {
    return (
      <div>
        {Object.keys(palette).map(color => {
          return (
            <div key={color} {...css({ marginBottom: Margins.default })}>
              <Pill
                showBorder={false}
                label="Super really long text that will be truncated"
                color={color}
                truncateOnWidth={100}
              />
              <Pill
                showBorder={true}
                label="Super really long text that will be truncated"
                color={color}
                truncateOnWidth={100}
              />
              <Pill
                showBorder={true}
                label="Super really long text that will be truncated"
                color={color}
                truncateOnWidth={100}
                fill={true}
              />
            </div>
          );
        })}
      </div>
    );
  })
  .add("Tag", () => {
    return (
      <div>
        {Object.keys(palette).map(color => {
          return (
            <div key={color} {...css({ marginBottom: Margins.default })}>
              <Tag showBorder={true} label={color} color={color} />
              <Tag showBorder={false} label={color} color={color} />
              <Tag showBorder={false} label={color} color={color} fill={true} />
            </div>
          );
        })}
        <h2 {...css({ color: "white" })}>Custom Tags</h2>
        <Tag
          showBorder={false}
          label="Custom Color"
          color={"pink"}
          style={{ label: { color: "#454B53", fontSize: "10px" } }}
        />
        <Tag
          showBorder={false}
          label="Custom Color"
          color={"#00000"}
          style={{ container: { background: "green" } }}
        />
      </div>
    );
  })
  .add("Toggle", () => {
    class Toggler extends React.Component<any, any> {
      constructor(props) {
        super(props);
        this.state = {
          toggled: true,
          toggled2: true
        };
      }
      render() {
        return (
          <div>
            <Toggle
              on={this.state.toggled}
              onToggle={() => {
                this.setState({ toggled: !this.state.toggled });
              }}
            />
            <Toggle
              on={this.state.toggled}
              onToggle={() => {
                this.setState({ toggled: !this.state.toggled });
              }}
              style={{
                on: {
                  backgroundColor: "pink"
                }
              }}
            />

            <Toggle on={false} disabled={true} onToggle={() => {}} />
            <Toggle on={true} disabled={true} onToggle={() => {}} />

            <Toggle
              on={this.state.toggled2}
              onToggle={() => {
                this.setState({ toggled2: !this.state.toggled2 });
              }}
              label={this.state.toggled2 ? "On" : "Off"}
            />
          </div>
        );
      }
    }
    return <Toggler />;
  })
  .add("Tag truncated", () => {
    return (
      <div>
        {Object.keys(palette).map(color => {
          return (
            <div key={color} {...css({ marginBottom: Margins.default })}>
              <Tag
                showBorder={true}
                label={"Super really long text that will be truncated"}
                color={color}
                truncateOnWidth={100}
              />

              <Tag
                showBorder={false}
                label={"Super really long text that will be truncated"}
                color={color}
                truncateOnWidth={100}
              />
              <Tag
                showBorder={false}
                label={"Super really long text that will be truncated"}
                color={color}
                fill={true}
                truncateOnWidth={100}
              />
            </div>
          );
        })}
        <Tag
          showBorder={false}
          label="Custom Color"
          color={"pink"}
          style={{ label: { color: "#454B53", fontSize: "10px" } }}
          truncateOnWidth={100}
        />
        <Tag
          showBorder={false}
          label="Custom Color"
          color={"#00000"}
          style={{ container: { background: "green" } }}
          truncateOnWidth={100}
        />
      </div>
    );
  })
  .add("TagWithAction", () => {
    return (
      <div>
        {Object.keys(palette).map(color => {
          return (
            <div key={color} {...css({ marginBottom: Margins.default })}>
              <TagWithAction
                id={color}
                showDelete={true}
                label={color}
                color={color}
              />
              <TagWithAction
                id={color}
                label={color}
                color={color}
                actions={[]}
              />
              <TagWithAction
                id={color}
                showDelete={false}
                label={color}
                color={color}
                actions={[]}
              />
            </div>
          );
        })}
      </div>
    );
  })
  .add("TagWithAction Truncated", () => {
    return (
      <div>
        {Object.keys(palette).map(color => {
          return (
            <div key={color} {...css({ marginBottom: Margins.default })}>
              <TagWithAction
                id={color}
                showDelete={true}
                label="Super really long text that will be truncated"
                color={color}
                truncateOnWidth={100}
              />
              <TagWithAction
                id={color}
                label="Super really long text that will be truncated"
                color={color}
                actions={[]}
                truncateOnWidth={100}
              />
              <TagWithAction
                id={color}
                showDelete={false}
                label="Super really long text that will be truncated"
                color={color}
                actions={[]}
                truncateOnWidth={100}
              />
            </div>
          );
        })}
      </div>
    );
  })
  .add("Popup", () => {
    return (
      <Popup
        title="Settings"
        cancel={{ label: "Cancel", action: () => {} }}
        confirm={{ label: "Save", action: () => {} }}
      />
    );
  })
  .add("Popup With Clear Header Styles", () => {
    return (
      <Popup
        title="Settings"
        cancel={{ label: "Cancel", action: () => {} }}
        confirm={{ label: "Update", action: () => {} }}
        clearHeader={true}
      />
    );
  })
  .add("Feedback", () => {
    return (
      <Feedback
        message={"Message"}
        details={"Message details"}
        show={true}
        onCancel={() => console.log("cancel")}
      />
    );
  })
  .add("Feedback Error", () => {
    return (
      <Feedback
        message={"Message"}
        details={"Message details"}
        type={FeedbackOptions.error}
        show={true}
        onCancel={() => console.log("cancel")}
      />
    );
  })
  .add("Feedback Warning", () => {
    return (
      <Feedback
        message={"Message"}
        details={"Message details"}
        type={FeedbackOptions.warning}
        show={true}
        onCancel={() => console.log("cancel")}
      />
    );
  })
  .add("Feedback Success", () => {
    return (
      <Feedback
        message={"Message"}
        details={"Message details"}
        type={FeedbackOptions.success}
        show={true}
        onCancel={() => console.log("cancel")}
      />
    );
  })
  .add("Notification in Pending Status", () => {
    return (
      <Notification
        status="pending"
        message="Adding Project"
        onClose={() => console.log("closeNotification")}
      />
    );
  })
  .add("Notification in Fulfilled Status", () => {
    return (
      <Notification
        status="fulfilled"
        message="Project Created Successfully"
        onClose={() => console.log("closeNotification")}
      />
    );
  })
  .add("Notification in Rejected Status", () => {
    return (
      <Notification
        status="rejected"
        message="Failed creating project"
        onClose={() => console.log("closeNotification")}
      />
    );
  })
  .add("Multiselect", () => {
    return (
      <div {...css({ marginTop: 200 })}>
        <Multiselect
          id="character-episodes"
          selectAllByDefault={true}
          allowSelectAll={true}
          width="480px"
          options={[
            {
              id: "item1",
              label: "Item 1"
            },
            {
              id: "item2",
              label: "Item 2"
            }
          ]}
          selected={["item1"]}
          onSelect={(id, allSelected) => {
            console.log({ id, allSelected });
          }}
          emptyMessage="No episodes avaialble for this title"
        />
        <Multiselect
          id="languages-selection"
          selectAllByDefault={true}
          width="300px"
          options={[
            {
              id: "en",
              label: "English"
            },
            {
              id: "de",
              label: "German"
            },
            {
              id: "pt-br",
              label: "Portuguese"
            },
            {
              id: "fr",
              label: "French"
            },
            {
              id: "ja",
              label: "Japanese"
            },
            {
              id: "es",
              label: "Spanish"
            }
          ]}
          selected={["en"]}
          onSelect={action(
            "(selectedIds: Array<string>, allSelected: boolean)"
          )}
          emptyMessage="No episodes avaialble for this title"
        />

        <Multiselect
          id="languages-selection"
          selectAllByDefault={true}
          width="300px"
          options={[]}
          selected={["en"]}
          onSelect={action(
            "(selectedIds: Array<string>, allSelected: boolean)"
          )}
          emptyMessage="No episodes avaialble for this title"
        />
        <div {...css(styles.separatorLabels)}>Changing Styles Example</div>
        <Multiselect
          id="languages-selection-2"
          selectAllByDefault={true}
          width="300px"
          options={[
            {
              id: "en",
              label: "English"
            },
            {
              id: "de",
              label: "German"
            },
            {
              id: "pt-br",
              label: "Portuguese"
            },
            {
              id: "fr",
              label: "French"
            },
            {
              id: "ja",
              label: "Japanese"
            },
            {
              id: "es",
              label: "Spanish"
            }
          ]}
          selected={["en"]}
          onSelect={action(
            "(selectedIds: Array<string>, allSelected: boolean)"
          )}
          emptyMessage="No episodes avaialble for this title"
          style={{
            selected: {
              border: "1px solid #FF00BF",
              borderRadius: 0
            },
            list: {
              backgroundColor: "#FF00BF"
            },
            icon: {
              color: "black"
            },
            checkedIcon: {
              color: "black"
            },
            optionLabel: {
              color: "pink"
            }
          }}
        />

        <div {...css(styles.separatorLabels)}>With Disabled Option</div>
        <Multiselect
          id="languages-selection-disabled"
          selectAllByDefault={true}
          width="300px"
          disabled={true}
          options={[
            {
              id: "en",
              label: "English"
            }
          ]}
          selected={["en"]}
          onSelect={action(
            "(selectedIds: Array<string>, allSelected: boolean)"
          )}
          emptyMessage="No episodes avaialble for this title"
          style={{
            selected: {
              border: "1px solid #FF00BF",
              borderRadius: 0
            },
            list: {
              backgroundColor: "#FF00BF"
            },
            icon: {
              color: "black"
            },
            checkedIcon: {
              color: "black"
            },
            optionLabel: {
              color: "pink"
            }
          }}
        />
      </div>
    );
  })
  .add("Tabs", () => {
    return (
      <Tabs
        items={[
          {
            id: "001",
            label: "Projects",
            action: () => console.log("clicked on projects")
          },
          {
            id: "002",
            label: "Talent",
            action: () => console.log("clicked on Talent")
          },
          {
            id: "003",
            label: "Character",
            action: () => console.log("clicked on character")
          }
        ]}
        selectedId="002"
      />
    );
  })
  .add("TabItem", () => {
    return (
      <TabItem
        item={{
          id: "002",
          label: "Projects",
          action: () => console.log("clicked on projects")
        }}
        isSelected={false}
      />
    );
  })
  .add("TabItem Selected", () => {
    return (
      <TabItem
        item={{
          id: "002",
          label: "Projects",
          action: () => console.log("clicked on projects")
        }}
        isSelected={true}
      />
    );
  })
  .add("Input", () => {
    return (
      <div {...css({ display: "flex", flexDirection: "column" })}>
        <Input id="input0" placeholder="Enter text here" />
        <Input
          id="input1"
          value="Invalid text"
          pattern={/s/}
          errorMessage="Invalid input"
        />
        <Input id="input2" value="Uneditable text" disabled={true} />
        <Input
          id="input3"
          value="Uneditable text"
          disabled={true}
          width={120}
        />
        <Input id="input4" value="Uneditable text" width={120} />
        <Input
          id="input5"
          value="Invalid text"
          pattern={/s/}
          errorMessage="Invalid input"
          width={100}
        />

        <div>
          <Input
            id="input6"
            value="Invalid text"
            pattern={/s/}
            errorMessage="Invalid input"
            width={100}
          />
        </div>
      </div>
    );
  })
  .add("Multiline Input", () => {
    return (
      <div {...css({ display: "flex", flexDirection: "column" })}>
        <Input
          id="input10"
          multiline={{ rows: 4, cols: 30 }}
          placeholder="Enter text here"
        />
        <Input
          id="input1"
          multiline={{ rows: 4, cols: 100 }}
          width="300px"
          value="Invalid text"
          pattern={/s/}
          errorMessage="Invalid input"
        />
        <Input
          id="input2"
          multiline={{ rows: 4, cols: 30 }}
          value="Uneditable text"
          disabled={true}
        />
        <Input
          id="input3"
          multiline={{ rows: 4, cols: 30 }}
          value="Uneditable text"
          disabled={true}
        />
      </div>
    );
  })
  .add("Input with labels", () => {
    return (
      <div {...css({ display: "flex", flexDirection: "column" })}>
        <Input id="email" label="Email" placeholder="Enter text here" />
        <Input
          id="email2"
          label="Email"
          value="Invalid text"
          pattern={/s/}
          errorMessage="Invalid input"
        />
        <Input
          id="email"
          label="Email"
          value="Uneditable text"
          disabled={true}
        />
      </div>
    );
  })
  .add("Checkbox Input", () => {
    class Toggler extends React.Component<any, any> {
      constructor(props) {
        super(props);
        this.state = {
          checked: false,
          checked2: true,
          checked3: true,
          checked4: false,
          checked5: true,
          checked6: true
        };
      }
      render() {
        return (
          <div>
            <Checkbox
              id="option"
              label="Option"
              checked={this.state.checked}
              onToggle={() => {
                this.setState({ checked: !this.state.checked });
              }}
            />

            <Checkbox
              id="option2"
              label="Option 2"
              checked={this.state.checked2}
              onToggle={() => {
                this.setState({ checked2: !this.state.checked2 });
              }}
            />

            <Checkbox
              id="disabled"
              label="Disabled Option"
              disabled
              checked={this.state.checked3}
              onToggle={() => {
                this.setState({ checked3: !this.state.checked3 });
              }}
            />

            <div
              {...css(Font.body, {
                color: Color.onPrimary,
                marginTop: Margins.regular,
                marginBottom: Margins.regular
              })}
            >
              Checkbox with personalized labels
            </div>
            <Checkbox
              id="personalized"
              label={
                <span>
                  <span {...css({ fontWeight: Bold, color: "#FF00BF" })}>
                    English{" "}
                  </span>
                  <span {...css({ fontStyle: "italic" })}>
                    Netflix Fullfilment Partner
                  </span>
                </span>
              }
              disabled={false}
              checked={this.state.checked4}
              onToggle={() => {
                this.setState({ checked3: !this.state.checked4 });
              }}
            />

            <Checkbox
              id="personalized2"
              label={
                <span>
                  English{" "}
                  <span {...css({ fontStyle: "italic" })}>
                    Netflix Fullfilment Partner
                  </span>
                </span>
              }
              disabled
              checked={this.state.checked5}
              onToggle={() => {
                this.setState({ checked3: !this.state.checked5 });
              }}
            />
            <Checkbox
              id="personalized3"
              label={
                <span {...css({ display: "grid" })}>
                  German{" "}
                  <span {...css({ fontStyle: "italic" })}>
                    Berlin Productions
                  </span>
                </span>
              }
              disabled={false}
              checked={this.state.checked6}
              onToggle={() => {
                this.setState({ checked3: !this.state.checked6 });
              }}
            />
          </div>
        );
      }
    }
    return <Toggler />;
  })
  .add("Radio Input", () => {
    return (
      <RadioInput
        id="gender"
        options={[
          {
            id: "female",
            label: "Female",
            onSelect: id => {
              console.log("selected", id);
            }
          },
          {
            id: "male",
            label: "Male",
            onSelect: id => {
              console.log("selected", id);
            }
          }
        ]}
        selectedId="female"
      />
    );
  })
  .add("Error Screen", () => {
    return <ErrorScreen message="Unable to load projects" />;
  })
  .add("Loading Screen", () => {
    return <LoadingScreen id="Loading-screen" message={"Loading projects"} />;
  })
  .add("Default spinner", () => {
    return <DefaultSpinner width={"100%"} thickness={4} />;
  })
  .add("FloatingMenu", () => {
    return (
      <div {...css({ position: "fixed", overflow: "scroll", height: "500px" })}>
        <div>
          <div>Row 1</div>
          <div>
            <FloatingMenu
              options={[
                {
                  id: "option1",
                  label: "Option 1",
                  action: (e?) => {
                    console.log("e", e, "option1");
                  }
                },
                {
                  id: "option2",
                  label: "Option 2",
                  action: (e?) => {
                    console.log("e", e, "option2");
                  }
                },
                {
                  id: "option3",
                  label: "Option 3",
                  action: (e?) => {
                    console.log("e", e, "option3");
                  }
                }
              ]}
            />
          </div>
        </div>
        <div>
          <div>Row 1</div>
          <div>
            <FloatingMenu
              options={[
                {
                  id: "option1",
                  label: "Option 1",
                  action: (e?) => {
                    console.log("e", e, "option1");
                  }
                },
                {
                  id: "option2",
                  label: "Option 2",
                  action: (e?) => {
                    console.log("e", e, "option2");
                  }
                },
                {
                  id: "option3",
                  label: "Option 3",
                  action: (e?) => {
                    console.log("e", e, "option3");
                  }
                }
              ]}
            />
          </div>
        </div>
        <div>
          <div>Row 1</div>
          <div>
            <FloatingMenu
              options={[
                {
                  id: "option1",
                  label: "Option 1",
                  action: (e?) => {
                    console.log("e", e, "option1");
                  }
                },
                {
                  id: "option2",
                  label: "Option 2",
                  action: (e?) => {
                    console.log("e", e, "option2");
                  }
                },
                {
                  id: "option3",
                  label: "Option 3",
                  action: (e?) => {
                    console.log("e", e, "option3");
                  }
                }
              ]}
            />
          </div>
        </div>
        <div>
          <div>Row 1</div>
          <div>
            <FloatingMenu
              options={[
                {
                  id: "option1",
                  label: "Option 1",
                  action: (e?) => {
                    console.log("e", e, "option1");
                  }
                },
                {
                  id: "option2",
                  label: "Option 2",
                  action: (e?) => {
                    console.log("e", e, "option2");
                  }
                },
                {
                  id: "option3",
                  label: "Option 3",
                  action: (e?) => {
                    console.log("e", e, "option3");
                  }
                }
              ]}
            />
          </div>
        </div>
        <div>
          <div>Row 1</div>
          <div>
            <FloatingMenu
              options={[
                {
                  id: "option1",
                  label: "Option 1",
                  action: (e?) => {
                    console.log("e", e, "option1");
                  }
                },
                {
                  id: "option2",
                  label: "Option 2",
                  action: (e?) => {
                    console.log("e", e, "option2");
                  }
                },
                {
                  id: "option3",
                  label: "Option 3",
                  action: (e?) => {
                    console.log("e", e, "option3");
                  }
                }
              ]}
            />
          </div>
        </div>
        <div>
          <div>Row 1</div>
          <div>
            <FloatingMenu
              options={[
                {
                  id: "option1",
                  label: "Option 1",
                  action: (e?) => {
                    console.log("e", e, "option1");
                  }
                },
                {
                  id: "option2",
                  label: "Option 2",
                  action: (e?) => {
                    console.log("e", e, "option2");
                  }
                },
                {
                  id: "option3",
                  label: "Option 3",
                  action: (e?) => {
                    console.log("e", e, "option3");
                  }
                }
              ]}
            />
          </div>
        </div>
        <div>
          <div>Row 1</div>
          <div>
            <FloatingMenu
              options={[
                {
                  id: "option1",
                  label: "Option 1",
                  action: (e?) => {
                    console.log("e", e, "option1");
                  }
                },
                {
                  id: "option2",
                  label: "Option 2",
                  action: (e?) => {
                    console.log("e", e, "option2");
                  }
                },
                {
                  id: "option3",
                  label: "Option 3",
                  action: (e?) => {
                    console.log("e", e, "option3");
                  }
                }
              ]}
            />
          </div>
        </div>
        <div>
          <div>Row 1</div>
          <div>
            <FloatingMenu
              options={[
                {
                  id: "option1",
                  label: "Option 1",
                  action: (e?) => {
                    console.log("e", e, "option1");
                  }
                },
                {
                  id: "option2",
                  label: "Option 2",
                  action: (e?) => {
                    console.log("e", e, "option2");
                  }
                },
                {
                  id: "option3",
                  label: "Option 3",
                  action: (e?) => {
                    console.log("e", e, "option3");
                  }
                }
              ]}
            />
          </div>
        </div>
        <div>
          <div>Row 1</div>
          <div>
            <FloatingMenu
              options={[
                {
                  id: "option1",
                  label: "Option 1",
                  action: (e?) => {
                    console.log("e", e, "option1");
                  }
                },
                {
                  id: "option2",
                  label: "Option 2",
                  action: (e?) => {
                    console.log("e", e, "option2");
                  }
                },
                {
                  id: "option3",
                  label: "Option 3",
                  action: (e?) => {
                    console.log("e", e, "option3");
                  }
                }
              ]}
            />
          </div>
        </div>
        <div>
          <div>Row 1</div>
          <div>
            <FloatingMenu
              options={[
                {
                  id: "option1",
                  label: "Option 1",
                  action: (e?) => {
                    console.log("e", e, "option1");
                  }
                },
                {
                  id: "option2",
                  label: "Option 2",
                  action: (e?) => {
                    console.log("e", e, "option2");
                  }
                },
                {
                  id: "option3",
                  label: "Option 3",
                  action: (e?) => {
                    console.log("e", e, "option3");
                  }
                }
              ]}
            />
          </div>
        </div>
        <div>
          <div>Row 1</div>
          <div>
            <FloatingMenu
              options={[
                {
                  id: "option1",
                  label: "Option 1",
                  action: (e?) => {
                    console.log("e", e, "option1");
                  }
                },
                {
                  id: "option2",
                  label: "Option 2",
                  action: (e?) => {
                    console.log("e", e, "option2");
                  }
                },
                {
                  id: "option3",
                  label: "Option 3",
                  action: (e?) => {
                    console.log("e", e, "option3");
                  }
                }
              ]}
            />
          </div>
        </div>
        <div>
          <div>Row 1</div>
          <div>
            <FloatingMenu
              options={[
                {
                  id: "option1",
                  label: "Option 1",
                  action: (e?) => {
                    console.log("e", e, "option1");
                  }
                },
                {
                  id: "option2",
                  label: "Option 2",
                  action: (e?) => {
                    console.log("e", e, "option2");
                  }
                },
                {
                  id: "option3",
                  label: "Option 3",
                  action: (e?) => {
                    console.log("e", e, "option3");
                  }
                }
              ]}
            />
          </div>
        </div>
        <div>
          <div>Row 1</div>
          <div>
            <FloatingMenu
              options={[
                {
                  id: "option1",
                  label: "Option 1",
                  action: (e?) => {
                    console.log("e", e, "option1");
                  }
                },
                {
                  id: "option2",
                  label: "Option 2",
                  action: (e?) => {
                    console.log("e", e, "option2");
                  }
                },
                {
                  id: "option3",
                  label: "Option 3",
                  action: (e?) => {
                    console.log("e", e, "option3");
                  }
                }
              ]}
            />
          </div>
        </div>
        <div>
          <div>Row 1</div>
          <div>
            <FloatingMenu
              options={[
                {
                  id: "option1",
                  label: "Option 1",
                  action: (e?) => {
                    console.log("e", e, "option1");
                  }
                },
                {
                  id: "option2",
                  label: "Option 2",
                  action: (e?) => {
                    console.log("e", e, "option2");
                  }
                },
                {
                  id: "option3",
                  label: "Option 3",
                  action: (e?) => {
                    console.log("e", e, "option3");
                  }
                }
              ]}
            />
          </div>
        </div>
        <div>
          <div>Row 1</div>
          <div>
            <FloatingMenu
              options={[
                {
                  id: "option1",
                  label: "Option 1",
                  action: (e?) => {
                    console.log("e", e, "option1");
                  }
                },
                {
                  id: "option2",
                  label: "Option 2",
                  action: (e?) => {
                    console.log("e", e, "option2");
                  }
                },
                {
                  id: "option3",
                  label: "Option 3",
                  action: (e?) => {
                    console.log("e", e, "option3");
                  }
                }
              ]}
            />
          </div>
        </div>
        <div>
          <div>Row 1</div>
          <div>
            <FloatingMenu
              options={[
                {
                  id: "option1",
                  label: "Option 1",
                  action: (e?) => {
                    console.log("e", e, "option1");
                  }
                },
                {
                  id: "option2",
                  label: "Option 2",
                  action: (e?) => {
                    console.log("e", e, "option2");
                  }
                },
                {
                  id: "option3",
                  label: "Option 3",
                  action: (e?) => {
                    console.log("e", e, "option3");
                  }
                }
              ]}
            />
          </div>
        </div>
        <div>
          <div>Row 1</div>
          <div>
            <FloatingMenu
              options={[
                {
                  id: "option1",
                  label: "Option 1",
                  action: (e?) => {
                    console.log("e", e, "option1");
                  }
                },
                {
                  id: "option2",
                  label: "Option 2",
                  action: (e?) => {
                    console.log("e", e, "option2");
                  }
                },
                {
                  id: "option3",
                  label: "Option 3",
                  action: (e?) => {
                    console.log("e", e, "option3");
                  }
                }
              ]}
            />
          </div>
        </div>
        <div>
          <div>Row 1</div>
          <div>
            <FloatingMenu
              options={[
                {
                  id: "option1",
                  label: "Option 1",
                  action: (e?) => {
                    console.log("e", e, "option1");
                  }
                },
                {
                  id: "option2",
                  label: "Option 2",
                  action: (e?) => {
                    console.log("e", e, "option2");
                  }
                },
                {
                  id: "option3",
                  label: "Option 3",
                  action: (e?) => {
                    console.log("e", e, "option3");
                  }
                }
              ]}
            />
          </div>
        </div>
        <div>
          <div>Row 1</div>
          <div>
            <FloatingMenu
              customTopOffset={-30}
              options={[
                {
                  id: "option1",
                  label: "Option 1",
                  action: (e?) => {
                    console.log("e", e, "option1");
                  }
                },
                {
                  id: "option2",
                  label: "Option 2",
                  action: (e?) => {
                    console.log("e", e, "option2");
                  }
                },
                {
                  id: "option3",
                  label: "Option 3",
                  action: (e?) => {
                    console.log("e", e, "option3");
                  }
                }
              ]}
            />
          </div>
        </div>
      </div>
    );
  })
  .add("TagInput", () => {
    return (
      <TagInput
        tags={[
          { id: "brave", label: "brave" },
          { id: "loyal", label: "loyal" },
          { id: "loyal", label: "series", color: "green" }
        ]}
        onDeleteTag={tag => console.log(tag)}
        onChange={(e, tags) => console.log({ e, tags })}
      />
    );
  })
  .add("Input With Tag", () => {
    return (
      <div {...css({ width: "200px" })}>
        <TagInput
          tags={[
            { id: "brave", label: "brave" },
            { id: "loyal", label: "loyal" },
            { id: "loyal", label: "series", color: "green" }
          ]}
          onDeleteTag={tag => console.log(tag)}
          onChange={(e, tags) => console.log({ e, tags })}
        />
      </div>
    );
  });
