import React from "react";
import "./Home.css";
import heroImage from "../images/Saly-16.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="wrapper">
      <div className="text">
        <h1>VTU SGPA & CGPA CALCULATOR</h1>
        <div className="btns">
          <Link to="/sem">
            <button className="css-button-rounded--rose">Calculate SGPA</button>
          </Link>
          <Link to="/cgpacalc">
          <button className="css-button-rounded--rose">Calculate CGPA</button>
          </Link>
        </div>
      </div>
      <div className="pic">
        <img className="heroImg" src={heroImage} alt="heroImage" />
      </div>
    </div>
  );
}

export default Home;
