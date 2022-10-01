const { default: mongoose } = require("mongoose");

// require oomgoose and create a Schema, which define the Query parameters
const QuerySchema = new mongoose.Schema({
  category: {
    type: String,
    enum: [
      "Green Card",
      "Citizenship",
      "Employment",
      "Family Reunification",
      "TPS",
      "Asylum",
    ],
    default: "Select One",
    required: [true, "Please choose one from category"],
    trim: true,
  },

  question: {
    type: String,
    required: [true, "Please write your question"],
    trim: true,
    maxlength: [100, "questions cannot acceed 100 characters"],
  },

  answered: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: String,
    required: [true, "Please login first"],
    // type: mongoose.Types.ObjectId
  },
  response: {
    type: String,
  },
  date: {
    type: Date,
    default: () => {
      return new Date();
    },
    trim: true,
  },
});

module.exports = mongoose.model("Query", QuerySchema);
