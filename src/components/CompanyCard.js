import React from "react";

const companyCard = props => {
  return (
    <div className="pr-box">
      <div>
        <img className="pr-company-logo" src={props.src} alt={props.alt} />
      </div>
      <div className="pr-company">
        <h5 className="pr-box-content">{props.companyName}</h5>
      </div>
    </div>
  );
};

export default companyCard;
