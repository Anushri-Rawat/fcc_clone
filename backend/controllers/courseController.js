const asyncHandler = require("express-async-handler");
const Course = require("../modals/courseModal");

const getAllCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find({});
  if (courses.length <= 0) {
    res.status(400);
    throw new Error("No courses yet posted");
  } else {
    res.status(200).json(courses);
  }
});

const createCourse = asyncHandler(async (req, res) => {
  const { title, duration } = req.body;
  const courseExists = await Course.findOne({ title });

  if (courseExists) {
    res.status(404);
    throw new Error(
      "Course already exists! Please edit the same course or try different course name"
    );
  }
  const course = await Course.create({ title, duration });
  res.status(201).json(course);
});

module.exports = { getAllCourses, createCourse };
