import { useState } from "react";
import SalesBarChart from "./charts/SalesBarChart";
import SalesLineChart from "./charts/SalesLineChart";
import SalesPieChart from "./charts/SalesPieChart";

export default function ChartSwitcher({ threshold = 0 }) {
  const [type, setType] = useState<"bar" | "line" | "pie">("bar");
  return (
    <div>
      <div className="flex gap-2 mb-2">
        <button onClick={() => setType("bar") } className="btn px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Bar</button>
        <button onClick={() => setType("line") } className="btn px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">Line</button>
        <button onClick={() => setType("pie") } className="btn px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">Pie</button>
      </div>
      {type === "bar" && <SalesBarChart threshold={threshold} />}
      {type === "line" && <SalesLineChart threshold={threshold} />}
      {type === "pie" && <SalesPieChart threshold={threshold} />}
    </div>
  );
}