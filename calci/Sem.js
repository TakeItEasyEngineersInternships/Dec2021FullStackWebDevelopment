import React from "react";
import "./Sem.css";
import { Link } from "react-router-dom";
function Sem() {
  return (
    <div className="sem-wrapper">
      <h1 className="heading">CHOOSE YOUR SEMESTER</h1>
      <div className="container">
        <Link id="lk" to="/fistsemphy">
          <div className="card">
            <h1>1st & 2nd SEM</h1>
            <h1 id="sub">PHYSICS</h1>
          </div>
        </Link>
        <Link id="lk" to="/fistsemchem">
        <div className="card">
          <h1>1st & 2nd SEM</h1>
          <h1 id="sub">CHEMISTRY</h1>
        </div>
        </Link>
        <Link id="lk" to="/thirdsem">
        <div className="card">
          <h1>3rd SEM</h1>
          <h1 id="sub">All Branch</h1>
        </div>
        </Link>
        <Link id="lk" to="/fourthsem">
        <div className="card">
          <h1>4th SEM</h1>
          <h1 id="sub">All Branch</h1>
        </div>
        </Link>
        <Link id="lk" to="/fifthsem">
        <div className="card">
          <h1>5th SEM</h1>
          <h1 id="sub">All Branch</h1>
        </div>
        </Link>
        <Link id="lk" to="/sixthsem">
        <div className="card">
          <h1>6th SEM</h1>
          <h1 id="sub">All Branch</h1>
        </div>
        </Link>
        <Link id="lk" to="/branch7">
        <div className="card">
          <h1>7th SEM</h1>
          <h1 id="sub">(CS,IS,EC,EE,CV)</h1>
        </div>
        </Link>
        <Link id="lk" to="/eightsem">
        <div className="card">
          <h1>8th SEM</h1>
          <h1 id="sub">All Branch</h1>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Sem;
