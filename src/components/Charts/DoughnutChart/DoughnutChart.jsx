import React from "react";
import {
  PieChart as RePieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"];

export const DoughnutChart = ({
  data,
  dataKey = "value",
  nameKey = "name",
  title,
  innerRadius = 50,
  outerRadius = 90,
}) => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      {title && <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>{title}</h3>}
      <ResponsiveContainer>
        <RePieChart>
          <Pie
            data={data}
            dataKey={dataKey}
            nameKey={nameKey}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </RePieChart>
      </ResponsiveContainer>
    </div>
  );
};
