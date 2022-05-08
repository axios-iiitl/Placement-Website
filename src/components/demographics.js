import React from "react";
import gender from "../assets/images/SexRatio.png";
import student from "../assets/images/Stydentfaculty.png";
import Strength from "../assets/images/Strength.png";

const Demographics = () => {
  return (
    <div className="demo">
    <h1 className='demo-head'>Demographics</h1>
      <h1 style={{ marginTop: "5%",color:'navy' }} className="subheads">Gender Ratio</h1>
      <div className="gender-ratio-outer">
        <div className="gender-ratio-inner">
          <div className="gender-ratio-row">
            <img src={gender} alt="" className="gender" />
            <p style={{fontSize:'18px'}}>
              The institute aims to maintain a diverse culture in terms of
              gender ratio as well. The gender ratio in the college is observed
              as <strong>4 : 1.</strong>
            </p>
          </div>
          <h1 className="subheads">Student-Teacher Ratio</h1>
          <div className="gender-ratio-row">
            <img src={student} alt="" className="gender" />
            <p style={{fontSize:'18px'}}>
              To provide quality education to its students, the institute
              maintains a student-teacher ratio as <strong>6 : 1</strong> so that
              every individual is paid adequate attention.
            </p>
          </div>
          <h1 className="subheads">Final & Pre Final Year Strength</h1>
          <div className="gender-ratio-row" style={{marginBottom:'50px'}}>
            <img  src={Strength}  alt="" className="gender" />
            <p style={{fontSize:'18px'}}>
             IIIT Lucknow admitted batch of B. Tech in Information Technology with an intake of 75 students w.e.f. the academic session 2019-20 and admitted batch of B. Tech in Computer Science with an intake of 74 students w.e.f. the academic session 2019-20.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demographics;
