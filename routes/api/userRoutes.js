const router = require('express').Router();
// const User = require('../../models/User');

const {
  createUser,
  getAllUsers,  
  getSingleUser,  
  updateUser,
  deleteUser,
} = require('../../controllers/userController');


// # api/users ?
router.route('/').post(createUser).get(getAllUsers);

// # api/users/:id
router.route('/:userId').get(getSingleUser).delete(deleteUser);


module.exports = router;