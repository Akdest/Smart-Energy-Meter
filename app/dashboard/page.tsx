"use client";

import { EnergyChart } from "@/components/dashboard/energy-chart";
import { StatsCard } from "@/components/dashboard/stats-card";
import { TimeRangeSelector } from "@/components/dashboard/time-range-selector";
import { DataTable } from "@/components/dashboard/data-table"; // Import DataTable component
import { Zap, BatteryCharging, DollarSign, Cpu, BarChart, ArrowLeft } from "lucide-react"; // Import the ArrowLeft icon
import { useState } from "react";
import Link from "next/link"; // Import Link from Next.js for navigation

const Dashboard = () => {
  const hourlyData = [
    { time: "00:00", value: 100, voltage: 230, current: 0.43, cost: 10, powerFactor: 0.9 },
    { time: "01:00", value: 120, voltage: 230, current: 0.52, cost: 12, powerFactor: 0.85 },
    { time: "02:00", value: 80, voltage: 230, current: 0.35, cost: 8, powerFactor: 0.88 },
    // Add more hourly data...
  ];

  const dailyData = [
    { time: "Day 1", value: 300, voltage: 230, current: 1.2, cost: 25, powerFactor: 0.92 },
    { time: "Day 2", value: 350, voltage: 230, current: 1.4, cost: 30, powerFactor: 0.9 },
    // Add more daily data...
  ];

  const monthlyData = [
    { time: "January", value: 3500, voltage: 230, current: 1.8, cost: 300, powerFactor: 0.87 },
    { time: "February", value: 4000, voltage: 230, current: 2.0, cost: 320, powerFactor: 0.85 },
    // Add more monthly data...
  ];

  const [data, setData] = useState(hourlyData); // Start with hourly data
  const [timeframe, setTimeframe] = useState("hourly");

  const handleTimeframeChange = (timeframe: string) => {
    setTimeframe(timeframe);
    if (timeframe === "hourly") {
      setData(hourlyData);
    } else if (timeframe === "daily") {
      setData(dailyData);
    } else if (timeframe === "monthly") {
      setData(monthlyData);
    }
  };

  const totalEnergy = data.reduce((acc, cur) => acc + cur.value, 0);
  const totalCost = data.reduce((acc, cur) => acc + cur.cost, 0);
  const peakUsage = Math.max(...data.map((data) => data.value));

  // Calculate average power factor for the timeframe
  const avgPowerFactor = data.reduce((acc, cur) => acc + cur.powerFactor, 0) / data.length;

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-dark-900 relative">
      {/* Back Button */}
      <div className="absolute top-6 left-6 z-10 mb-12 p-2 border-2 border-white/[0.2] rounded-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:border-white">
        <Link href="/" className="text-white text-4xl">
          <ArrowLeft />
        </Link>
      </div>

      <div className="grid mb-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-12">
        {/* Stats Cards */}
        <StatsCard
          icon={Zap}
          iconColor="text-blue-500"
          label="Total Energy Used"
          value={`${totalEnergy} kWh`}
        />
        <StatsCard
          icon={BatteryCharging}
          iconColor="text-green-500"
          label="Current"
          value={`${
            data.length > 0 ? (data.reduce((acc, cur) => acc + cur.current, 0) / data.length).toFixed(2) : 0
          } A`}
        />
        <StatsCard
          icon={DollarSign}
          iconColor="text-orange-500"
          label="Total Cost"
          value={`$${totalCost.toFixed(2)}`}
        />
        <StatsCard
          icon={Cpu}
          iconColor="text-yellow-500"
          label="Power Factor"
          value={`${avgPowerFactor.toFixed(2)}`}
        />
        <StatsCard
          icon={BarChart}
          iconColor="text-purple-500"
          label="Total Bill"
          value={`$${(totalCost + 50).toFixed(2)}`} // Example: Adding a fixed fee to total cost
        />
      </div>

      {/* Time Range Selector (as Tabs) */}
      <TimeRangeSelector
        timeframe={timeframe}
        onTimeframeChange={handleTimeframeChange}
      />

      {/* Energy Chart */}
      <div className="mt-6">
        <EnergyChart data={data} dataKey="value" stroke="#4CAF50" title="Energy Usage" />
      </div>

      {/* Data Table */}
      <div className="col-span-2 mt-6">
        <DataTable data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
