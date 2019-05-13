const express = require("express");
const cors = require("cors");
const auth = require("./routes/auth");
const accounts = require("./routes/accounts");
const prospects = require("./routes/prospects");
const donors = require("./routes/donors");
const beneficiaries = require("./routes/beneficiaries");
const volunteers = require("./routes/volunteers");

module.exports = function(app) {
  app.use(express.json());
  app.use(cors());

  //routes
  app.use("/login", auth);
  app.use("/leads", accounts);
  app.use("/prospects", accounts);
  app.use("/donors", donors);
    app.use("/beneficiaries", beneficiaries);
    app.use("/volunteers", volunteers);
};

