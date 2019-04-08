const mongoose = require("mongoose");
const { Schema } = mongoose;

const PCsSchema = new Schema({
  title: String,

  description: {
    display: String,
    processor: String,
    memory: String
  },
  hot: Boolean,
  price: Number,
  rating: Number,
  forSale: Boolean,
  created: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model("PCs", PCsSchema, "PCs");
