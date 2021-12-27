/*
    Title: Utilities
    Description: Utilities related things
    Author: Fuad Hasan
    Date: 25/12/2021
*/

// dependencies

const crypto = require("crypto");
const environments = require('../helpers/environments')

// scaffolding

const utilities = {};

utilities.parseJSON = (jsonString) => {
  let output;

  try {
    output = JSON.parse(jsonString);
  } catch (error) {
    output = {};
  }
  return output;
};

// hash string
utilities.hash = (str) => {
  if (typeof str === "string" && str.length > 0) {
    const hash = crypto
    .createHmac('sha256', environments.secretKey)
    .update(str)
    .digest('hex')
    return hash;
  }
  return false;
};

module.exports = utilities;
