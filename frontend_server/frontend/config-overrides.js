const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  addWebpackModuleRule({
    test: /\.html$/i,
    loader: 'raw-loader',
  }),
);
