var cssnext = require('postcss-cssnext');
var theme = require('../src/theme');

module.exports = [
  cssnext({
    features: {
      customProperties: {
        variables: theme
      }
    }
  })
];
