const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models");

module.exports = {
  // ^ creates a new thought but also see below
  createThought(req, res) {
    Thought.create(req.body)    
      .then((thought) => res.json(thought))
      .catch((err) => res.status(500).json(err));
  },



  // TODO creates a new thought Must add the User ID AS WELL AS the Username
  createThought(req, res) {
    Thought.create(req.body)    
      .then((thought) => 
       res.json(thought))
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
