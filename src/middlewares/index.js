// ======== middleware func=========
const { JWTauth, roleAuth } = require("./authentication");
const { getChaced, setCache, delCache } = require("./cache");
// ======== generate obj ===========
const middleware = {
  JWTauth,
  roleAuth,
  getChaced,
};

// ======== module export ==========
module.exports = middleware;
