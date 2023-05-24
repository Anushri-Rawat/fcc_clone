import { createContext, useReducer } from "react";
import reducer from "./reducer";

const UserContext = createContext();

const initialState = {
  user: JSON.parse(localStorage.getItem("fccUser")) || null,
  loading: "false",
  courses: JSON.parse(localStorage.getItem("fccCourses")) || null,
  alert: { open: false, severity: "info", message: "" },
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
