const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,      
    },
    email: {
      type: String,
      required: true,
      match: /.+\@.+\..+/,
      // ^ holy crap this validation works!
      unique: true
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      }
    ]
  }
)

const User = model('user', userSchema);

module.exports = User;



