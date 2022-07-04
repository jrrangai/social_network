const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "Username is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "A valid email is required"],
    unique: true,
    match: /.+@.+\..+/,
  },
  thoughts: [],
  friends: [],
});

// create model
const User = model("User", UserSchema);

// export model
module.exports = User;
