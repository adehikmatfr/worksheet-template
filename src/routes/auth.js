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
const { sendEmail } = require("../helpers");
// ===========http method=====
Route.post("/register", validRegist, register)
  .post("/login", validLogin, login)
  .post("/token", validRefresh, getToken)
  .get("/test", async (req, res) => {
    await sendEmail({
      email: "aalolxyz@gmail.com",
      from: "adehikmatfr",
      subject: "test",
    });
    res.send("ok");
  });

// ===========module export===
module.exports = Route;
