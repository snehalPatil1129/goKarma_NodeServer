module.exports = {
  authApi: "https://login.microsoftonline.com/common/oauth2/token",
  donorsApi:
    "https://gokarmaphase3.api.crm8.dynamics.com/api/data/v9.1/accounts?$select=name, new_constituenttype, _new_branch_value, new_email, new_mobilephone",
  prospectsApi:
    "https://gokarmaphase3.api.crm8.dynamics.com/api/data/v9.1/leads?$select=fullname, subject, mobilephone, emailaddress2",
  volunteersApi:
    "https://gokarmaphase3.api.crm8.dynamics.com/api/data/v9.1/new_volunteers?$select=new_name, _new_branch_value, new_constituentvolunteertype, new_mobilephone, new_email",
  beneficiariesApi:
    "https://gokarmaphase3.api.crm8.dynamics.com/api/data/v9.1/new_beneficiaries?$select=new_name, _new_branch_value, new_beneficiarytype_global, new_mobilephone"
};
