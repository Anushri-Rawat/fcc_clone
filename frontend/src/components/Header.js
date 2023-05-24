import React, { useContext } from "react";
import logo from "../images/fcc_primary_large.jpg";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { logoutFunc } from "../actions/userActions";

const Header = () => {
  const {
    state: { user },
    dispatch,
  } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <nav>
      <div className="d-none d-md-block">
        <div className="search-bar">
          <input type="text" placeholder="Search 8000+ tutorials"></input>
        </div>
      </div>
      <div className="nav-middle">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="nav-right d-flex">
        <div className="dropdown">
          <button
            className="menu-btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            id="dropdownMenuButton1"
          >
            Menu
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li className="dropdown-item" onClick={() => logoutFunc(dispatch)}>
              Logout
            </li>
            <li className="dropdown-item">Profile</li>
            <li className="dropdown-item" onClick={() => navigate("/learn")}>
              Curriculum
            </li>
          </ul>
        </div>
        {!user ? (
          <button
            className="btn"
            style={{ "--bs-btn-padding-y": "0.2rem", margin: "0 10px" }}
            onClick={() => navigate("/signin")}
          >
            Sign In
          </button>
        ) : (
          <button
            className="menu-btn"
            style={{
              margin: "0 10px",
              background: "#d0d0d5",
              color: "#1b1b32",
            }}
          >
            <i className="fas fa-user" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;
