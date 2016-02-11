require.ensure(["path/to/a", "path/to/b"], function(require) {
  var a = require("path/to/a");
  // ...
});