import React from "react";
import gender from "../assets/images/SexRatio.png";
import student from "../assets/images/Stydentfaculty.png";
import BarChart2 from "../assets/images/bar-chart-2.png";

const Demographics = () => {
  return (
    <div className="demo">
      <h1 style={{ marginTop: "5%" }}>Gender Ratio</h1>
      <div className="gender-ratio-outer">
        <div className="gender-ratio-inner">
          <div className="gender-ratio-row">
            <img src={gender} alt="" className="gender" />
            <p>
              The institute aims to maintain a diverse culture in terms of
              gender ratio as well. The gender ratio in the college is observed
              as <strong>3 boys to 1 girl.</strong>
            </p>
          </div>
          <h1>Student-Teacher Ratio</h1>
          <div className="gender-ratio-row">
            <img src={student} alt="" className="gender" />
            <p>
              To provide quality education to its students, the institute
              maintains a student-teacher ratio as <strong>6:1</strong> so that
              every individual is paid adequate attention.
            </p>
          </div>
          <div className="gender-ratio-row">
            <h1>Dream Round Offers</h1>
            <img src={BarChart2} alt="" className="gender" />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Demographics;
