const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    city: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    strict: false,
  }
);
const userModel = mongoose.model("users", userSchema);

const postSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    device: { type: String, required: true },
    no_of_comments: { type: Number, required: true },
  },
  {
    strict: false,
  }
);
const postModel = mongoose.model("posts", postSchema);

module.exports = { userModel, postModel };
