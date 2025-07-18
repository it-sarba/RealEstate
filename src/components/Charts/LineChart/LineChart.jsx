import React from "react";
import {
  LineChart as ReLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

 export const LineChart = ({
  data,
  xKey,
  lineKey,
  lineColor = "#3b82f6",
  title,
  strokeWidth = 2,
}) => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      {title && <h3 style={{ marginBottom: "1rem" }}>{title}</h3>}
      <ResponsiveContainer>
        <ReLineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey={lineKey}
            stroke={lineColor}
            strokeWidth={strokeWidth}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        </ReLineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default LineChart;