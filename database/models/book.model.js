//books,bookname,bookAuthor,bookPrice,

const bookModel = (sequelize, DataTypes) => {
  const Book = sequelize.define("Book", {
    bookName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bookAuthor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookGenre: {
      type: DataTypes.STRING,
    }
  })
  return Book
}

module.exports = bookModel
