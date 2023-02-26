const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true, 
      trim: true     
    },
    email: {
      type: String,
      required: true,
      match: /.+\@.+\..+/,
      // & holy crap this validation works!
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
  },
  {
    toJSON: {
      virtuals: true,
      },
      id: false,
  }  
);

userSchema
  .virtual('friendCount')
  // TODO Getter
  .get(function () {
    return `${this.friends.length}`
  })

const User = model('user', userSchema);

module.exports = User;



