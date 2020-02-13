import { configure } from "@storybook/react";
import { addDecorator } from "@storybook/react";
// automatically import all files ending in *.stories.tsx
import { addParameters } from "@storybook/react";
import { themes } from "@storybook/theming";
import { withInfo } from "@storybook/addon-info";
import { addReadme } from "storybook-readme";

addDecorator(withInfo);

const theme = Object.assign({}, themes.dark, {
  appContentBg: "#0F0F0F"
});
// Option defaults.
addParameters({
  options: {
    name: "Catastrophee",
    theme
  }
});

addDecorator(addReadme);
const req = require.context("../stories", true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);

// addDecorator(
//   withInfo({
//     styles: {
//       header: {
//         h1: {
//           marginRight: '20px',
//           fontSize: '25px',
//           display: 'inline',
//         },
//         body: {
//           paddingTop: 0,
//           paddingBottom: 0,
//         },
//         h2: {
//           display: 'inline',
//           color: '#999',
//         },
//       },
//       infoBody: {
//         backgroundColor: '#eee',
//         padding: '0px 5px',
//         lineHeight: '2',
//       },
//     },
//     inline: true,
//     source: false,
//   })
// );
