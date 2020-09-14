// ===========modules===========
const Joi = require("joi");
const bcrypt = require("bcrypt");
// ===========helpers===========
const { response } = require("../helpers");
// =========function============
const validRegist = async (req, res, next) => {
  try {
    schema = Joi.object({
      email: Joi.string().min(6).required(),
      password: Joi.string().min(6).required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      return response(res, 400, true, error.details[0].message);
    } else {
      const { password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      req.body.role = 0;
      req.body = { ...req.body, password: hashedPassword };
      next();
    }
  } catch (err) {
    return response(res, 400, true, err);
  }
};

// ============validation Login==========
const validLogin = async (req, res, next) => {
  try {
    schema = Joi.object({
      email: Joi.string().min(6).required(),
      password: Joi.string().min(6).required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      return response(res, 400, true, error.details[0].message);
    } else {
      next();
    }
  } catch (err) {
    return response(res, 400, true, err);
  }
};

// ================validation TokenRefresh===========
const validRefresh = async (req, res, next) => {
  try {
    schema = Joi.object({
      tokenRefresh: Joi.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      return response(res, 400, 0, error.details[0].message);
    } else {
      next();
    }
  } catch (err) {
    return response(res, 400, 0, err);
  }
};

// ========create obj==========
const validations = {
  validRegist,
  validLogin,
  validRefresh,
};

// ========module export============
module.exports = validations;
