// const deps = require("./package.json").dependencies;

module.exports = {
  name: "app1",
  remoteType: 'var',
  exposes: {
    "./App": "./src/App",
  },
  filename: "remoteEntry.js",
  shared: {}
};