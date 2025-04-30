const express = require("express");
const app = express();
require("./database/connection")
app.get("/", (req, res) => {
  // res.send("Hello World!");
  res.json({
    name: "Pujan",
  });
});
app.get("/home", function (req, res) {
  res.send("This is home page");
});

app.get("/test", (req, res) => {
  res.send("This is a test page");
});

app.get("/about", function (req, res) {
  res.send("About World!");
});

app.get("/books", function (req, res) {
  //logic to fetch book sfrom database
  res.json({
    message: "books fetched successfully",
  });
});

app.post("/books", function (req, res) {
  res.json({
    message: "boooks added successfully",
  });
});

app.delete("/books/:id", function (req, res) {
  res.json({
    message: "books deleted successfully.",
  });
});

app.patch("/books/:id", function (req, res) {
  res.json({
    message: "books updated successfully.",
  });
});

app.listen(3000, function () {
  console.log("My first project for node js");
});
