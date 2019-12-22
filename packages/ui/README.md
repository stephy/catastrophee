# @catastrophee/ui

_@catastrophee/ui_ is a set of React components. These componenets are currently in beta. _Use at your own risk_

# Using @catastrophee/ui

## Install

Installing uicommon on your project

```
npm install --save @catastrophee/ui
```

or

```
yarn add @catastrophee/ui
```

## Import

```
import { Checkbox } from '@catastrophee/ui';
```

## Use

```
<Checkbox ...props />
```

Each component has its own README, please refer to those for more information.

## Need to overwrite styles?

Ideally, you shouldn't **need** to overwrite styles. But if you must, each component takes a prop called **style**. The style prop is _typed_.
To know the key you need to use to replace the style, right click on your component and look for _data-style_ attribute on the html tag. For instance, if **data-style="list"** you can replace the background color with:
`<Component style={{ list: { backgroundColor: "green"}}}>`

# Developing

## Storybook

To run examples:
From project root folder:

```
yarn install
```

```
yarn run storybook
```

_Note_ Stories are availables in the files with .stories extensions

## Rules for Styling Components

- For styling, use glamor.
- Always sort your keys.
- Always put styles in the same file. Usually right after imports, on top. Please don't create one file for style and one file for component. Each component should be one file, easy to use. Default styles should be called defaultStyles.
- Always allow style overwrites. For instance, each component should start with `const styles = merge({}, defaultStyles, style);` and components should always take a style prop.
- Every HTML tag should contain a data-style attribute with the key for that style. If the style has no styles, still create the key but leave it empty
- For all styles add proper typing. For instance, let say your component looks like this:

  ```js
  <div>
    <span>{title}</span>
  </div>
  ```

  Once you add styles it should look like this

  ```js
  const defaultStyles = {
    container: {},
    title: {},
  };
  ....

  <div {...css(defaultStyles.container)}>
    <span {...css(defaultStyles.title)}>{title}</span>
  </div>
  ```

  Once you allow overwrite styles it should look like this

  ```js
  const defaultStyles = {
    container: {},
    title: {},
  };

  const styles = merge({}, defaultStyles, props.style);
  render() {
    <div {...css(styles.container)}>
      <span {...css(styles.title)}>{title}</span>
    </div>
  }
  ```

Let people know how to overwrite styles

```jsx
const defaultStyles = {
  container: {},
  title: {},
};
interface StylesType {
  container: CssPropertyType,
  title: CssPropertyType,
}
....
const styles = merge({}, defaultStyles, props.style);
render() {
  <div {...css(styles.container)} data-style="container">
    <span {...css(styles.title)} data-style="title">{title}</span>
  </div>
}
```

Please take a look at existing components for examples

## Publishing @catastrophee/ui

### @catastrophee/ui

```
cd packagaes/ui
```

```
yarn install
```

```
yarn publish
```
