const express = require("express");
const router = express.Router();
const axios = require("axios");
const donorsApi = require("../config/apiConfig").donorsApi;

router.post("/", async (req, res) => {
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer  ${req.body.token}`,
    "OData-MaxVersion": "4.0",
    "OData-Version": "4.0"
  };
  await axios
    .get(donorsApi, {
      headers: headers
    })
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
