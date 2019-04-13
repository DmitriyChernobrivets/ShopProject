const mongoose = require("mongoose");

const { Schema } = mongoose;

const usersSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: true
  },
  lastName: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  gender: {
    type: String,

    lowercase: true,
    validate: {
      validator: value => /male|female|transe/.exec(value),
      message: "Inccorect gender value"
    }
  },
  age: {
    type: Number,
    min: 11,
    max: 65
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", usersSchema);
