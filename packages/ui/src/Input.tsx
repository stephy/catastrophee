import * as React from "react";
import { css } from "glamor";
import { merge } from "lodash";

import {
  InputStyle,
  Color,
  defaults,
  catastropheeColors,
  Family,
  Font,
  setAlpha,
  CssPropertyTypes
} from "@catastrophee/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const defaultStyles = {
  container: {
    display: "inline-block",
    position: "relative"
  },
  errorMessage: {
    color: catastropheeColors.red,
    fontFamily: Family,
    fontSize: defaults.fontSize,
    fontStyle: "italic"
  },
  inputWrapper: {
    position: "relative",
    display: "inline-block"
  },
  input: {
    position: "relative",
    paddingRight: "30px",
    caretColor: Color.secondary
  },
  iconDisabled: {
    color: setAlpha(Color.onPrimary200, 0.5),
    fontSize: defaults.fontSize,
    position: "absolute",
    right: "-30px",
    top: "16px"
  },
  invalidInput: {
    border: `0.092rem solid ${catastropheeColors.red}`,
    backgroundColor: setAlpha(catastropheeColors.red, 0.3),
    caretColor: catastropheeColors.red,
    ":focus": {
      border: `0.092rem solid ${catastropheeColors.red}`,
      backgroundColor: setAlpha(catastropheeColors.red, 0.3)
    }
  },
  iconInvalid: {
    color: catastropheeColors.red,
    fontSize: defaults.fontSize,
    position: "absolute",
    right: "-30px",
    top: "16px"
  },
  textarea: {
    position: "relative",
    paddingRight: "30px",
    resize: "none"
  }
};
export interface InputStyle {
  container?: CssPropertyTypes;
  errorMessage?: CssPropertyTypes;
  inputWrapper?: CssPropertyTypes;
  input?: CssPropertyTypes;
  iconDisabled?: CssPropertyTypes;
  iconInvalid?: CssPropertyTypes;
  textarea?: CssPropertyTypes;
}

export interface MultilineType {
  rows: number;
  cols: number;
}
export interface InputPropType {
  disabled?: boolean;
  errorMessage?: string;
  id: string;
  label?: string;
  multiline?: MultilineType;
  pattern?: any; //regex
  placeholder?: string;
  style?: InputStyle;
  valid?: boolean;
  value: string;
  width?: string;
}

export const TEXTAREA_PROPS = [
  "autofocus", //autofocus	Specifies that a text area should automatically get focus when the page loads
  "cols", //number	Specifies the visible width of a text area
  "dirname", //textareaname.dir	Specifies that the text direction of the textarea will be submitted
  "disabled", //disabled	Specifies that a text area should be disabled
  "form", //form_id	Specifies one or more forms the text area belongs to
  "maxlength", // number	Specifies the maximum number of characters allowed in the text area
  "name", //text	Specifies a name for a text area
  "placeholder", //text	Specifies a short hint that describes the expected value of a text area
  "readonly", //readonly	Specifies that a text area should be read-only
  "required", //required	Specifies that a text area is required/must be filled out
  "rows", //number	Specifies the visible number of lines in a text area
  "wrap", //hard soft	Specifies how the text in a text area is to be wrapped when submitted in a form
  "onChange",
  "onBlur",
  "onFocus",
  "onInvalid",
  "onClick",
  "onKeyDown",
  "onKeyPress",
  "onKeyUp"
];

export const INPUT_PROPS = [
  "accept",
  "align", // not supported in HTML5
  "alt",
  "autocomplete",
  "autofocus",
  "checked",
  "dirname",
  "disabled",
  "form",
  "formaction",
  "formenctype",
  "formnovalidate",
  "formmethod",
  "formtarget",
  "height", //	pixels	Specifies the height of an <input> element (only for type="image")
  "list", //	datalist_id	Refers to a <datalist> element that contains pre-defined options for an <input> element
  "max", //	number
  "date", //		Specifies the maximum value for an <input> element
  "maxlength", //		number	Specifies the maximum number of characters allowed in an <input> element
  "min", //		number
  "date", //		Specifies a minimum value for an <input> element
  "multiple", //		multiple	Specifies that a user can enter more than one value in an <input> element
  "name", //		text	Specifies the name of an <input> element
  "pattern", //		regexp	Specifies a regular expression that an <input> element's value is checked against
  "placeholder", //		text	Specifies a short hint that describes the expected value of an <input> element
  "readonly", //		readonly	Specifies that an input field is read-only
  "required", //		required	Specifies that an input field must be filled out before submitting the form
  "size", //		number	Specifies the width, in characters, of an <input> element
  "src", //
  "step",
  "type",
  "value",
  "width",
  "onChange",
  "onBlur",
  "onFocus",
  "onInvalid",
  "onClick",
  "onKeyDown",
  "onKeyPress",
  "onKeyUp"
];

export const Input = (props: InputPropType | any) => {
  const {
    disabled,
    errorMessage,
    id,
    label,
    multiline,
    pattern,
    placeholder,
    style,
    valid,
    width = "200px"
  } = props;

  const inputProps: any = Object.keys(props)
    .filter(key => INPUT_PROPS.includes(key))
    .reduce((obj, key) => {
      obj[key] = props[key];
      return obj;
    }, {});

  const isValid = pattern
    ? pattern.test(inputProps.value)
    : valid !== undefined
    ? valid
    : true;
  const textareaProps = Object.keys(props)
    .filter(key => TEXTAREA_PROPS.includes(key))
    .reduce((obj, key) => {
      obj[key] = props[key];
      return obj;
    }, {});

  const styles = merge({}, defaultStyles, style);
  const invalidInputStyle = isValid ? {} : styles.invalidInput;

  return (
    <span {...css({ width }, styles.container)} data-style="container">
      {label && (
        <label {...css(Font.overline)} htmlFor={id}>
          {label}
        </label>
      )}
      <span {...css({ width }, styles.inputWrapper)}>
        {multiline && multiline.rows > 0 && (
          <textarea
            {...textareaProps}
            rows={multiline.rows}
            cols={multiline.cols}
            placeholder={placeholder}
            {...css({ width }, InputStyle, styles.textarea)}
            data-style="textarea"
          />
        )}

        {(!multiline || multiline.rows === 0) && (
          <input
            {...inputProps}
            placeholder={placeholder}
            {...css({ width }, InputStyle, styles.input, invalidInputStyle)}
            data-style="input"
          />
        )}

        {disabled === true && (
          <FontAwesomeIcon
            {...css(styles.iconDisabled)}
            icon={faLock}
            data-style="iconDisabled"
          />
        )}
        {!isValid && (
          <FontAwesomeIcon
            {...css(styles.iconInvalid)}
            icon={faExclamationCircle}
            data-style="iconInvalid"
          />
        )}
      </span>

      {!isValid && errorMessage && (
        <span {...css(styles.errorMessage)} data-style="errorMessage">
          {errorMessage}
        </span>
      )}
    </span>
  );
};
