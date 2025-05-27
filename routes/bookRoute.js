const { fetchBooks, addBook, deleteBook, editBook, singleFetchBook } = require("../controllers/bookController")

const router = require("express").Router()

router.route("/books").get(fetchBooks)
router.route("/books").post(addBook)
router.route("/books/:id").delete(deleteBook).patch(editBook).get(singleFetchBook)



module.exports = router