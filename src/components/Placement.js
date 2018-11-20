import React from "react";
import BarChart2 from "../assets/images/bar-chart-2.png";
import FullTimeOffers from "../assets/images/full-time-offers.png"
import Above25LpaImg from "../assets/images/above-25-lpa.png";
import CompaniesVisitedImg from "../assets/images/companies-visited.png";
import DomainWiseImg from "../assets/images/domain-wise.png";
import HighestPackageImg from "../assets/images/highest-package.png";
import PlacedPercentageImg from "../assets/images/placed-percentage.png";
import PyramidImg from "../assets/images/pyramid-stats.png";
import SummerInternsImg from "../assets/images/summer-interns.png";

const Placement = props => {
  return (
    <div className="stats-outer-wrapper">
      <h1 className="ps-name-heading">Placement Statistics 2018-19</h1>
      <div className="images-row-1">
        <div className="images-row-2-inner">
          <img src={FullTimeOffers} alt="Full Time Offers" />
          <img src={HighestPackageImg} alt="Highest Package" />
          <img src={SummerInternsImg} alt="Summer Interns" />
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
          <img src={PyramidImg} alt="Placement Stats 2018"/>
        </div>
      </div>
      <div className="images-row-3">
        <div className="images-row-3-inner">
          <img src={BarChart2} alt="Dream Round Offers" />
          <img src={DomainWiseImg} alt="Domain Wise" />
        </div>
      </div>
      <div className="images-row-4">
        <div className="images-row-4-inner">
          <img src={CompaniesVisitedImg} alt="Companies Visited" />
          <img src={Above25LpaImg} alt="Above 25 LPA" />
          <img src={PlacedPercentageImg} alt="Placed Percentage" />
        </div>
      </div>
    </div>
  );
};

export default Placement;
