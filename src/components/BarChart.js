import React from "react";
import { Bar } from "react-chartjs-2";
import {Chart, BarElement, Title, plugins, CategoryScale, LinearScale, bar} from 'chart.js';
Chart.register(BarElement);
Chart.register(Title);
Chart.register(plugins);
Chart.register(CategoryScale);
Chart.register(LinearScale);
// Chart.register(bar);


function BarChart({ chartData }) {
  return (
    <div className="chart-container">
      <Bar
        data={{
            labels : chartData.labels,
            datasets : chartData.datasets}}
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
export default BarChart;