import React from "react";

const placementStatsCard = props => {
  return (
    <li className="card">
      <div className="card__flipper">
        <div className="card__front">
          <p className="card__name">
            <br />
            {props.cardText}
          </p>
          <p className="card__num">{props.cardStat}</p>
          {props.cardUnit ? (
            <p className="card__num_unit">{props.cardUnit}</p>
          ) : null}
        </div>
        <div className="card__back">
          <svg height="180" width="180">
            <circle
              style={{
                cx: "90",
                cy: "90",
                r: "55",
                stroke: "#514d9b",
                strokeWidth: "35"
              }}
            />
          </svg>
          <span>113.2</span>
        </div>
      </div>
    </li>
  );
};

export default placementStatsCard;
