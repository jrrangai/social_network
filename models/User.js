const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
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
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// virtual for retrieving user's friends array
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// create model
const User = model("User", UserSchema);

// export model
module.exports = User;
