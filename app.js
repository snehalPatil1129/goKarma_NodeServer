const express = require('express');
const cors = require("cors");
const auth = require("./routes/auth");
const accounts = require("./routes/accounts");

module.exports = function(app) {
    app.use(express.json());
    app.use(cors());

    //routes
    app.use("/login", auth);
    app.use("/leads", accounts);
}