import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { salesData } from "../../data/salesData";

export default function SalesBarChart({ threshold = 0 }) {
  const filtered = salesData.filter((d) => d.sales >= threshold);
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={filtered}>
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="sales" fill="#3b82f6" />
      </BarChart>
    </ResponsiveContainer>
  );
}