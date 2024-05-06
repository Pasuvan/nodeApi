const db = require("../models");
const Book = db.books;
const Op = db.Sequelize.Op;

// Retrieve all book from the database.
exports.getAllBooks = (req, res) => {
  const book_title = req.query.book_title;
  var condition = book_title ? { book_title: { [Op.like]: `%${book_title}%` } } : null;
  Book.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

