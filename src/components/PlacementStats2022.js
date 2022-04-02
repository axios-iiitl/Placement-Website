import React from "react";
import GearsImg from "../assets/images/gear21.png";
import GearsImgMtech from "../assets/images/gearmtec22.png";
import PlacementStatsDomainWise from "./PlacemetsStatsDomainWise2021";
import PlacementStats from "../assets/images/stats21.png";
import PlacementStatsMtech from "../assets/images/stats22mtech.png";
import PlacedPercentageImage from "../assets/images/placedpercentage.PNG";

const Placement = props => {
    

    return (
        <div>
            <div className="stats-outer-wrapper" style={{ marginBottom: "30px" }}>
                <h1 className="ps-name-heading pr-main-heading">
                    Placement Statistics (B.Tech) 2021-22
                </h1>
                <div className="images-row-2">
                    <div className="images-row-2-inner">
                        <img src={PlacementStats} alt="Placement Stats 2020" />
                        <img src={GearsImg} alt="Placement Stats 2020" />
                    </div>
                </div>
                <div className="images-row-2" style={{ marginTop: "30px" }}>
                    <div className="images-row-2-inner" style={{ marginBottom: 100 }}>
                        <PlacementStatsDomainWise />
                        <div style={{ alignSelf: "center" }}>
                            <img
                                src={PlacedPercentageImage}
                                alt="Placed Percentage"
                                style={{ width: "250px" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="stats-outer-wrapper" style={{ margin: "30px" }}>
                <h1 className="ps-name-heading pr-main-heading">
                    Placement Statistics (M.Tech) 2021-22
                </h1>
                <div className="images-row-2">
                    <div className="images-row-2-inner">
                        <img src={PlacementStatsMtech}  alt="Placement Stats 2020" />
                        <img src={GearsImgMtech} style={{height:"200px" ,width:"200px"}} alt="Placement Stats 2020" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Placement;
