import React from "react";
import CompaniesVisitedImg from "../assets/images/companies-visited.png";
import DomainWiseImg from "../assets/images/domain-wise.png";
import PlacedPercentageImg from "../assets/images/percentage-placed.png";
import ArrowsImg from "../assets/images/arrows.png";
import DreamRoundOffersImg from "../assets/images/dream-round-offers.png"
import OffersMadeImg from "../assets/images/46-offers.png"
import GearsImg from "../assets/images/gears.png"

const Placement = props => {
  return (
    <div className="stats-outer-wrapper">
      <h1 className="ps-name-heading, pr-main-heading">Placement Statistics 2018-19</h1>
      <p style={{float:'right',fontSize:'15px'}}>* till January 2019</p>
      <div className="images-row-2">
        <div className="images-row-2-inner">
          <img src={ArrowsImg} alt="Placement Stats 2018" />
          <img src={GearsImg} alt="Placement Stats 2018"/>
        </div>
      </div>
      <div className="images-row-3">
        <div className="images-row-3-inner">
          <img src={DreamRoundOffersImg} alt="Dream Round Offers" />
          <img src={DomainWiseImg} alt="Domain Wise" />
        </div>
      </div>
      <div className="images-row-4">
        <div className="images-row-4-inner">
          <img src={PlacedPercentageImg} alt="Placed Percentage" />
          <img src={CompaniesVisitedImg} alt="Companies Visited" />
          <img src={OffersMadeImg} alt="Offers Made" />
        </div>
      </div>
    </div>
  );
};

export default Placement;
