import React from "react";
import Card from "./Card";

import vijayshriImg from "../assets/images/vijayshri.jpg";

const contactUs = () => {
  return (
    <React.Fragment>
      <div className="contact-outer">
        <div className="contact-wrapper">
          <div className="contact-box">
            <h1>Contact Info</h1>
            <div className="contact-info">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailti:contact@iiitl.ac.in">contact@iiitl.ac.in</a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+0532 292 2032">+0532 292 2032</a>
              </p>
              <p>
                <strong>Address:</strong> IIIT Allahabad, Jhalwa, Allahabad -
                211015
              </p>
            </div>
          </div>
        </div>
        <div className="placement-team">
          <h1>Placement Cell</h1>
          <Card
            src="https://dummyimage.com/400x400/000/fff"
            alt="xyz"
            name="NAME XYZABC"
            isTeacher={false}
            position="Placement Officer"
            email="xyz@abcd.com"
            phone="+91-987654321"
          />
          <h1>Student Coordinators</h1>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src="https://dummyimage.com/400x400/000/fff"
                alt="xyz"
                name="NAME XYZABC"
                isTeacher={false}
                position="Placement Officer"
                email="xyz@abcd.com"
                phone="+91-987654321"
              />
              <Card
                src="https://dummyimage.com/400x400/000/fff"
                alt="xyz"
                name="NAME XYZABC"
                isTeacher={false}
                position="Placement Officer"
                email="xyz@abcd.com"
                phone="+91-987654321"
              />
            </div>
          </div>
          <h1>Executives</h1>
          <div className="placement-executives">
            <Card
              src="https://dummyimage.com/400x400/000/fff"
              alt="xyz"
              name="NAME XYZABC"
              isTeacher={false}
              position="Placement Officer"
              email="xyz@abcd.com"
              phone="+91-987654321"
            />
            <Card
              src="https://dummyimage.com/400x400/000/fff"
              alt="xyz"
              name="NAME XYZABC"
              isTeacher={false}
              position="Placement Officer"
              email="xyz@abcd.com"
              phone="+91-987654321"
            />
            <Card
              src="https://dummyimage.com/400x400/000/fff"
              alt="xyz"
              name="NAME XYZABC"
              isTeacher={false}
              position="Placement Officer"
              email="xyz@abcd.com"
              phone="+91-987654321"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default contactUs;
