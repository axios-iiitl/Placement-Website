import React from "react";
import BarChart2 from "../assets/images/bar-chart-2.png";

const Placement = props => {
  return (
    <div className="stats-outer-wrapper">
      <h1 className="ps-name-heading">Placement Statistics 2018-19</h1>
      <div className="images-row-1">
        <div className="images-row-2-inner">
          <img src="https://i.imgur.com/A2C1e8m.png" alt="Full Time Offers" />
          <img src="https://i.imgur.com/HWZh8fU.png" alt="Highest Package" />
          <img src="https://i.imgur.com/AVWZX8Y.png" alt="Summer Interns" />
        </div>
      </div>
      <div className="images-row-2">
        <div className="images-row-2-inner">
          <div className="quote">
            <blockquote>
              <p>
                Our Graduates are a combination of rigorous thinking, hard work
                and fundamentals. The campus promotes a host of student
                activities to improve their soft skills, which are imperative
                for one to excel in his/ her work space. Besides, campus is
                abuzz with activities of various student clubs and
                organizations.
                <br />
                <br />
                We highly value our partnership with recruiters & remain
                committed to making your recruiting experience productive and
                positive. On behalf of the campus the placement team extends a
                warm welcome to all the recruiters to visit the campus and test
                our budding talents. We hope that firms and our students will
                create synergies & find the best match between their needs and
                capabilities.
              </p>
            </blockquote>
          </div>
          <img src="https://i.imgur.com/F70N1Kr.png" alt="Placement Stats 2018"/>
        </div>
      </div>
      <div className="images-row-3">
        <div className="images-row-3-inner">
          <img src={BarChart2} alt="Dream Round Offers" />
          <img src="https://i.imgur.com/cB7LVuE.png" alt="Domain Wise" />
        </div>
      </div>
      <div className="images-row-4">
        <div className="images-row-4-inner">
          <img src="https://i.imgur.com/Hb7rOGq.png" alt="Companies Visited" />
          <img src="https://i.imgur.com/hMX5fF6.png" alt="Above 25 LPA" />
          <img src="https://i.imgur.com/o6Yk5o5.png" alt="Placed Percentage" />
        </div>
      </div>
    </div>
  );
};

export default Placement;
