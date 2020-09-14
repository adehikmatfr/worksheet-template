// ============modules========
const express = require("express");

// ============Route==========
const Route = express.Router();

// ===========validation=========
const {
  validLogin,
  validRegist,
  validRefresh,
} = require("../validations/auth");

// ===========controllers=====
const { register, login, getToken } = require("../controllers");

//============middleware======
// const { roleAuth } = require("../middlewares");

// ===========http method=====
Route.post("/register", validRegist, register)
  .post("/login", validLogin, login)
  .post("/token", validRefresh, getToken);

// ===========module export===
module.exports = Route;
