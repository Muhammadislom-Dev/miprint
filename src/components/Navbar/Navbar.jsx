import React from "react";
import "./Navbar.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import digital from "../../Assests/Img/prints.png";
import search from "../../Assests/Img/search.png";
import phone from "../../Assests/Img/phone.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <Fade top>
          <Link className="navbar-link" to="/">
            <img src={digital} alt="" className="navbar-img" />
          </Link>
          <form className="navbar-form">
            <label htmlFor="" className="navbar-label">
              <img src={search} alt="" className="navbar-imgs" />
              <input
                type="text"
                required
                placeholder="Search..."
                className="navbar-input"
              />
            </label>
          </form>
          <div className="navbar-list">
            <a href="+74952217843" className="navbar-phone">
              <img src={phone} alt="" className="navbar-pic" /> +7 (495)
              221-78-43
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Navbar;
