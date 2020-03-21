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
                IIIT Lucknow
                <br />
                Chak Ganjaria, C. G. City
                <br />
                Lucknow – 226002
              </p>
              <p>
                <a href="mailto:placements@iiitl.ac.in">
                  placements@iiitl.ac.in
                </a>
              </p>
              <p>
                <a href="tel:+91-8077863514">+91-8077863514</a>
              </p>
            </div>
            <div className="footer-col">
              <p className="footer-contact-name">Nishant Malik</p>
              <p className="footer-contact-position">Student Coordinator</p>
              <p>
                <a href="tel:+91-8077863514">+91-8077863514</a>
              </p>
              <p>
                <a href="mailto:placements@iiitl.ac.in">
                  placements@iiitl.ac.in
                </a>
              </p>
            </div>
            <div className="footer-col">
              <p className="footer-contact-name">Tarun Singhal</p>
              <p className="footer-contact-position">Student Coordinator</p>
              <p>
                <a href="tel:+91-8318699228">+91-8318699228</a>
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
                <a
                  href="https://www.ncs.gov.in/Pages/default.aspx"
                  target="blank"
                >
                  National Career Service
                </a>
              </p>
              <p>
                <a href={brochurePdf} target="blank">
                  Brochure
                </a>
              </p>
              <p>
                <Link to="/courses">Academics</Link>
              </p>
              <p>
                <Link to="/facilities">Facilities</Link>
              </p>
              <p>
                <Link to="/contact-us">The Team</Link>
              </p>
              <p>
                <Link to="/alumni-speaks">Alumni Speaks</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>
          ALL RIGHTS RESERVED © 2020. <strong>IIIT LUCKNOW.</strong> (Developed
          & Managed By -{" "}
          <a
            href="https://www.linkedin.com/in/divy-khare-63a398172/"
            target="none"
          >
            Divy
          </a>
          ,{" "}
          <a href="https://www.linkedin.com/in/vaibhavgupta79/" target="none">
            Vaibhav
          </a>
          )
        </p>
      </div>
    </footer>
  );
};

export default footer;
