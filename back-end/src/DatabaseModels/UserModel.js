const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  checklist: [
    {
      part1: {type: String},
      part2: {type: String},
      part3: {type: String},
      createdAt: {
        type: Date,
        default: Date.now()
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

// export model user with UserSchema
module.exports = mongoose.model("User", UserSchema);