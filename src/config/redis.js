const redis = require("redis"),
  client = redis.createClient();

client.on("error", function (err) {
  console.log("Error " + err);
});

console.log("Connection is establishing now...");
module.exports = client;
