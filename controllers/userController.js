const User = require ('../models/User');

module.exports = {
  // // creates a new user
  createUser(req, res) {
    User.create(req.body) 
      .then((student) => res.json(student))
      .catch((err) => res.status(500).json(err));
  }
}



