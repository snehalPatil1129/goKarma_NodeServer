const express = require("express");
const router = express.Router();
const axios = require("axios");
const querystring = require("querystring");
const volunteersApi = require("../config/apiConfig").volunteersApi;

router.post("/", async (req, res) => {
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer  ${req.body.token}`,
    "OData-MaxVersion": "4.0",
    "OData-Version": "4.0"
  };
  await axios
    .get(volunteersApi, {
      headers: headers
    })
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      res.status(401).send(err);
    });
});

module.exports = router;
