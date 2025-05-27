const { where } = require("sequelize");
const { books } = require("../database/connection");

exports.fetchBooks = async function (req, res) {
  // function (req, res) {
  //   res.send("About World!");
  // });

  // app.get("/books",

  //logic to fetch books from database
  const datas = await books.findAll(); //select * from books
  res.json({
    message: "books fetched successfully",
    datas, // datas : datas , keys rw values ko name same chha bhne sidhai datas lekhne
  });
};

exports.addBook = async function (req, res) {
  // console.log(req.body)
  // const bookName = req.body.bookName
  // const bookPrice = req.body.bookPrice
  // console.log(req.body);
  const { bookName, bookPrice, bookAuthor, bookGenre } = req.body;
  // console.log(bookName);
  // console.log(bookPrice);
  await books.create({
    bookName: bookName, //columnName : value
    bookPrice: bookPrice,
    bookAuthor: bookAuthor,
    bookGenre: bookGenre,
  });
  res.json({
    message: "boooks added successfully",
  });
};

exports.deleteBook = async function (req, res) {
  const id = req.params.id;
  await books.destroy({
    where: {
      id: id,
    },
  });
  res.json({
    message: "books deleted successfully.",
  });
};

exports.editBook = async function (req, res) {
  const id = req.params.id;
  const { bookName, bookPrice, bookAuthor, bookGenre } = req.body;
  await books.update(
    {
      bookName: bookName,
      bookPrice: bookPrice,
      bookAuthor: bookAuthor,
      bookGenre: bookGenre,
    },
    {
      where: {
        id: id,
      },
    }
  );
  res.json({
    message: "books updated successfully.",
  });
};

exports.singleFetchBook = async function (req, res) {
  const id = req.params.id;
  const datas = await books.findByPk(id);
  res.json({
    message: "Single book fetched successfully.",
    datas,
  });
};

// module.exports = { fetchBooks,addBook,deleteBook,editBook}
