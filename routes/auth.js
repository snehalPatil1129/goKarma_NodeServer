const express = require("express");
const router = express.Router();
const axios = require("axios");
const config = require("../config/microsoft").microsoftConfig;
const headers = require("../config/microsoft").microsoftHeaders;

router.get("/", async (req, res) => {
  await axios
    .post("https://login.microsoftonline.com/common/oauth2/token", config, {
      headers: headers
    })
    .then(response => {
      res.json({ token: response.data.access_token });
    })
    .catch(err => res.status(401).send(err));
});

module.exports = router;
