import React from "react";
import { Link } from "react-router-dom";
import brochurePdf from "../assets/brochure.pdf";

const footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-outer-wrapper">
          <div className="footer-inner-wrapper">
            <div className="footer-col">
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
            <div className="footer-col">
              <h2>Coordinators</h2>
              <p className="footer-contact-name">Devanshoo Udhani</p>
              <p className="footer-contact-position">Student Coordinator</p>
              <p>
                <a href="tel:+91-9415214707">+91-9838636124</a>
              </p>
              <p>
                <a href="mailto:placements@iiitl.ac.in">
                  placements@iiitl.ac.in
                </a>
              </p>
            </div>
            <div className="footer-col">
              <p className="footer-contact-name">Prankur Agarwal</p>
              <p className="footer-contact-position">Student Coordinator</p>
              <p>
                <a href="tel:+91-9415214707">+91-9457382069</a>
              </p>
              <p>
                <a href="mailto:placements@iiitl.ac.in">
                  placements@iiitl.ac.in
                </a>
              </p>
            </div>
            <div className="footer-col">
              <h2>Links</h2>
              <p>
                <a href={brochurePdf} target="blank">
                  Brochure
                </a>
              </p>
              <p>
                <Link to="/courses-offered">Academics</Link>
              </p>
              <p>
                <Link to="/facilities">Facilities</Link>
              </p>
              <p>
                <Link to="/the-team">The Team</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>
          ALL RIGHTS RESERVED © 2018. <strong>IIIT LUCKNOW</strong> (Developed &
          Managed By -{" "}
          <a href="https://www.linkedin.com/in/divy-khare-63a398172/" target="none">Divy</a>,{" "}
          <a href="https://www.linkedin.com/in/vaibhavgupta79/" target="none">Vaibhav</a>)
        </p>
      </div>
    </footer>
  );
};

export default footer;
