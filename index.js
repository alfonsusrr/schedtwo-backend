"use strict";
const authJwt =
  require(".../middlewares/authJwt.js");
const verifySignUp =
  require(".../middlewares/verifySignUp.js");

module.exports = {
  authJwt,
  verifySignUp
};