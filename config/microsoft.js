const querystring = require("querystring");

module.exports = {
  microsoftConfig: querystring.stringify({
    client_id: "2ad88395-b77d-4561-9441-d0e40824f9bc",
    username: "admin@espldevelopment.onmicrosoft.com",
    password: "espl@2019",
    resource: "https://gokarmaphase3.crm8.dynamics.com",
    grant_type: "password"
  }),
  microsoftHeaders: {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json"
  }
};
