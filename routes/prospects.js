const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/", async (req, res) => {
  const headers = {
    Accept: "application/json",
    Authorization: `Bearer  ${req.body.token}`,
    "OData-MaxVersion": "4.0",
    "OData-Version": "4.0"
  };
  await axios
    .get(
      "https://gokarmaphase3.api.crm8.dynamics.com/api/data/v9.1/leads?$select=fullname, subject, mobilephone, emailaddress2",
      {
        headers: headers
      }
    )
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.status(401).send(err);
    });
});

module.exports = router;
