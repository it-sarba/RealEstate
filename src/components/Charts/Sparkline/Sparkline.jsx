import React from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export const Sparkline = ({
  data,
  dataKey = "value",
  width = 120,
  height = 40,
  stroke = "#3b82f6",
  strokeWidth = 2,
  showTooltip = false,
}) => {
  return (
    <div style={{ width, height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          {showTooltip && <Tooltip />}
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={stroke}
            strokeWidth={strokeWidth}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
