import React from "react";
import GearsImg from "../assets/images/gear19.JPG";
import PlacementStatsDomainWise from "./PlacemetsStatsDomainWise";
import PlacementStats from "../assets/images/editThis.JPG";

const Placement = props => {
  return (
    <div className="stats-outer-wrapper">
      <h1 className="ps-name-heading, pr-main-heading">
        Placement Statistics 2019-20
      </h1>
      <p style={{ float: "right", fontSize: "15px" }}>*till November 2019</p>
      <div className="images-row-2">
        <div className="images-row-2-inner">
          <img src={PlacementStats} alt="Placement Stats 2018" />
          <img src={GearsImg} alt="Placement Stats 2018" />
        </div>
      </div>
      <div className="images-row-3">
        <div className="images-row-3-inner" style={{marginBottom: 100}}>
          <PlacementStatsDomainWise />
        </div>
      </div>
    </div>
  );
};

export default Placement;
