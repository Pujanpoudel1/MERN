const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // res.send("Hello World!");
  res.json({
    name: "Pujan",
  });
});
app.get("/home", function (rep, res) {
  res.send("This is home page");
});

app.get("/test", (req, res) => {
  res.send("This is a test page");
});

app.get("/about", function (req, res) {
  res.send("About World!");
});

app.listen(3000, function () {
  console.log("My first project for node js");
});
