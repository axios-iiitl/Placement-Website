import React from "react";
import TwitterSVG from "./svg/Twitter";
import FacebookSVG from "./svg/Facebook";
import LinkedInSVG from "./svg/Linkedin";
import iiitlText from "../assets/images/iiitl-text.svg";

const footer = () => {
  return (
    <React.Fragment>
      <div class="footer">
        <div class="footer-outer-wrapper">
          <div class="footer-inner-wrapper">
            <div class="footer-col">
              <h2>Contact Us</h2>
              <p>
                <a href="mailto:contact@iiitl.ac.in">contact@iiitl.ac.in</a>
              </p>
              <p>
                <a href="tel:+0532 292 2032">+0532 292 2032</a>
              </p>
              <p>
                IIIT Allahabad, Jhalwa,
                <br />
                Allahabad - 211015
              </p>
            </div>
            <div class="footer-col">
              <h2>Coordinators</h2>
              <p className="footer-contact-name">Devanshoo Udhani</p>
              <p className="footer-contact-position">Student Coordinator</p>
              <p>+91-9415214707</p>
              <p>placements@iiitl.ac.in</p>
            </div>
            <div class="footer-col">
              <p className="footer-contact-name">Prankur Agarwal</p>
              <p className="footer-contact-position">Student Coordinator</p>
              <p>+91-9415214707</p>
              <p>placements@iiitl.ac.in</p>
            </div>
            <div class="footer-col">
              <h2>Links</h2>
              <p>
                <a href="#">Brochure</a>
              </p>
              <p>
                <a href="#">Academics</a>
              </p>
              <p>
                <a href="#">Facilities</a>
              </p>
              <p>
                <a href="#">The Team</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-copyright">
        <p>
          ALL RIGHTS RESERVED © 2018. <strong>IIIT LUCKNOW</strong>
        </p>
      </div>
    </React.Fragment>
  );
};

export default footer;
