// =========core modules=========
const bcrypt = require("bcrypt"),
  jwt = require("jsonwebtoken");

// =========models===============
const { Users } = require("../models");

// =========helpers==============
const { response, setCache, delCache } = require("../helpers");

// =========Keys=================
const API_KEY = process.env.API_KEY,
  API_KEY_REFRESH = process.env.API_KEY_REFRESH;

// =========Registy==============
const register = async (req, res) => {
  try {
    const { email } = req.body;
    const User = await Users.findOne({
      where: { email },
    });
    if (User) return response(res, 409, true, "Email already exists");
    const userCreated = await Users.create(req.body);
    const token = jwt.sign({ id: userCreated.id }, API_KEY, {
      expiresIn: "5m",
    });
    const tokenRefresh = jwt.sign({ id: userCreated.id }, API_KEY_REFRESH);
    return response(res, 200, false, { email, token, tokenRefresh });
  } catch (err) {
    return response(res, 500, true, "ok");
  }
};

// ========Login==================
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const User = await Users.findOne({
      where: { email },
    });
    if (!User) return response(res, 409, true, "wrong email");
    const validPass = await bcrypt.compare(password, User.password);
    if (!validPass) return response(res, 409, true, "wrong password");
    const token = jwt.sign({ id: User.id }, API_KEY, {
      expiresIn: "5m",
    });
    const tokenRefresh = jwt.sign({ id: User.id }, API_KEY_REFRESH);
    return response(res, 200, false, { email, token, tokenRefresh });
  } catch (err) {
    return response(res, 500, true, err);
  }
};

// ========tokenRefresh============
const getToken = async (req, res) => {
  try {
    const { tokenRefresh } = req.body;
    const verified = jwt.verify(tokenRefresh, API_KEY_REFRESH);
    if (verified < 0) return response(res, 403, true, "Forbidden");
    const token = jwt.sign({ id: verified }, API_KEY, {
      expiresIn: "5m",
    });
    return response(res, 200, false, { token });
  } catch (err) {
    if (err.message) return response(res, 401, true, err.message);
    return response(res, 500, true, err);
  }
};

// ========getall user===========
const getUsers = async (req, res) => {
  try {
    const key = "User";
    const users = await Users.findAll();
    await delCache(key);
    await setCache(key, users);
    return response(res, 200, false, users);
  } catch (err) {
    return response(res, 500, true, err);
  }
};
// ========generate obj============
const auth = {
  register,
  login,
  getToken,
  getUsers,
};

// ========module export============
module.exports = auth;
