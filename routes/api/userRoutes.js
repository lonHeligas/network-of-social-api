const router = require('express').Router();
const User = require('../../models/User');

const {
  createUser,  
} = require('../../controllers/userController');

 router.post('/', createUser);


module.exports = router;