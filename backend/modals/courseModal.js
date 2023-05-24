const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const courseSchema = new mongoose.Schema(
  {
    title: String,
    duration: Number,
  },
  { timestamps: true }
);

const Course = mongoose.model("course", courseSchema);
module.exports = Course;
