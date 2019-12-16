import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

class PlacementStatsDomainWise extends Component {
  state = {
    data: {
      labels: [
        "Finance",
        "Consultancy",
        "Core IT",
        "Analytics",
        "Travel Network",
        "Engineering & Technology",
        "Others"
      ],
      datasets: [
        {
          data: [11, 25.92, 26.42, 7.4, 11.11, 7.4, 7.94],
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
      <div>
        <Doughnut
          data={this.state.data}
          width={350}
          height={350}
          options={{
            legend: {
              position: "bottom",
              align: "Start"
            }
          }}
        />
      </div>
    );
  }
}

export default PlacementStatsDomainWise;
