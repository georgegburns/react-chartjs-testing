import React from "react";
import { Pie } from "react-chartjs-2";
import {Chart, ArcElement, Title, plugins} from 'chart.js';
Chart.register(ArcElement);
Chart.register(Title);
Chart.register(plugins);

function PieChart({ chartData }) {
  return (
    <div className="chart-container">
      <Pie
        data={
            {labels: chartData.labels,
            datasets: chartData.datasets}}
        height = "300px"
        options={{
            plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            }
            }
        }}
      />
    </div>
  );
}
export default PieChart;