import React from "react";
import {
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export const BarChart = ({ data, xKey, barKey, barColor = "#3b82f6", title }) => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      {title && <h3 style={{ marginBottom: "1rem" }}>{title}</h3>}
      <ResponsiveContainer>
        <ReBarChart data={data} margin={{ top: 10, right: 20, bottom: 30, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={barKey} fill={barColor} />
        </ReBarChart>
      </ResponsiveContainer>
    </div>
  );
};
