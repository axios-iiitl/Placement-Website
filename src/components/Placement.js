import React from "react";
import PlacementStatsCard from "./PlacementStatsCard";

const Placement = props => {
  return (
    <div className="place-stats-outer-wrapper">
      <div className="place-stats-main-heading">
        <h1>Placement Statistics (2018)</h1>
      </div>
      <ul className="palcement-stats-ul">
        <PlacementStatsCard
          cardText="Average Salary"
          cardStat="11.08"
          cardUnit="LPA"
        />
        <PlacementStatsCard
          cardText="Average Of Top 20%"
          cardStat="20.50"
          cardUnit="LPA"
        />
        <PlacementStatsCard
          cardText="Average Of Top 50%"
          cardStat="12.83"
          cardUnit="LPA"
        />
        <PlacementStatsCard
          cardText="Highest Package"
          cardStat="27.00"
          cardUnit="LPA"
        />
        <PlacementStatsCard
          cardText="Lowest Package"
          cardStat="4.50"
          cardUnit="LPA"
        />
        <PlacementStatsCard
          cardText="Placed Percentage"
          cardStat="67.50"
          cardUnit="Percentage"
        />
      </ul>
    </div>
  );
};

export default Placement;
