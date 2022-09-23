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

module.exports = app;
