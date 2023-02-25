// const User = require ('../models/User');
const { ObjectId } = require('mongoose').Types;
const { User } = require('../models');

module.exports = {
  // // creates a new user
  createUser(req, res) {
    User.create() 
      .then((student) => res.json(student))
      .catch((err) => res.status(500).json(err));
  },
  // // get all users
  getAllUsers(req, res) {
    User.find() 
      .then((student) => res.json(student))
      .catch((err) => res.status(500).json(err));
  },
  // // get a user
  getSingleUser(req, res) {
    User.findOne( {_id: req.params.id} ) 
      .select ('-__v')
      .then((student) => res.json(student))
      .catch((err) => res.status(500).json(err));
  }
  
  
}



