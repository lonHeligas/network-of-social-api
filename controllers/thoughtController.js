const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models");

module.exports = {
  // * creates a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thoughtCurrent) => res.json(thoughtCurrent))
      .catch((err) => res.status(500).json(err));
  },
  // * get all thoughts
  getAllThoughts(req, res) {
    Thought.find()
      .then((allThoughts) => res.json(allThoughts))
      .catch((err) => res.status(500).json(err));
  },
  // * get a single thought by ID
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
    .select("-__v")
    .then(async (thought) =>
      !thought
        ? res.status(404).json({ message: `No Thoughts with that ID` })
        : res.json({
            thought,
          })
      )
      .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
  },
};
