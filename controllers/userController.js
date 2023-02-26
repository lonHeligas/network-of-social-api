// const User = require ('../models/User');
const { ObjectId } = require("mongoose").Types;
const { User, Thought, Reaction } = require("../models");

module.exports = {
  // * creates a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // * get all users
  getAllUsers(req, res) {
    User.find()
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // * get a single user by ID
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: `No user with that id` })
          : res.json({
              user,
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // todo update a a single user by ID


  // ? delete a single user by ID Getting a 500 ISE but it IS deleting it.
  deleteUser(req, res){
    User.findOneAndDelete({ _id: req.params.userId })
    // console.log(userId)
      .then((user) =>
        !user 
          ? res.status(404).json({ message: 'That user ID does not exist'})
          : User.deleteOne({ _id })
      )
      .then(() => res.json({ message: 'User has been deleted. Have a nice day.'}))
      .catch((err) => res.status(500).json(err));
  }
};
