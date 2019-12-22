import { css } from "glamor";
import * as React from "react";
import { Color, defaults, Family, InputStyle } from "@catastrophee/styles";
import { TagWithAction, TagWithActionType } from "./TagWithAction";

const styles = {
  container: {
    ...InputStyle,
    minHeight: "30px",
    maxHeight: "60px",
    width: "100%",
    overflowX: "none",
    overflowY: "scroll",
    display: "flex",
    flexWrap: "wrap"
  },
  input: {
    backgroundColor: Color.primary,
    outline: "none",
    border: 0,
    margin: 0,
    display: "inline-flex",
    height: "30px",
    color: Color.light,
    fontSize: defaults.fontSize,
    fontFamily: Family,
    marginTop: "2px",
    marginLeft: "4px"
  },
  pillwrapper: {}
};

interface InputTagType {
  id: string;
  label: string;
  color?: string;
}
interface TagInputType {
  tags: InputTagType[];
  onDeleteTag: (tag: TagWithActionType) => void;
  onChange: (e: any, tags: TagWithActionType[]) => void;
}

export class TagInput extends React.Component<
  TagInputType,
  {
    tags: Array<InputTagType>;
    currentValue: string;
  }
> {
  constructor(props) {
    super(props);
    this.state = {
      tags: props.tags || [],
      currentValue: ""
    };
  }
  componentWillUpdate(nextProps) {
    if (JSON.stringify(nextProps.tags) !== JSON.stringify(this.props.tags)) {
      this.setState({
        tags: nextProps.tags || []
      });
    }
  }

  removeTag = (e: any, tag: TagWithActionType) => {
    const tags: Array<TagWithActionType> = this.state.tags;
    const updatedTags: Array<TagWithActionType> = [];
    const { onDeleteTag, onChange } = this.props;
    tags.forEach((t: TagWithActionType) => {
      if (t.label !== tag.label) {
        updatedTags.push(t);
      }
    });
    this.setState(
      {
        tags: updatedTags
      },
      () => {
        onDeleteTag(tag);
        onChange(e, this.state.tags);
      }
    );
  };

  handleKeyDown = e => {
    const label = e.target.value;
    if (e.key === "Backspace") {
      if (e.target.value === "") {
        // delete last tag
        const currentTags = this.state.tags;
        currentTags.pop();
        this.setState({
          tags: currentTags
        });
      }
    }
    if (e.key === "Enter") {
      let duplicate = false;
      // check for dups
      this.state.tags.forEach(tag => {
        if (tag.label === label || label.trim() === "") {
          duplicate = true;
        }
      });
      if (duplicate) {
        this.setState({
          currentValue: ""
        });
        return;
      }
      const tags = [
        ...this.state.tags,
        {
          id: label,
          label
        }
      ];
      tags.push();
      this.setState(
        {
          tags,
          currentValue: ""
        },
        () => {
          this.props.onChange(e, this.state.tags);
        }
      );
    }
  };

  render() {
    const { tags, currentValue } = this.state;
    return (
      <div {...css(styles.container)}>
        {tags &&
          tags.map((tag: TagWithActionType) => {
            return (
              <div key={`tag-${tag.label}`}>
                <TagWithAction
                  id={tag.id}
                  label={tag.label}
                  color={tag.color ? tag.color : "blue"}
                  showDelete={true}
                  onDelete={() => this.removeTag(undefined, tag)}
                />
              </div>
            );
          })}
        <input
          {...css(styles.input)}
          onKeyDown={this.handleKeyDown}
          value={currentValue}
          onChange={e =>
            this.setState({
              currentValue: e.target.value
            })
          }
        />
      </div>
    );
  }
}
export default TagInput;
