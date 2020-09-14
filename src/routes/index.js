// ============modules========
const express = require("express");
const fs = require("fs");
const path = require("path");
// ============router========
const router = express.Router();
// ============definition subrouter=====
const subRouters = [];
// ============function get all subrouter====
const getAllSubroutes = (dir) => {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      getAllSubroutes(fullPath);
    } else {
      if (fullPath !== __filename) {
        subRouters.push(require(fullPath));
      }
    }
    return subRouters;
  });
};
// =========call function======
getAllSubroutes(__dirname);
// =========use subrouter======
router.use(subRouters);
// =========export module======
module.exports = router;
