const client = require("../config/redis");
const { response } = require("../helpers");

const getChaced = async (req, res, next) => {
  console.log(req.headers);
  const { redis_key } = req.headers;
  if (!redis_key) return response(res, 400, true, "wrong redis key !");
  await client.get(redis_key, (err, reply) => {
    if (err) return response(res, 500, true, "redis is wrong !");
    if (reply == null) next();
    return response(res, 200, false, JSON.parse(reply));
  });
};

module.exports = {
  getChaced,
};
