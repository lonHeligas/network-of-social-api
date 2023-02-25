const User = require ('../models/User');

module.exports = {
  getUser(req, res) {
    User.find()
  },

  createUser(req, res)  {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  }
}


module.exports = router;