const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const connectDB = require("./config/db");
const cors = require("cors");
const {
  notFoundHandler,
  errorHandler,
} = require("./middleware/errorMiddleware");
const app = express();
const userRoutes = require("./routes/userRoutes");
const courseRoutes = require("./routes/courseRoutes");

app.use(express.json());
app.use(cors());

connectDB();

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}
app.get("/", (req, res) => {
  res.json("Hi everyone!!");
});

app.use("/api/users", userRoutes);
app.use("/api/course", courseRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server running on port 5000");
});
