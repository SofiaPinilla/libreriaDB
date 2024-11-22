const { Genre } = require("../models/index.js");

const GenreController = {
  async create(req, res) {
    try {
      const genre = await Genre.create(req.body);
      res.status(201).send({ message: "Genre successfully created", genre });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "There was a problem", error });
    }
  },
};

module.exports = GenreController;
