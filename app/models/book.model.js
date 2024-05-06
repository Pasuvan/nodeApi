module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define("book", {
    book_title: {
      type: Sequelize.STRING
    },
    book_description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    },
    createdAt: {
      field: 'created_at',
      type: Sequelize.DATE,
    },
    updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE,
    }
  });

  return Book;
};
