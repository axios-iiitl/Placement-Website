import React from "react";
import Card from "./Card";
import Satyam from "../assets/team21/satyam.png";
import vks from "../assets/images/vks.jpg";
import Saksham from "../assets/team21/saksham.png";
import Abhijeet from "../assets/team21/abhijeet.png";
import Naman from "../assets/team21/naman.png";
import Ojas from "../assets/team21/ojas.png";
import Manish from "../assets/team21/manish.png";

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
                linkedin="https://www.linkedin.com/in/vishal-krishna-singh-48670916a/"
                islinkedin={true}                
                isPhone={false}
                isEmail={true}
              />
              <Card
                src={Saksham}
                alt="Saksham Varshney"
                name="Saksham Varshney"
                isTeacher={false}
                position="Overall Coordinator"
                email="lit2018029@iiitl.ac.in "
                phone="+91-8094123615"
                linkedin="https://www.linkedin.com/in/sakshamv30/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={Abhijeet}
                alt="Abhijeet Dwivedi"
                name="Abhijeet Dwivedi"
                isTeacher={false}
                position="B.tech Coordinator"
                email="lit2018031@iiitl.ac.in"
                phone="+91-8318184059"
                linkedin="https://www.linkedin.com/in/abhijeet-dwivedi/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={Satyam}
                alt="Satyam Patidar"
                name="Satyam Patidar"
                isTeacher={false}
                position="M.Tech. Coordinator"
                phone="+91-7987137356"
                email="mcs20026@iiitl.ac.in"
                linkedin=" https://www.linkedin.com/in/satyampatidar/ "
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src={Naman}
                alt="Naman Gupta"
                name="Naman Gupta"
                isTeacher={false}
                position="Placement Executive"
                email="lit2018045@iiitl.ac.in"
                phone="+91-8090434623"
                linkedin="https://www.linkedin.com/in/naman1502/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={Manish}
                alt="Manish Pandey"
                name="Manish Pandey"
                isTeacher={false}
                position="Placement Executive"
                phone="+91-7906940263"
                email="lit2018055@iiitl.ac.in"
                linkedin="https://www.linkedin.com/in/manish-pandey-3243b1174"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={Ojas}
                alt="Ojas Dubey"
                name="Ojas Dubey"
                isTeacher={false}
                position="Placement Executive"
                phone="+91-7985218601"
                email="lit2018060@iiitl.ac.in"
                linkedin="https://www.linkedin.com/in/ojas-dubey-84581b174/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default contactUs;
