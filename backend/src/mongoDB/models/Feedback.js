const mongoose = require("mongoose");
const { Schema } = mongoose;

const feedbackShema = new Schema({
  name: {
    type: String,
    required: true
  },
  comments: {
    type: String,
    required: true
  },
  disadvantages: {
    type: String,
    required: true
  },
  product_ID: {
    type: Schema.Types.ObjectId,
    required: true
  },
  advantages: {
    type: String,
    required: true
  },

  created: {
    type: Date,
    default: Date.now()
  }
});
module.exports = mongoose.model("feedback", feedbackShema, "Feedback");
