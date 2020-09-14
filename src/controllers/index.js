// ========controllers=========
const { login, register, getToken } = require("./auth");

// ========generate obj========
const controllers = {
  login,
  register,
  getToken,
};

// ========module export======
module.exports = controllers;
