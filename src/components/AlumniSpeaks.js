import React from "react";

import PrankurPic from "../assets/alumni/prankur.jpg";
import MehaPic from "../assets/alumni/meha.jpg";
import NishthaPic from "../assets/alumni/nishtha.jpg";
import DevanshooPic from "../assets/alumni/devanshoo.jpg";
import NikunjPic from "../assets/alumni/nikunj.jpg";

const AlumniCard = props => {
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

const card = props => {
  return (
    <React.Fragment>
      <div className="contact-outer" style={{ backgroundColor: "white" }}>
        <div className="placement-team">
          <h1 className="placement-team-heading">Alumni Speaks</h1>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <AlumniCard
                img={PrankurPic}
                alt="Prankur Agarwal"
                name="Prankur Agarwal"
                message="It was a great time, spent in IIITL. It has very wonderful faculty and they are very cooperative. The relation between faculty and student is very cordial, which gave me an opportunity to excel further."
                company="Acko"
              />
              <AlumniCard
                img={MehaPic}
                alt="Meha Ranjan"
                name="Meha Ranjan"
                message="IIITL has provided me a wonderful environment and opportunity to learn and grow myself academically as well as to secure a place in the corporate with its best placement services."
                company="Acko"
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
                img={NikunjPic}
                alt="Nikunj Sharma"
                name="Nikunj Sharma"
                message="It was a great time, spent in IIITL. It has very wonderful faculty and they are very cooperative. The relation between faculty and student is very cordial, which gave me an opportunity to excel further."
                company="Acko"
              />
              <AlumniCard
                img={NishthaPic}
                alt="Nishtha Sharma"
                name="Nishtha Sharma"
                message="IIITL has provided me a wonderful environment and opportunity to learn and grow myself academically as well as to secure a place in the corporate with its best placement services."
                company="LinkedIn"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default card;
