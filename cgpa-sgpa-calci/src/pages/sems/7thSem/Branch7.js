import React from "react";
import "./Sem.css";
import { Link } from "react-router-dom";
function Branch7() {
  return (
    <div className="sem-wrapper">
      <h1 className="heading">CHOOSE YOUR BRANCH</h1>
      <div className="container">
        <Link id="lk" to="/cse7">
          <div className="card">
            <h1 id="sub">CSE / ISE</h1>
          </div>
        </Link>
       
        <Link id="lk" to="/ec7">
        <div className="card">
           
          <h1 id="sub">E&C / E&E / Civil</h1>
        </div>
        </Link>
         
         
         
      </div>
    </div>
  );
}

export default Branch7;
