import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Rectangle,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomCursor = (props) => {
  const { points, width, height } = props;
  const { x, y } = points[0];
  return (
    <Rectangle
      fill="#E60000"
      radius={20}
      x={x}
      y={y}
      width={width}
      height={height}
    />
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#FFFFFF",
          padding: "5px",
          borderRadius: "5px",
        }}
      >
        <p
          className="label"
          style={{ color: "#000000" }}
        >{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};

const LineCharts = ({ data }) => {
  const formatDay = (day) => {
    const days = ["L", "M", "M", "J", "V", "S", "D"];
    return days[day - 1];
  };

  return (
    <div className="linechart">
      <ResponsiveContainer width="90%" height={300}>
        <LineChart data={data}>
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="day"
            tickFormatter={formatDay}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#FFFFFF" }}
          />
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="url(#lineGradient)"
            strokeWidth={4}
            dot={false}
            activeDot={{
              r: 8,
              fill: "#FFFFFF",
              stroke: "#E60000",
              strokeWidth: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineCharts;
