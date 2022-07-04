const { Schema, model, Types } = require("mongoose");

const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reationBody: {
    type: String,
    required: [true, "Must have valid text"],
    maxlength: [280, "Cannot exceed 280 characters"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal),
  },
});

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: [true, "Text is required"],
    minlength: [1, "At least 1 character is needed"],
    maxlength: [280, "Cannnot exceed 280 characters"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal),
  },
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  reactions: [],
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
