import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

class PlacementStatsDomainWise extends Component {
  state = {
    data: {
      labels: [
        "Consultancy",
        "Core IT",
        "Analytics",
        "Travel Network",
        "Engineering & Technology",
        "Finance",
        "Others"
      ],
      datasets: [
        {
          data: [25.9, 26.4, 7.4, 11.1, 7.4, 11, 10.8],
          backgroundColor: [
            "#55efc4",
            "#d63031",
            "#fdcb6e",
            "#6c5ce7",
            "#e74c3c",
            "#8e44ad",
            "#2ecc71"
          ],
          hoverBackgroundColor: [
            "#55efc4",
            "#d63031",
            "#fdcb6e",
            "#6c5ce7",
            "#e74c3c",
            "#8e44ad",
            "#2ecc71"
          ]
        }
      ]
    }
  };

  render() {
    return (
      <div className="doughnut-chart">
        <Doughnut
          data={this.state.data}
          width={400}
          height={400}
          options={{
            legend: {
              position: "bottom",
              align: "center"
            },
            title: {
              display: true,
              text: "Company Distribution",
              fontSize: 30
            }
          }}
        />
      </div>
    );
  }
}

export default PlacementStatsDomainWise;
