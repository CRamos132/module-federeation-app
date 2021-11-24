const deps = require("./package.json").dependencies;

module.exports = {
  name: "app1",
  remoteType: 'var',
  exposes: {
    "./App": "./src/App",
  },
  filename: "remoteEntry.js",
  shared: {
    ...deps,
    react: {
      eager: true,
      singleton: true,
      requiredVersion: deps.react,
    },
    "react-dom": {
      eager: true,
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};