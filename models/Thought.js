const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280    
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  username: {
    type: String,
    required: true
  },

  // reactions: []
  

})

const Thought = mongoose.model('Thought', thoughtSchema);

/* `thoughtText`
  * String
  * Required
  * Must be between 1 and 280 characters

* `createdAt`
  * Date
  * Set default value to the current timestamp
  * Use a getter method to format the timestamp on query

* `username` (The user that created this thought)
  * String
  * Required

* `reactions` (These are like replies)
  * Array of nested documents created with the `reactionSchema`
  * 
  * 
  * *
  */