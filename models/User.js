const { Schema, model } = require('mongoose');
const User = require('./User');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      requires: true,
      trim: true
    }
  },
  {
    email: {
      type: String,
      requires: true,
      unique: true,
      // must match valid email address
    }
  },
  {
    thoughts
  },
  {
    friends
  }
)

userSchema
  .virtual('friendCount')
  .get(function(){
    return this; // ! not finished
  })


const User = model('user', userSchema);

module.exports = User;