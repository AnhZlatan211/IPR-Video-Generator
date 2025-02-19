import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navi">
      <ul>
        <div className="left">
            <li><Link to="/">VideoGen</Link></li>
        </div>
        <div className="mid">
            <li><Link to="/generator">Generator</Link></li>
            <li><Link to="/json-to-video">JSON to Video</Link></li>
            <li><Link to="/support">Support</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
        </div>
        <div className="right">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup" className="signup">Sign up</Link></li>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
