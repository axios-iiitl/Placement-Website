import React from "react";
import { Link } from "react-router-dom";
import brochurePdf from "../assets/Brochure IIIT Lucknow.pdf";
import jnf from "../assets/JNF IIIT Lucknow.docx";

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
            </div>
            <div className="footer-col">
              <p className="footer-contact-name">Saksham Varshney</p>
              <p className="footer-contact-position">Overall Coordinator</p>
              <p>
                <a href="tel:+91-8094123615">+91-8094123615</a>
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
                <a href={jnf} target="blank">
                  Job Notification form
                </a>
              </p>
              <p>
                <Link to="/courses">Academics</Link>
              </p>
              <p>
                <Link to="/facilities">Facilities</Link>
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
          ALL RIGHTS RESERVED © 2021. <strong>IIIT LUCKNOW.</strong> (Developed
          & Managed By -{" "}
          <a
            href="https://github.com/narendraiiitl"
            target="none"
          >
            Narendra
          </a>
          ,{"  "}
          <a href="https://www.linkedin.com/in/blurry-x-face/" target="none">
            Rishabh
          </a>
           , {" "}
          <a href="https://www.linkedin.com/in/vinamrbajaj/" target="none">
            Vinamr 
          </a>
          )
        </p>
      </div>
    </footer>
  );
};

export default footer;
