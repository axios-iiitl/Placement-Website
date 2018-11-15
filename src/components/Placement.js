import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";

const Placement = props => {
  const dataForBarGraph = {
    labels: [
      "Highest Package",
      "Lowest Package",
      "Avg (Top 50%)",
      "Avg (Top 20%)",
      "Avg (Total)"
    ],
    datasets: [
      {
        label: "Placement Statistics 2018 (In LPA)",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [27, 4.5, 12.83, 20.5, 11.08]
      }
    ]
  };

  const dataForDoughnutGraph = {
    labels: ["Percentage Of Student Placed", "Percentage Of Student Not Placed"],
    datasets: [
      {
        data: [67.5, 32.5],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"]
      }
    ]
  };

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
      <div className="bar-graph-outer">
        <Bar
          data={dataForBarGraph}
        />
        <br/>
        <br/>
        <br/>
        <Doughnut data={dataForDoughnutGraph} />
      </div>
      <div className="placement-total-students">
        <h1>Total Students Registered: 40</h1>
      </div>
    </React.Fragment>
  );
};

export default Placement;
