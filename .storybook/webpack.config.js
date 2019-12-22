const path = require("path");
const { resolve } = path;
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader")
      },
      // Optional
      {
        loader: require.resolve("react-docgen-typescript-loader")
      }
    ]
  });

  config.resolve.extensions.push(".ts", ".tsx");
  config2 = {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        "@catastrophee/styles": resolve(__dirname, "../packages/styles/src"),
        "@catastrophee/models": resolve(__dirname, "../packages/models/src"),
        "@catastrophee/ui": resolve(__dirname, "../packages/ui/src")
      }
    }
  };
  return config2;
};
