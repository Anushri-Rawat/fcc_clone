import React from "react";
import apple from "../images/apple.svg";
import microsoft from "../images/microsoft.svg";
import spotify from "../images/spotify.svg";
import google from "../images/google.svg";
import amazon from "../images/amazon.svg";

const Homepage = () => {
  return (
    <div className="container homepage pt-5">
      <div className="row">
        <div className="col-xl-8 offset-xl-2 col-md-10 offset-md-1 col-sm-12">
          <h1 className="big-heading">Learn to code - for free</h1>
          <h1 className="big-heading">Build projects.</h1>
          <h1 className="big-heading">Earn Certifications.</h1>
          <p style={{ fontWeight: 700, margin: ".6rem 0" }}>
            Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten
            jobs at tech companies including:
          </p>
          <div className="logo-row">
            <img src={apple} alt="apple-icon" style={{ height: "40px" }} />
            <img src={google} alt="apple-icon" style={{ height: "40px" }} />
            <img src={microsoft} alt="apple-icon" style={{ height: "40px" }} />
            <img src={spotify} alt="apple-icon" style={{ height: "40px" }} />
            <img src={amazon} alt="apple-icon" style={{ height: "40px" }} />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button className="btn big-btn">Get Started (it's free)</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
