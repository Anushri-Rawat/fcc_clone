import axios from "axios";
const BASE_URL = "https://fcc-backend-9fq0.onrender.com";
export const getAllCourses = async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const url = `${BASE_URL}/api/course`;
    const response = await axios.get(url);
    dispatch({
      type: "GET_ALL_COURSES",
      payload: response.data,
    });
    localStorage.setItem("fccCourses", JSON.stringify(response.data));
  } catch (error) {
    console.log(error);
  }
};
