const cracoModuleFederation = require('craco-module-federation');

module.exports = ({ env }) => ({
  devServer: {
    port: 3003,
  },
  plugins: [{
      plugin: cracoModuleFederation,
      options: { useNamedChunkIds:true }
    },
  ],
});