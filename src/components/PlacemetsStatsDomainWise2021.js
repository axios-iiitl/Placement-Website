import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

class PlacementStatsDomainWise extends Component {
  state = {
    data: {
      labels: [
        "Consultancy",
        "Analytics",
        "E Commerce",
        "Engineering & Technology",
        "Others"
      ],
      datasets: [
        {
          data: [16, 16, 12,40,16],
          backgroundColor: [
            "#55efc4",
            "#d63031",
            "#fdcb6e",
            "#e74c3c",
            "#2ecc71"
          ],
          hoverBackgroundColor: [
            "#55efc4",
            "#d63031",
            "#fdcb6e",
            "#e74c3c",
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
