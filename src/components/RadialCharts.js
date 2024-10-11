import React from "react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import "../styles/components/radialchart.css";

const data = [
  {
    name: "18-24",
    uv: 12,
    pv: 2400,
    fill: "#e60000",
  },
];

const RadialCharts = (props) => {
  return (
    <div className="radialchart">
      <ResponsiveContainer width="90%" height={300}>
        <RadialBarChart
          innerRadius={100}
          outerRadius={100}
          barSize={15}
          data={data}
          startAngle={-280}
          endAngle={80}
        >
          <RadialBar background dataKey="uv" cornerRadius={10} />
          <PolarAngleAxis tick={false} domain={[0, 100]} type="number" />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="radialchart__text">
        <h3>{props.pourcent}</h3>
        <p>de votre objectif</p>
      </div>
    </div>
  );
};

export default RadialCharts;
