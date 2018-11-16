import React from "react";
import PlacementStats2018 from "../assets/images/placement-stats-2018.png";
import BarChart1 from "../assets/images/bar-chart-1.jpg";
import BarChart2 from "../assets/images/bar-chart-2.png";

const Placement = props => {
  return (
    <React.Fragment>
      <div className="stats-outer">
        <div className="stats-inner">
          <h1>Placement Statistics</h1>
          <p>
            IIIT-Lucknow provides a platform to facilitate interaction between
            students and companies, so both can find the best match as per their
            aspirations and requirements.
          </p>
          <p>
            Our Graduates are a combination of rigorous thinking, hard work and
            fundamentals. The campus promotes a host of student activities to
            improve their soft skills, which are imperative for one to excel in
            his/ her work space. Besides, campus is abuzz with activities of
            various student clubs and organizations.
          </p>
          <p>
            We highly value our partnership with recruiters & remain committed
            to making your recruiting experience productive and positive. On
            behalf of the campus the placement team extends a warm welcome to
            all the recruiters to visit the campus and test our budding talents.
            We hope that firms and our students will create synergies & find the
            best match between their needs and capabilities.
          </p>
        </div>
      </div>
      <div className="graphs-outer-wrapper">
        <div className="graphs-inner-wrapper">
          <div className="bar-graph-outer">
            <img className="bar-graph-image" src={PlacementStats2018} />
          </div>
          <div class="quote">
            <blockquote>
              <p>
                <strong>Highest Package:</strong> 27 LPA
                <br/>
                <strong>Lowest Package:</strong> 4.5 LPA
                <br/>
                <strong>Average CTC Of Top 20%:</strong> 20.50 LPA
                <br />
                <strong>Average CTC Of Top 50%:</strong> 12.83 LPA
                <br/>
                <strong>Average CTC Of Total Students:</strong> 11.08 LPA
                <br />
                <strong>Percentage Of Students Placed:</strong> 67.50%
                <br/>
                <strong>Total Students Registered:</strong> 40
                <br/>
                <strong>No. Of Offers:</strong> 39 + 5 interns
                <br/>
                <strong>No. Of Companies Visited:</strong> 27
              </p>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="graphs-outer-wrapper">
        <div className="graphs-inner-wrapper">
          <div className="bar-chart-outer-1">
            <img className="bar-graph-image" src={BarChart1} />
          </div>
          <div className="bar-chart-outer-2">
            <img className="bar-graph-image" src={BarChart2} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Placement;
