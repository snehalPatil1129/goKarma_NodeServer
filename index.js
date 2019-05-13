const express = require("express");
const app = express();

require("./app")(app);

const port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log(`Server started at port ${port}`);
});
