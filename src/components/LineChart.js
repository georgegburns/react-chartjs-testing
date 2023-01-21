import React from "react";
import { Line } from "react-chartjs-2";
import {Chart, Title, plugins, CategoryScale, LinearScale, PointElement, LineElement} from 'chart.js';
Chart.register(Title);
Chart.register(plugins);
Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(PointElement);
Chart.register(LineElement);


function LineChart({ chartData }) {
  return (
    <div className="chart-container">
      <Line
        data={{
            labels : chartData.labels,
            datasets : chartData.datasets}}
        height = "300px"
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            },
            legend: {
              display: false
            },
            maintainAspectRatio: false
          }
        }}
      />
    </div>
  );
}
export default LineChart;