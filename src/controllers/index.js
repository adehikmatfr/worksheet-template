// ========controllers=========
const { login, register, getToken, getUsers } = require("./auth");

// ========generate obj========
const controllers = {
  login,
  register,
  getToken,
  getUsers,
};

// ========module export======
module.exports = controllers;
