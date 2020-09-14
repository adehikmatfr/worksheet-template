// ======== middleware func=========
const { JWTauth, roleAuth } = require("./authentication");

// ======== generate obj ===========
const middleware = {
  JWTauth,
  roleAuth,
};

// ======== module export ==========
module.exports = middleware;
