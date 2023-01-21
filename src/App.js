import { useState } from "react";
import { Data } from "./utils/Data";
import PieChart from "./components/PieChart";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import './App.css';

function App() {
  const [chartData, setChartData] = useState({
    labels : Data.map((data) => data.year),
    datasets : [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  })
  return (
    <>
      <h1>Chart JS Testing Zone</h1>
      <div className="grid-container">
          <div className="grid-chart">
            <h2>Pie Chart</h2>
              <PieChart chartData={chartData}/>
          </div>        
          <div className="grid-chart">
              <h2>Bar Chart</h2>
              <BarChart chartData={chartData}/>
          </div>
      </div>  
      <div className="grid-container">
          <div className="grid-chart">
            <h2>Line Chart</h2>
              <LineChart chartData={chartData}/>
          </div>        
      </div>  
    </> 
  );
}

export default App;
