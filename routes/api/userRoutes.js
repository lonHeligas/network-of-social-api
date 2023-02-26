const router = require('express').Router();
// const User = require('../../models/User');

const {
  createUser,
  getAllUsers,  
  getSingleUser,  
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController');


// # api/users ?
router.route('/').post(createUser).get(getAllUsers);

// # api/users/:id
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);
 
// # api/users/userID/friends/:friendId
router.route('/:userId/friends/:friendId').put(addFriend).delete(deleteFriend);

module.exports = router;