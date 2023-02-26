const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models");

module.exports = {

  // TODO creates a new thought Must add the User ID AS WELL AS the Username
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((User) =>
        !User
          ? res.status(404).json({
              message: "Thought created, but there is no user with that ID",
            })
          : res.json("Created the thought. Hooray!")
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // * get all thoughts
  getAllThoughts(req, res) {
    Thought.find()
      .then((allThoughts) => res.json(allThoughts))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err)
      });
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

  // *  update a a single thought by ID
  updateThought(req, res) {
    Thought.findOneAndUpdate({ _id: req.params.thoughtId }, req.body)
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: `No thought with that id` })
          : res
              .status(200)
              .json({ message: `This thought has been updated` })
      )
      .catch((err) => res.status(500).json(err));
  },

  // * delete a single thought by ID
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((deletedThought) => {
        // console.log(deletedThought);
        return !deletedThought
          ? res.status(404).json({
              message: "Ye cannot delete ye thought. Ye thought does not exist.",
            })
          : res
              .status(200)
              .json({ message: "Thought has been deleted. Have a nice day." });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json(err);
      });
  },




};


