import React from "react";
import Card from "./Card";

const contactUs = () => {
  return (
    <React.Fragment>
      <div className="contact-outer">
        <div className="placement-team">
          <h1 className="placement-team-heading">The Team</h1>
          <h2>Training And Placement Officer (TPO)</h2>
          <Card
            src="https://iiitl.ac.in/sites/default/files/inline-images/vijayshri_0_0.jpg"
            alt="xyz"
            name="Dr. Vijayshri Tewari"
            isTeacher={false}
            position="Training and Placements Officer"
            email="tpo@iiitl.ac.in"
            phone="+91-9415214707"
          />
          <h2>Student Coordinators</h2>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src="https://iiitl.ac.in/sites/default/files/inline-images/devanshoo_1.jpg"
                alt="xyz"
                name="Devanshoo Udhani"
                isTeacher={false}
                position="Student Coordinator"
                email="placements@iiitl.ac.in"
                phone="+91-9838 636124"
              />
              <Card
                src="https://iiitl.ac.in/sites/default/files/inline-images/prankur_0.jpg"
                alt="xyz"
                name="Prankur Agarwal"
                isTeacher={false}
                position="Student Coordinator"
                email="placements@iiitl.ac.in"
                phone="+91-9457 382069"
              />
            </div>
          </div>
          <h2>Executives</h2>
          <div className="placement-executives-wrapper">
            <div className="placement-executives">
              <Card
                src="https://iiitl.ac.in/sites/default/files/inline-images/shubh_0.jpg"
                alt="xyz"
                name="Shubhanshu Singh"
                isTeacher={false}
                position="Placement Executive"
                email="placements@iiitl.ac.in"
                phone="+91-9455229539"
              />
              <Card
                src="https://iiitl.ac.in/sites/default/files/inline-images/vaibhav_0.jpg"
                alt="xyz"
                name="Vaibhav Agarwal"
                isTeacher={false}
                position="Placement Executive"
                email="placements@iiitl.ac.in"
                phone="+91-7839932719"
              />
              <Card
                src="https://iiitl.ac.in/sites/default/files/inline-images/IMG-20180405-WA0001.jpg"
                alt="xyz"
                name="Raghav Khandelwal"
                isTeacher={false}
                position="Placement Executive"
                email="placements@iiitl.ac.in"
                phone="+91-9414038742"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default contactUs;
