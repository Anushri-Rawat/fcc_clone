const reducer = (state, action) => {
  switch (action.type) {
    case "START_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "END_LOADING":
      return {
        ...state,
        loading: false,
      };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "GET_ALL_COURSES":
      return { ...state, course: action.payload };
    case "UPDATE_ALERT":
      return { ...state, alert: action.payload };
    case "USER_LOGOUT":
      return {
        user: null,
        loading: "false",
        courses: JSON.parse(localStorage.getItem("fccCourses")) || null,
      };
    default:
      return { ...state };
  }
};
export default reducer;
