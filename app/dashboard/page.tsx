"use client";
import { useState } from "react";
import ChartSwitcher from "../../components/ChartSwitcher";
import CustomFilter from "../../components/CustomFilter";

export default function DashboardPage() {
  const [threshold, setThreshold] = useState(0);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Sales Dashboard</h1>
      <CustomFilter onThresholdChange={setThreshold} />
      <ChartSwitcher threshold={threshold} />
    </main>
  );
}