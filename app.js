const express = require("express");
const { fetchBooks, addBook, deleteBook, editBook } = require("./controllers/bookController");
const bookRoute = require("./routes/bookRoute")

const app = express();
require("./database/connection");
app.use(express.json()); //ratta handine for post method
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

// app.get("/about",fetchBooks );

// app.post("/books", addBook);

// app.delete("/books/:id", deleteBook );

// app.patch("/books/:id", editBook);
app.use("/books", bookRoute)

app.listen(3000, function () {
  console.log("My first project for node js");
});
