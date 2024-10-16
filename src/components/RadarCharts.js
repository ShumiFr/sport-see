import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const RadarCharts = ({ data }) => {
  if (!data || !data.data) {
    return null;
  }

  const mappedData = data.data.map((item) => ({
    ...item,
    kind: data.kind[item.kind],
  }));

  return (
    <div className="radarchart">
      <ResponsiveContainer width="90%" height={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={mappedData}>
          <PolarGrid />
          <PolarAngleAxis
            tick={{ fill: "white", fontSize: 15, fontWeight: "bold" }}
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
