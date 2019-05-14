const express = require("express");
const router = express.Router();
const axios = require("axios");
const prospectsApi = require("../config/apiConfig").prospectsApi;

router.post("/", async (req, res) => {
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer  ${req.body.token}`,
    "OData-MaxVersion": "4.0",
    "OData-Version": "4.0"
  };
  await axios
    .get(prospectsApi, {
      headers: headers
    })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.status(401).send(err);
    });
});

module.exports = router;
