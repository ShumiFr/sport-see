import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../styles/components/graphActivitéQuotidienne.css";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="desc">{payload[0].value}</p>
        <p className="desc">{payload[1].value}</p>
      </div>
    );
  }

  return null;
};

const GraphActivitéQuotidienne = () => {
  return (
    <div>
      <ResponsiveContainer width="70%" height={300}>
        <BarChart data={data}>
          <CartesianGrid
            strokeDasharray="2 2"
            horizontal={true}
            vertical={false}
          />
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <YAxis orientation="right" tickLine={false} axisLine={false} />
          <Tooltip
            animationEasing="ease-out"
            content={CustomTooltip}
            offset={40}
            wrapperStyle={{ outline: "none" }}
          />
          <Legend />
          <Bar
            radius={[10, 10, 0, 0]}
            barSize={10}
            dataKey="pv"
            fill="#000000"
          />
          <Bar
            radius={[10, 10, 0, 0]}
            barSize={10}
            dataKey="uv"
            fill="#e60000"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphActivitéQuotidienne;
