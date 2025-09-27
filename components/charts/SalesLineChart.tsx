import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { salesData } from "../../data/salesData";

export default function SalesLineChart({ threshold = 0 }) {
  const filtered = salesData.filter((d) => d.sales >= threshold);
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={filtered}>
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="sales" stroke="#10b981" />
      </LineChart>
    </ResponsiveContainer>
  );
}