const client = require("../config/redis");

const setCache = async (key, data) => {
  const result = client.set(key, JSON.stringify(data));
  result
    ? console.log("cacheing success key " + key)
    : console.log("cacheing falid");
};

const delCache = async (key) => {
  const result = client.del(key);
  result
    ? console.log("cacheing delete success key " + key)
    : console.log("cacheing delete falid");
};

module.exports = {
  setCache,
  delCache,
};
