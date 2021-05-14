import React from "react";
import GearsImg from "../assets/images/gear19.PNG";
import PlacementStatsDomainWise from "./PlacemetsStatsDomainWise";
import PlacementStats from "../assets/images/editThis.PNG";
import { HorizontalBar } from "react-chartjs-2";
import PlacedPercentageImage from "../assets/images/placedpercentage.PNG";

const Placement = props => {
    const comparisonData = {
        labels: ["Max Package", "Avg Package", "Min Package"],
        datasets: [
            {
                label: "2020",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                data: [0,0,0]
            },
            {
                label: "2019",
                backgroundColor: "rgb(7,192,5, 0.4)",
                borderColor: "rgb(75,192,75, 1)",
                borderWidth: 1,
                data: [43, 18.42, 10]
            },
            {
                label: "2018",
                backgroundColor: "rgb(75,192,192, 0.2)",
                borderColor: "rgb(75,192,192, 1)",
                borderWidth: 1,
                data: [28, 11.37, 5]
            }
        ]
    };

    return (
        <div className="stats-outer-wrapper" style={{ marginBottom: "30px" }}>
            <h1 className="ps-name-heading pr-main-heading">
                Placement Statistics 2020-21
      </h1>
            <div className="images-row-2">
                <div className="images-row-2-inner">
                    <img src={PlacementStats} alt="Placement Stats 2019" />
                    <img src={GearsImg} alt="Placement Stats 2019" />
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
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="horizontal-chart">
                    <HorizontalBar
                        width={100}
                        height={500}
                        data={comparisonData}
                        options={{
                            maintainAspectRatio: false,
                            title: {
                                display: true,
                                text: "Stats 2020 vs 2019 vs 2018",
                                fontSize: 30
                            },
                            scales: {
                                xAxes: [
                                    {
                                        ticks: {
                                            beginAtZero: true,
                                            callback: function (value) {
                                                return value + " LPA";
                                            }
                                        }
                                    }
                                ]
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Placement;
