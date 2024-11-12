import React from "react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import "../styles/components/radialchart.css";

const RadialCharts = ({ score }) => {
  const percentage = score * 100;

  const chartData = [
    {
      name: "Progress",
      uv: percentage,
      fill: "#e60000",
    },
  ];

  return (
    <div className="radialchart">
      <h3 className="radialchart__title">Score</h3>
      <ResponsiveContainer width="90%" height={170}>
        <RadialBarChart
          innerRadius={80}
          outerRadius={70}
          barSize={15}
          data={chartData}
          startAngle={90}
          endAngle={450}
        >
          <RadialBar
            background={{ fill: "#FFFFFF" }}
            dataKey="uv"
            cornerRadius={10}
          />
          <PolarAngleAxis tick={false} type="number" domain={[0, 100]} />
          <circle cx="50%" cy="50%" r="65" fill="#FFFFFF" />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="radialchart__text">
        <h3>{percentage}%</h3>
        <p>de votre objectif</p>
      </div>
    </div>
  );
};

export default RadialCharts;
