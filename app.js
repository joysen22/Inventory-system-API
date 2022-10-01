const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

//  Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res, next) => {
  res.status(200).send("server is ruuning");
});
// Routers & routes
app.use("/api/v1/manager", require("./Routers/ManagerRoute"));
app.use("/api/v1/brand", require("./Routers/BrandRoute"));
module.exports = app;
