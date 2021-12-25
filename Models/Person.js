const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
  },
  age: {
    type: Number,
  },
  favoriteFoods: {
    type: [String],
    default: [],
  },
});

module.exports = mongoose.model("person", PersonSchema);
