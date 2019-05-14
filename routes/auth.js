const express = require("express");
const router = express.Router();
const axios = require("axios");
const config = require("../config/microsoft").microsoftConfig;
const headers = require("../config/microsoft").microsoftHeaders;
const authApi = require("../config/apiConfig").authApi;

router.get("/", async (req, res) => {
  await axios
    .post(authApi, config, {
      headers: headers
    })
    .then(response => {
      res.json({ token: response.data.access_token });
    })
    .catch(err => res.status(401).send(err));
});

module.exports = router;
