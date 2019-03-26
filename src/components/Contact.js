import React from "react";
import Card from "./Card";
import Bittu from '../assets/images/Bittu.jpg'
import Suryansh from '../assets/images/Suryansh.jpg'
import vks from '../assets/images/vks.png'
import Nishant from '../assets/images/Nishant.jpg'
import Shubham from '../assets/images/Shubham.jpg'
import Tarun from '../assets/images/Tarun.jpg'

const contactUs = () => {
  return (
    <React.Fragment>
      <div className="contact-outer" style={{ backgroundColor: "white" }}>
        <div className="placement-team">
          <h1 className="placement-team-heading">The Team</h1>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src={vks}
                alt="Dr. Vishal Krishna Singh"
                name="Dr. Vishal Krishna Singh"
                isTeacher={false}
                position="Training and Placements Officer"
                email="placements@iiitl.ac.in, tpo@iiitl.ac.in"
                isPhone={false}
                isEmail={true}
              />
              <Card
                src={Nishant}
                alt="Nishant Malik"
                name="Nishant Malik"
                isTeacher={false}
                position="Student Coordinator"
                email="placements@iiitl.ac.in"
                phone="+91-8077 863514"
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={Tarun}
                alt="Tarun Singhal"
                name="Tarun Singhal"
                isTeacher={false}
                position="Student Coordinator"
                email="placements@iiitl.ac.in"
                phone="+91-8318 699228"
                isPhone={true}
                isEmail={true}
              />
            </div>
          </div>
          <div className="placement-executives-wrapper">
            <div className="placement-executives">
              <Card
                src={Bittu}
                alt="Bittu Dalal"
                name="Bittu Dalal"
                isTeacher={false}
                position="Placement Executive"
                phone="+91-9467453631"
                isPhone={true}
                isEmail={false}
              />
              <Card
                src={Shubham}
                alt="Shubham Upadhyay"
                name="Shubham Upadhyay"
                isTeacher={false}
                position="Placement Executive"
                phone="+91-8115736069"
                isPhone={true}
                isEmail={false}
              />
              <Card
                src={Suryansh}
                alt="Suryansh Tiwari"
                name="Suryansh Tiwari"
                isTeacher={false}
                position="Placement Executive"
                phone="+91-8318703691"
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
