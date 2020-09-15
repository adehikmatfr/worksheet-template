// =========core modules===========
const path = require("path"),
  express = require("express"),
  dotenv = require("dotenv"),
  bodyParser = require("body-parser"),
  cors = require("cors");

// ========dev modules==============
const morgan = require("morgan");

// ========core functions===========
dotenv.config();
const app = express(),
  public = path.join(__dirname, "public");

// ========routes navigator=========
const routeNavigations = require("./src/routes");

// ========core middlewares=========
app.use(express.static(public));
app.use(cors());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));
app.use(bodyParser.json());
app.use(process.env.BASE_ENDPOIN || "/api/v1", routeNavigations);

// =========dev middlewares=========
app.use(morgan("dev"));

// =========listen server===========
app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port : " + process.env.PORT || 3000);
  console.log("base endpoint : " + process.env.BASE_ENDPOIN || "/api/v1/");
  console.log("with mode : " + process.env.NODE_ENV);
});
require("./src/config/redis");
