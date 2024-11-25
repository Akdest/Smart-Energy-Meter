"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface EnergyChartProps {
  data: { time: string; value: number; voltage: number; current: number; cost: number }[]; // Include cost in data
  dataKey: string;
  stroke: string;
  title: string;
}

export const EnergyChart = ({ data, dataKey, stroke, title }: EnergyChartProps) => {
  return (
    <div className="bg-dark-800 p-6 sm:p-8 md:p-10 rounded-lg shadow-lg text-white">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={dataKey} stroke={stroke} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="voltage" stroke="#FF5733" />
          <Line type="monotone" dataKey="current" stroke="#C70039" />
          <Line type="monotone" dataKey="cost" stroke="#FFC300" /> {/* Added cost line */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
