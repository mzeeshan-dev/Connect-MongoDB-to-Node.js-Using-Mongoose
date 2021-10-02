const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/zee")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Schema

const userlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: String,
  age: Number,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

// Model

const Userlist = new mongoose.model("Userlist", userlistSchema); // => Collection Creation
