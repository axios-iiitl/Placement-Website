import React from "react";

import AmitGomi from "../assets/alumni/amitgomi.png";
import Suryansh from "../assets/alumni/suryansh.png";
import NishthaPic from "../assets/alumni/nishtha.jpg";
import DevanshooPic from "../assets/alumni/devanshoo.jpg";
import TarunSinghal from "../assets/alumni/tarun.png";
import RadhikaChandak from "../assets/alumni/placeholder.svg";
import NishantMalik from "../assets/alumni/nishantmalik.png";
import SahilGarg from "../assets/alumni/sahilgarg.png";
import ShubhamUpadhyay from "../assets/alumni/shubham.png";
import AkshatJain from "../assets/alumni/akshatjain.png"
import ShivanshPandey from "../assets/alumni/shivanshpandey.png"

const AlumniCard = (props) => {
  return (
    <React.Fragment>
      <figure className="snip1559">
        <div className="profile-image">
          <img src={props.img} alt={props.alt} />
        </div>
        <figcaption>
          <h3>{props.name}</h3>
          <p style={{ margin: "0 5px" }}>"{props.message}"</p>
          <p className="contact-detail">
            <strong>Placed At:</strong> {props.company}
          </p>
        </figcaption>
      </figure>
    </React.Fragment>
  );
};

const card = (props) => {
  return (
    <React.Fragment>
      <div className="contact-outer" style={{ backgroundColor: "white" }}>
        <div className="placement-team">
          <h1 className="placement-team-heading">Alumni Speaks</h1>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <AlumniCard
                img={AmitGomi}
                alt="Amit Gomi"
                name="Amit Gomi"
                message="It was a great time, spent in IIITL. It has very wonderful faculty and they are very cooperative. The relation between faculty and student is very cordial, which gave me an opportunity to excel further."
                company="Google"
              />
              <AlumniCard
                img={Suryansh}
                alt="Suryansh Tiwari"
                name="Suryansh Tiwari"
                message="IIITL has provided me a wonderful environment and opportunity to learn and grow myself academically as well as to secure a place in the corporate with its best placement services."
                company="Flipkart"
              />
              <AlumniCard
                img={DevanshooPic}
                alt="Devanshoo Udhani"
                name="Devanshoo Udhani"
                message="It gives me great pleasure in sharing my success after joining IIITL. It has successfully accomplished its promises and objectives in providing quality education and overall development of all its students."
                company="Acko"
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <AlumniCard
                img={TarunSinghal}
                alt="Tarun Singhal"
                name="Tarun Singhal"
                message="It was a great time, spent in IIITL. It has very wonderful faculty and they are very cooperative. The relation between faculty and student is very cordial, which gave me an opportunity to excel further."
                company="Mindtickle"
              />
              <AlumniCard
                img={NishthaPic}
                alt="Nishtha Sharma"
                name="Nishtha Sharma"
                message="IIITL has provided me a wonderful environment and opportunity to learn and grow myself academically as well as to secure a place in the corporate with its best placement services."
                company="LinkedIn"
              />
              <AlumniCard
                img={RadhikaChandak}
                alt="Radhika Chandak"
                name="Radhika Chandak"
                message="Life in IIITL was nothing less than a roller coaster ride, full of ups and downs one can imagine. But throughout the journey I have learned a lot. It have provided me with some great opportunities."
                company="Zenefits"
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <AlumniCard
                img={ShubhamUpadhyay}
                alt="Shubham Upadhyay"
                name="Shubham Upadhyay"
                message="It’s been fortunate to be a part of the IIITL where I got the platform to enrich my skills and henceforth a bright light towards my life, with the support and endeavor of my faculty members all the way with my family."
                company="Bounce"
              />
              <AlumniCard
                img={SahilGarg}
                alt="Sahil Garg"
                name="Sahil Garg"
                message="I really feel proud on saying that I have completed my graduation from IIITL. The thing i admire the most is the support from everyone at every step."
                company="Amazon"
              />
              <AlumniCard
                img={NishantMalik}
                alt="Nishant Malik"
                name="Nishant Malik"
                message="Entering IIITL is one of the best things to happen in my life, both on personal and professional front. It has inculcated a lot of intra and interpersonal skills which is one of my key learning by being part of the IIITL family."
                company="Sabre"
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <AlumniCard
                img={AkshatJain}
                alt="Akshat Jain"
                name="Akshat Jain"
                message="IIITL is such an institution that not only inspire you but also teaches what your end goal is."
                company="Microsoft"
              />
              <AlumniCard
                img={ShivanshPandey}
                alt="Shivansh Pandey"
                name="Shivansh Pandey"
                message="To be a part of IIITL, in itself is no less than an achievement. Day 1 to the last day of my college I have found a consistent growth in myself."
                company="Expedia"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default card;
