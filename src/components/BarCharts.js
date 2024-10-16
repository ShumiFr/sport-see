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

const BarCharts = ({ data }) => {
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
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid
            strokeDasharray="2 2"
            horizontal={true}
            vertical={false}
          />
          <XAxis dataKey="day" tickLine={false} axisLine={false} />
          <YAxis orientation="right" tickLine={false} axisLine={false} />
          <Tooltip
            animationEasing="ease-out"
            content={<CustomTooltip />}
            offset={40}
            wrapperStyle={{ outline: "none" }}
          />
          <Bar
            radius={[10, 10, 0, 0]}
            barSize={10}
            dataKey="kilogram"
            fill="#000000"
          />
          <Bar
            radius={[10, 10, 0, 0]}
            barSize={10}
            dataKey="calories"
            fill="#e60000"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarCharts;
