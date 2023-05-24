import axios from "axios";
const BASE_URL = "https://fcc-backend-9fq0.onrender.com";

export const register = async (data, dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const url = `${BASE_URL}/api/users`;
    const response = await axios.post(url, data);
    console.log(response.data);
    dispatch({
      type: "SET_USER",
      payload: response.data,
    });
    dispatch({
      type: "UPDATE_ALERT",
      payload: {
        open: true,
        severity: "success",
        message: "User successfully registered",
      },
    });
    localStorage.setItem("fccUser", JSON.stringify(response.data));
  } catch (err) {
    dispatch({
      type: "UPDATE_ALERT",
      payload: {
        open: true,
        severity: "error",
        message: err.response.data.message,
      },
    });
  }
};

export const login = async (data, dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const url = `${BASE_URL}/api/users/login`;
    const response = await axios.post(url, data);
    dispatch({
      type: "SET_USER",
      payload: response.data,
    });
    dispatch({
      type: "UPDATE_ALERT",
      payload: {
        open: true,
        severity: "success",
        message: "User successfully login",
      },
    });
    localStorage.setItem("fccUser", JSON.stringify(response.data));
  } catch (err) {
    dispatch({
      type: "UPDATE_ALERT",
      payload: {
        open: true,
        severity: "error",
        message: err.response.data.message,
      },
    });
  }
};

export const logoutFunc = (dispatch) => {
  localStorage.removeItem("fccUser");
  dispatch({ type: "USER_LOGOUT" });
};
