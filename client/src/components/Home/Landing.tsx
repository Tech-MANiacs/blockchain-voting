import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <div className="left">
        <img src="voteBG.png" height="750" />
      </div>

      <div className="right">
        
        <div className="logo alignC">
          <img src="logo.png" />
        </div>

        <div className="title-large alignC">Blockchain Based</div>
        <div className="title-large alignC">Voting System</div>
        <div className="title-small second alignC">Securing Using</div>
        <div className="title-small alignC">Zero Knowledge Proofs</div>
        <div className="button-wrapper alignC">
          <Link to="/login">
            <button className="button login">Login</button>
          </Link>

          <Link to="/view">
            <button className="button login view">View Votes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
