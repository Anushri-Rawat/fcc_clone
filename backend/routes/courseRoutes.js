const express = require("express");
const {
  createCourse,
  getAllCourses,
} = require("../controllers/courseController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").post(createCourse).get(getAllCourses);
module.exports = router;
