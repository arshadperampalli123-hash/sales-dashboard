import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { salesData } from "../../data/salesData";

const COLORS = ["#3b82f6", "#10b981", "#f59e42"];

export default function SalesPieChart({ threshold = 0 }) {
  const filtered = salesData.filter((d) => d.sales >= threshold);
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={filtered}
          dataKey="sales"
          nameKey="year"
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          {filtered.map((entry, idx) => (
            <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}