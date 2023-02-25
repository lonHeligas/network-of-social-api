const router = require('express').Router();
// const User = require('../../models/User');

const {
  createUser,
  getAllUsers,  
  getSingleUser,  
} = require('../../controllers/userController');


// # api/users ?
router.route('/').post(createUser).get(getAllUsers);

// # api/users/:id
router.route('/:id', getSingleUser);


module.exports = router;