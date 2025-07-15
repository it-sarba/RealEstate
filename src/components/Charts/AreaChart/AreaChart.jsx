import React from "react";
import {
  AreaChart as ReAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export const AreaChart = ({
  data,
  xKey,
  areaKey,
  areaColor = "#3b82f6",
  strokeColor = "#1d4ed8",
  title,
}) => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      {title && <h3 style={{ marginBottom: "1rem", textAlign: "center" }}>{title}</h3>}
      <ResponsiveContainer>
        <ReAreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={areaColor} stopOpacity={0.6} />
              <stop offset="95%" stopColor={areaColor} stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey={areaKey}
            stroke={strokeColor}
            fillOpacity={1}
            fill="url(#colorFill)"
          />
        </ReAreaChart>
      </ResponsiveContainer>
    </div>
  );
};
