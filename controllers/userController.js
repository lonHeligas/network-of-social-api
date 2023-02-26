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
  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, req.body)
      .then((user) => 
        !user
          ? res.status(404).json({ message: `No user with that id` })
          : res
              .status(200)
              .json({ message: `This user's information has been updated` })
      )
      .catch((err) => res.status(500).json(err));
  },

  // * delete a single user by ID
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((deletedUser) => {
        // console.log(deletedUser);
        return !deletedUser
          ? res
              .status(404)
              .json({
                message: "Ye cannot delete ye user. Ye user does not exist.",
              })
          : res
              .status(200)
              .json({ message: "User has been deleted. Have a nice day." });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json(err);
      });
  },
};
