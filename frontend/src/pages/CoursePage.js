import React, { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import { getAllCourses } from "../actions/courseActions";
import { useNavigate } from "react-router-dom";

const CoursePage = () => {
  const {
    state: { user, courses },
    dispatch,
  } = useContext(UserContext);
  const navigate = useNavigate();

  let images = require.context("../images", true);

  useEffect(() => {
    if (!user) navigate("/");
    if (!courses) getAllCourses(dispatch);
  }, [user, dispatch, courses]);

  return (
    <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">
      <h1 className="text-center">Welcome back,{user?.name}</h1>
      <p className="blockquote">
        <q>
          We can only see a short distance ahead, but we can see plenty there
          that needs to be done.
        </q>
        <footer className="quote-author blockquote-footer">
          <cite>Alan Turing</cite>
        </footer>
      </p>
      <ul>
        {courses &&
          courses.map((item, i) => (
            <li key={i} className="d-flex align-items-center gap-3 link-btn">
              <img
                src={images(`./course${i + 1}.svg`)}
                alt={item.title}
                style={{ width: "50px", height: "55px" }}
              />
              {item.title} ({item.duration} hours)
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CoursePage;
