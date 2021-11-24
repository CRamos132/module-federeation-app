const cracoModuleFederation = require('craco-module-federation');

module.exports = ({ env }) => ({
  devServer: {
    port: 3001,
  },
  plugins: [{
      plugin: cracoModuleFederation,
      options: { useNamedChunkIds:true }
    },
  ],
});