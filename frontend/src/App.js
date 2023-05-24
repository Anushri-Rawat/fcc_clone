import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import SignInpage from "./pages/SignInpage";
import { useContext, useEffect } from "react";
import UserContext from "./context/UserContext";
import CoursePage from "./pages/CoursePage";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const {
    state: { user, alert },
    dispatch,
  } = useContext(UserContext);

  useEffect(() => {
    if (alert && alert.open) {
      toast(alert.message, { type: alert ? alert.severity : "success" });
      dispatch({
        type: "UPDATE_ALERT",
        payload: { ...alert, open: false },
      });
    }
  }, [alert?.open]);

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="d-flex flex-column align-items-center">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/learn" element={<CoursePage />} />
          <Route path="/signin" element={<SignInpage />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </main>
    </>
  );
}

export default App;
