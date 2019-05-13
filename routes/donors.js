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
      "https://gokarmaphase3.api.crm8.dynamics.com/api/data/v9.1/accounts?$select=name, new_constituenttype, _new_branch_value, new_email, new_mobilephone",
      {
        headers: headers
      }
    )
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
