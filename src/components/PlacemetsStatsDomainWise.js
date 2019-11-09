import React, { Component } from "react";
import Chart from "react-apexcharts";

class PlacementStatsDomainWise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [11, 25.92, 26.42, 7.4, 11.11, 7.4, 7.94],
      options: {
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 320
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ],
        colors: [
          "#5b9bd5",
          "#e97c31",
          "#4472c4",
          "#f5bf1a",
          "#901525",
          "#70ad47",
          "#a5a5a5"
        ],
        labels: [
          "Finance",
          "Consultancy",
          "Core IT",
          "Analytics",
          "Travel Network",
          "Engineering & Technology",
          "Others"
        ]
      }
    };
  }

  render() {
    return (
      <div className="donut">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width="480"
        />
      </div>
    );
  }
}

export default PlacementStatsDomainWise;
