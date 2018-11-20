import React from "react";
import Card from "./Card";

const contactUs = () => {
  return (
    <React.Fragment>
      <div className="contact-outer" style={{ backgroundColor: "white" }}>
        <div className="placement-team">
          <h1 className="placement-team-heading">The Team</h1>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src="https://iiitl.ac.in/sites/default/files/inline-images/vijayshri_0_0.jpg"
                alt="Dr. Vijayshri Tewari"
                name="Dr. Vijayshri Tewari"
                isTeacher={false}
                position="Training and Placements Officer"
                email="placements@iiitl.ac.in"
                isPhone={false}
                isEmail={true}
              />
              <Card
                src="https://iiitl.ac.in/sites/default/files/inline-images/devanshoo_1.jpg"
                alt="Devanshoo Udhani"
                name="Devanshoo Udhani"
                isTeacher={false}
                position="Student Coordinator"
                email="placements@iiitl.ac.in"
                phone="+91-9838 636124"
                isPhone={true}
                isEmail={true}
              />
              <Card
                src="https://iiitl.ac.in/sites/default/files/inline-images/prankur_0.jpg"
                alt="Prankur Agarwal"
                name="Prankur Agarwal"
                isTeacher={false}
                position="Student Coordinator"
                email="placements@iiitl.ac.in"
                phone="+91-9457 382069"
                isPhone={true}
                isEmail={true}
              />
            </div>
          </div>
          <div className="placement-executives-wrapper">
            <div className="placement-executives">
              <Card
                src="https://iiitl.ac.in/sites/default/files/inline-images/shubh_0.jpg"
                alt="Shubhanshu Singh"
                name="Shubhanshu Singh"
                isTeacher={false}
                position="Placement Executive"
                phone="+91-9455229539"
                isPhone={true}
                isEmail={false}
              />
              <Card
                src="https://iiitl.ac.in/sites/default/files/inline-images/vaibhav_0.jpg"
                alt="Vaibhav Agarwal"
                name="Vaibhav Agarwal"
                isTeacher={false}
                position="Placement Executive"
                phone="+91-7839932719"
                isPhone={true}
                isEmail={false}
              />
              <Card
                src="https://iiitl.ac.in/sites/default/files/inline-images/IMG-20180405-WA0001.jpg"
                alt="Raghav Khandelwal"
                name="Raghav Khandelwal"
                isTeacher={false}
                position="Placement Executive"
                phone="+91-9414038742"
                isPhone={true}
                isEmail={false}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default contactUs;
