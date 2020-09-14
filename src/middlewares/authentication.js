// =======core modules=========
const jwt = require("jsonwebtoken");

// =======models===============
const { Users } = require("../models");

// =======helpers==============
const { response } = require("../helpers");

// =======API_KEY==============
const API_KEY = process.env.API_KEY;

// ========JWT authentication=========
const JWTauth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      token = authHeader.split(" ")[1];
      const verified = jwt.verify(token, API_KEY);
      req.user = verified;
      next();
    } else {
      return response(res, 401, true, "Access denied!");
    }
  } catch (err) {
    if (err.message) return response(res, 401, true, err.message);
    return response(res, 401, true, err);
  }
};

// ========Role Auth====================
const roleAuth = async (req, res, next, role) => {
  try {
    const { id } = req.user;
    const User = await Users.findOne({ where: { id } });
    User.role === role ? next() : response(res, 401, true, "Access denied!");
  } catch (err) {
    return response(res, 401, true, err);
  }
};

// ========generate obj============
const auth = {
  JWTauth,
  roleAuth,
};

// ========module export============
module.exports = auth;
