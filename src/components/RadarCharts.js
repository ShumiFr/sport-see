import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const RadarCharts = ({ performances }) => {
  if (!performances || !performances.data) {
    return null;
  }

  const mappedData = performances.data.map((item) => ({
    ...item,
    kind: performances.kind[item.kind],
  }));

  return (
    <div className="radarchart">
      <ResponsiveContainer width="100%" height={200}>
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={mappedData}>
          <PolarGrid />
          <PolarAngleAxis
            tick={{ fill: "white", fontSize: 10, fontWeight: "bold" }}
            dataKey="kind"
          />
          <Radar
            dataKey="value"
            stroke="#e60000"
            fill="#e60000"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarCharts;
