const hooks = require('hooks');

// @todo we need to authenticate and logout before and after each test.
hooks.beforeEachValidation(function (transaction) {
  //hooks.log('before each validation');  
});