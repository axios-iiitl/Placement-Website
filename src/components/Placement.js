import React from "react";

const Placement = props => {
  return (
    <div className="stats">
      <h1>Placement Statistics 2018-19</h1>
      <img
        className="head"
        style={{ marginLeft: "24px" }}
        src="https://i.imgur.com/HhRIS3U.png"
      />
      <img className="head" src="https://i.imgur.com/XRYTi13.png" />
      <br />
      <span className="txt">
        <p>Our Graduates are a combination of rigorous thinking, hard work and
        fundamentals. The campus promotes a host of student activities to
        improve their soft skills, which are imperative for one to excel in his/
        her work space. Besides, campus is abuzz with activities of various
        student clubs and organizations.</p>
        <p>We highly value our partnership with recruiters & remain committed to
        making your recruiting experience productive and positive. On behalf of
        the campus the placement team extends a warm welcome to all the
        recruiters to visit the campus and test our budding talents. We hope
        that firms and our students will create synergies & find the best match
        between their needs and capabilities.</p>
      </span>
      <img className="avg" src="https://i.imgur.com/wk9DGoJ.png" />
      <div style={{ float: "left", marginLeft: "20px" }}>
        <img className="dat" src="https://i.imgur.com/OEQ4TO1.png" />
        <img className="dat" src="https://i.imgur.com/CGEdeSl.png" />
        <img
          className="dat"
          src="https://i.imgur.com/WhPsB4T.png"
          style={{ width: "193px", marginBottom: "9px" }}
        />
      </div>
      <img
        style={{ width: "450px", marginLeft: "260px", marginTop: "30px" }}
        src="https://i.imgur.com/mUSFaom.png"
      />
    </div>
  );
};

export default Placement;
