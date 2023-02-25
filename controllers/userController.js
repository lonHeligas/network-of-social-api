// const User = require ('../models/User');
const { ObjectId } = require('mongoose').Types;
const User = require('../models');

module.exports = {
  // * creates a new user
  createUser(req, res) {
    User.create(req.body) 
      .then((student) => res.json(student))
      .catch((err) => res.status(500).json(err));
  },
  // * get all users (this one is the only one that works)
  getAllUsers(req, res) {
    User.find() 
      .then((student) => res.json(student))
      .catch((err) => res.status(500).json(err));
  },
  // * get a single user
  getSingleUser(req, res) {    
    User.findOne( {_id: req.params.userId} ) 
      .select ('-__v')
      .then(async (user) =>
        !user        
          ? res.status(404).json({ message: `No user with that id of`})
          
          : res.json({
              user,
          })
    )    
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
  }
  
  
}



