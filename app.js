const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/home", function (res, res) {
  res.send("This is home page");
});

app.get("/about", function (req, res) {
  res.send("About World!");
});

app.listen(3000, function () {
  console.log("My first project for node js");
});
