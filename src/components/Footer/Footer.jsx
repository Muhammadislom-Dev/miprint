import React, {useState, useEffect} from "react";
import "./Footer.css";
import location from "../../Assests/Img/locations.png";
import phones from "../../Assests/Img/phones.png";

function Footer() {


  return (
    <div id="contact" className="footer">
      <div className="container">
        <h2 className="footer-subname">Don’t Miss Out</h2>
        <form action="" className="footer-form">
          <input
            type="email"
            required
            placeholder="Your Email"
            className="footer-input"
          />
          <button type="submit" className="footer-btn">
            Subscribe
          </button>
        </form>

        <div className="footer-box">
          <div className="footer-title">
            <h4 className="footer-name">About Printify</h4>
            <p className="footer-text">
              Printify is an online design,copying and printing company that is
              passionate about great design and the difference it can make to
              our customers and the world. Colors launched back in 2006 with the
              aim to disrupt the trillion-dollar global print industry.
            </p>
          </div>
          <div className="footer-title">
            <h4 className="footer-name">Services</h4>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="#" className="footer-link">Business Card</a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link">Business Card</a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link">Business Card</a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link">Business Card</a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link">Business Card</a>
              </li>
            </ul>
          </div>
          <div className="footer-title">
            <h4 className="footer-name">Services</h4>
            <ul className="footer-list">
              <li className="footer-item">
                <a href="#" className="footer-link">Business Card</a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link">Business Card</a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link">Business Card</a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link">Business Card</a>
              </li>
              <li className="footer-item">
                <a href="#" className="footer-link">Business Card</a>
              </li>
            </ul>
          </div>
          <div className="footer-title">
            <h4 className="footer-name">About Printify</h4>
            <p className="footer-texts">000 8888 999</p>
            <p className="footer-texts">needhelp@printify.com 88 New</p>
            <p className="footer-texts">Street, Washington DC United</p>
            <p className="footer-texts">States, America</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
