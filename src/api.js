const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  var p="Hello Harpreet"
  res.json(p);
});

app.use('/.netlify/functions/api', router);

module.exports = app;
module.exports.handler = serverless(app);
