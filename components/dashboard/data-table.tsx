"use client";

import { Card } from "@/components/ui/card";

interface DataTableProps {
  data: { time: string; value: number; cost: number }[];
}

export function DataTable({ data }: DataTableProps) {
  // Ensure the data exists
  if (!data || data.length === 0) {
    return (
      <Card className="p-6 bg-dark-700 text-white shadow-md hover:shadow-lg">
        <h3 className="font-semibold text-lg mb-4">Previous Data</h3>
        <p>No data available to display.</p>
      </Card>
    );
  }

  return (
    <Card className="p-6 bg-dark-700 text-white shadow-md hover:shadow-lg">
      <h3 className="font-semibold text-lg mb-4">Previous Data</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-700 text-sm text-gray-300">
          <thead>
            <tr className="bg-gray-800">
              <th className="p-3 border-b border-gray-600">Time</th>
              <th className="p-3 border-b border-gray-600">Energy (kWh)</th>
              <th className="p-3 border-b border-gray-600">Cost ($)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
                } hover:bg-gray-600`}
              >
                <td className="p-3 border-b border-gray-600">{row.time}</td>
                <td className="p-3 border-b border-gray-600">{row.value}</td>
                <td className="p-3 border-b border-gray-600">{row.cost.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
