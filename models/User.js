const { Schema, model } = require('mongoose');
const User = require('./User');

const userSchema = new mongoose.Schema(
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
      match: [/.+@.+\..+/, 'Must match an email address.'],
    }
  },
  {
    thoughts: [
      {
        type: Schema.Types.ObjectdId,
        ref: 'Thought',
      }
    ],  
    friends: [
      {
        type: Schema.Types.ObjectdId,
        ref: 'User',
      }
    ]
  }
)

userSchema
  .virtual('friendCount')
  .get(function(){
    // todo return =something.length; 
    // ! not finished
  })


const User = mongoose.model('user', userSchema);

module.exports = User;
