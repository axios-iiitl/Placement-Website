import React from "react";
import Card from "./Card";
import kushal from "../assets/team22/kushal.jpeg";
import vks from "../assets/team22/vks.jpg";
import aman from "../assets/team22/aman.jpg";
import yash from "../assets/team22/yash.jpg";
import abhishek from "../assets/team22/abhishek.jpg";
import Pranjal from "../assets/team22/pranjal.jpeg";
import Anu from "../assets/team22/anu.jpg";
import Ishan from "../assets/team22/ishan.jpg";
import Nirmal from "../assets/team22/nirmal.jpg"
import Jasleen from "../assets/team22/jasleen.jpeg"
import Zainab from "../assets/team22/zainab.jpg"
import Gaurav from "../assets/team22/gaurav.jpg"
import Orunayan from "../assets/team22/orunayan.jpg"
import Ajay from "../assets/team22/ajay.jpg"
import Aysha from "../assets/team22/aysha.jpg"
import Shivani from "../assets/team22/shivani.jpeg"

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
                src={kushal}
                alt="R. Kushal Reddy"
                name="R. Kushal Reddy"
                isTeacher={false}
                position="Overall Coordinator"
                email="placements@iiitl.ac.in "
                phone="+91-9059110999"
                linkedin="https://www.linkedin.com/in/kushal-reddy-3101231b5/?originalSubdomain=in"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={aman}
                alt="Aman Verma"
                name="Aman Verma"
                isTeacher={false}
                position="B.tech Coordinator"
                email="placements@iiitl.ac.in "
                phone="+91-9792666122"
                linkedin="https://www.linkedin.com/in/aman-verma-04a07b230"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={yash}
                alt="Yash Sahu"
                name="Yash Sahu"
                isTeacher={false}
                position="B.Tech Coordinator"
                phone="+91-9140631559"
                email="placements@iiitl.ac.in"
                linkedin="https://www.linkedin.com/in/yash-sahu-5b2a01197/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src={abhishek}
                alt="Abhishek Singh"
                name="Abhishek Singh"
                isTeacher={false}
                position="Placement Executive"
                phone="+91-8303186235"
                linkedin="https://www.linkedin.com/in/abhishekworks787"
                islinkedin={true}
                isPhone={true}
                isEmail={false}
              />
              <Card
                src={Pranjal}
                alt="Pranjal Saxena"
                name="Pranjal Saxena"
                isTeacher={false}
                position="Placement Executive"
                phone="+91-7385015375"
                linkedin="https://www.linkedin.com/in/pranjal-saxena-3a33841a4/"
                islinkedin={true}
                isPhone={true}
                isEmail={false}
              />
              <Card
                src={Anu}
                alt="Anu Kumari"
                name="Anu Kumari"
                isTeacher={false}
                position="Placement Executive"
                phone="+91-9324121272"
                linkedin="https://www.linkedin.com/in/anu-kumari-401464197/"
                islinkedin={true}
                isPhone={true}
                isEmail={false}
              />
              <Card
                src={Ishan}
                alt="Ishan Nagar"
                name="Ishan Nagar"
                isTeacher={false}
                position="Placement Executive"
                phone="+91-6265179307"
                linkedin="https://www.linkedin.com/in/ishan-nagar-5044231a9"
                islinkedin={true}
                isPhone={true}
                isEmail={false}
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src={Nirmal}
                alt="Nirmal Nambiar"
                name="Nirmal Nambiar"
                isTeacher={false}
                position="Placement Executive"
                phone="+91-9995346899"
                linkedin="https://www.linkedin.com/in/nirmal-nambiar-739288197/"
                islinkedin={true}
                isPhone={true}
                isEmail={false}
              />
              <Card
                src={Jasleen}
                alt="Jasleen Bhatia"
                name="Jasleen Bhatia"
                isTeacher={false}
                position="MTech Placement COORDINATOR"
                phone="+91-8349683499"
                email="placements@iiitl.ac.in"
                linkedin="https://www.linkedin.com/in/jasleen-bhatia-78371b169/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={Shivani}
                alt="Shivani Kushwaha"
                name="Shivani Kushwaha"
                isTeacher={false}
                position="MTech Placement COORDINATOR"
                phone="+91-9453422900"
                email="placements@iiitl.ac.in"
                linkedin="https://www.linkedin.com/in/shivani-kushwaha-9a80ba122/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={Zainab}
                alt="Zainab Fatima"
                name="Zainab Fatima"
                isTeacher={false}
                position="MTech Placement Executive"
                phone="+91-8433497963"
                email="mcs21001@iiitl.ac.in"
                linkedin="https://www.linkedin.com/in/zainab-fatima118/"
                islinkedin={true}
                isPhone={true}
                isEmail={false}
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src={Gaurav}
                alt="Gaurav Tripathi"
                name="Gaurav Tripathi"
                isTeacher={false}
                position="Phd Placement Coordinator"
                email="placements@iiitl.ac.in"
                phone="+91-6280058825"
                linkedin="https://www.linkedin.com/in/gauravt50/?originalSubdomain=in/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={Orunayan}
                alt="Orunayan Bhattacharya"
                name="Orunayan Bhattacharya"
                isTeacher={false}
                position="MBA ( Digital Business) Placement Coordinator"
                phone="+91-9038686200"
                email="placements@iiitl.ac.in"
                linkedin="https://www.linkedin.com/in/orunayan-bhattacharya-3a4b5518b/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={Ajay}
                alt="Ajay Vikram"
                name="Ajay Vikram"
                isTeacher={false}
                position="MBA ( Digital Business) Placement Executive"
                phone="+91-9019593477"
                email="mdb2002@iiitl.ac.in"
                linkedin="https://www.linkedin.com/in/ajay-vikram-11545a14"
                islinkedin={true}
                isPhone={true}
                isEmail={false}
              />
              <Card
                src={Aysha}
                alt="Aysha Hannah"
                name="Aysha Hannah"
                isTeacher={false}
                position="MBA ( Digital Business) Placement Executive"
                phone="+91-9656482753"
                email="mdb2020@iiitl.ac.in"
                linkedin="https://www.linkedin.com/in/aysha-hannah-904213150/"
                islinkedin={true}
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
