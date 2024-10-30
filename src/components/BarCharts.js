import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../styles/components/graphActivitéQuotidienne.css";
import "../styles/components/barchart.css";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="desc">{payload[0].value}kg</p>
        <p className="desc">{payload[1].value}kCal</p>
      </div>
    );
  }

  return null;
};

const formatXAxis = (tickItem) => {
  const date = new Date(tickItem);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString().slice(-2);
  return `${day}/${month}/${year}`;
};

const BarCharts = ({ activities }) => {
  return (
    <div className="barchart">
      <div className="barchart__infos">
        <p className="barchart__infos__title">Activité quotidienne</p>
        <div className="barchart__infos__legend">
          <ul>
            <li className="poids">Poids (kg)</li>
            <li className="calories">Calories brûlées (kCal)</li>
          </ul>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={activities} barGap={8}>
          <CartesianGrid
            strokeDasharray="2 2*"
            horizontal={true}
            vertical={false}
          />
          <XAxis
            dataKey="day"
            tickFormatter={formatXAxis}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            orientation="right"
            tickLine={false}
            axisLine={false}
            ticks={[0, 300, 600]}
          />
          <Tooltip
            animationEasing="ease-out"
            content={<CustomTooltip />}
            offset={40}
            wrapperStyle={{ outline: "none" }}
          />
          <Bar
            radius={[5, 5, 0, 0]}
            barSize={6}
            dataKey="kilogram"
            fill="#000000"
          />
          <Bar
            radius={[5, 5, 0, 0]}
            barSize={6}
            dataKey="calories"
            fill="#e60000"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarCharts;
