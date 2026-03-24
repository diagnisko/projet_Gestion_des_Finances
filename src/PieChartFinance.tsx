import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Transport", value: 100000 },
  { name: "Nourriture", value: 200000 },
  { name: "Loisirs", value: 50000 },
];

export default function PieChartFinance() {
  return (
    <div className="bg-white p-4 rounded-xl shadow h-64">
      <h2 className="font-bold mb-2">Dépenses</h2>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={80} fill="#3b82f6" />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}