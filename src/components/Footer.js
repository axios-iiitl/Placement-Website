import React from "react";
import TwitterSVG from "./svg/Twitter";
import FacebookSVG from "./svg/Facebook";
import LinkedInSVG from "./svg/Linkedin";

const footer = () => {
  return (
    <footer>
      <div className="centered clearfix">
        <div className="footer-logo">
          <img className="logo" src="https://placeholder.pics/svg/" alt="Logo" />
          <div className="social">
            <a href="/" className="facebook">
              <FacebookSVG />
            </a>
            <a href="/" className="twitter">
              <TwitterSVG />
            </a>
            <a href="/" className="linkedin">
              <LinkedInSVG />
            </a>
          </div>
        </div>
        <div className="footer-contact">
          <h3>
            Contact Us:
          </h3>
          <p>
            <a href="mailto:contact@iiitl.ac.in">contact@iiitl.ac.in</a>
          </p>
          <p>
            <a href="tel:+0532 292 2032">+0532 292 2032</a>
          </p>
          <p>
              IIIT Allahabad, Jhalwa
              <br />
              Allahabad - 211015
          </p>
        </div>
        <div className="footer-navigation">
          <div className="footer-links-holder">
            <ul className="footer-links">
              <li>
                <a href="/">Why IIITL?</a>
              </li>
              <li>
                <a href="/">Facilities</a>
              </li>
              <li>
                <a href="/">Academics</a>
              </li>
            </ul>
          </div>
          <div className="footer-links-holder">
            <ul className="footer-links">
              <li>
                <a href="/">Procedures and<br/>Policies</a>
              </li>
              <li>
                <a href="/">Brochure</a>
              </li>
              <li>
                <a href="/">Past Recruiters</a>
              </li>
            </ul>
          </div>
          <div className="footer-links-holder">
            <ul className="footer-links">
              <li>
                <a href="/">Placement Statistics</a>
              </li>
              <li>
                <a href="/">The Team</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        All Rights Reserved © 2018
      </div>
    </footer>
  );
};

export default footer;
