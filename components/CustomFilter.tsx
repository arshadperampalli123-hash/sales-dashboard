import { useState } from "react";

export default function CustomFilter({ onThresholdChange }) {
  const [value, setValue] = useState(0);

  return (
    <div className="mb-4">
      <label htmlFor="sales-threshold" className="mr-2 font-medium">Sales Threshold:</label>
      <input
        id="sales-threshold"
        type="number"
        value={value}
        onChange={(e) => {
          const v = Number(e.target.value);
          setValue(v);
          onThresholdChange(v);
        }}
        className="border p-1 rounded"
        min={0}
      />
    </div>
  );
}