import React from "react";
import DomainWiseImg from "../assets/images/domain-wise.png";
import ArrowsImg from "../assets/images/arrows.PNG";
import GearsImg from "../assets/images/gear18.JPG";

const Placement2018 = props => {
  return (
    <div className="stats-outer-wrapper">
      <h1 className="ps-name-heading, pr-main-heading">
        Placement Statistics 2018-19
      </h1>
      <p style={{ float: "right", fontSize: "15px" }}>*till March 2019</p>
      <div className="images-row-2">
        <div className="images-row-2-inner">
          <img src={ArrowsImg} alt="Placement Stats 2018" />
          <img src={GearsImg} alt="Placement Stats 2018" />
        </div>
      </div>
      <div className="images-row-3">
        <div className="images-row-3-inner">
          <img src={DomainWiseImg} alt="Domain Wise" />
        </div>
      </div>
      <div className="images-row-4">
        <div className="images-row-4-inner">
        </div>
      </div>
    </div>
  );
};

export default Placement2018;
