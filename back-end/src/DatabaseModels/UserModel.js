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
  checklists: [
    {
      step1: [{ type: String }],
      step2: [{ type: String }],
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
