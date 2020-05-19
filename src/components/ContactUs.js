import React from "react";
import Card from "./Card";
import Aman from "../assets/team21/aman.jpg";
import vks from "../assets/images/vks.jpg";
import Gaurav from "../assets/team21/gaurav.jpeg";
import Satyam from "../assets/team21/satyam.jpg";
import Hidayat from "../assets/team21/hidayat.jpg";
import Anmol from "../assets/team21/anmol.png";
import Swastik from "../assets/team21/swastik.jpg";

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
                src={Gaurav}
                alt="Gaurav Singh"
                name="Gaurav Singh"
                isTeacher={false}
                position="Overall Coordinator"
                email="lit2017031@iiitl.ac.in"
                phone="+91-9140354859"
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={Satyam}
                alt="Satyam Jha"
                name="Satyam Jha"
                isTeacher={false}
                position="B.tech Coordinator"
                email="lit2017023@iiitl.ac.in"
                phone="+91-6394281036"
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={Aman}
                alt="Aman Ojha"
                name="Aman Ojha"
                isTeacher={false}
                position="M.Tech. Coordinator"
                phone="+91-9695158100"
                email="mcs2019010@iiitl.ac.in"
                isPhone={true}
                isEmail={true}
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src={Hidayat}
                alt="Hidayat Ullah Khan"
                name="Hidayat Ullah Khan"
                isTeacher={false}
                position="Placement Executive"
                email="lit2017029@iiitl.ac.in"
                phone="+91-8871331797"
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={Anmol}
                alt="Anmol suri"
                name="Anmol suri"
                isTeacher={false}
                position="Placement Executive"
                phone="+91-7351932807"
                email="lit2017042@iiitl.ac.in"
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={Swastik}
                alt="Swastik Singh"
                name="Swastik Singh"
                isTeacher={false}
                position="Placement Executive"
                phone="+91-8318807190"
                email="lit2017021@iiitl.ac.in"
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
