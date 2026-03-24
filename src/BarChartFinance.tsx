import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", revenu: 500000, depense: 300000 },
  { month: "Fev", revenu: 400000, depense: 250000 },
  { month: "Mar", revenu: 600000, depense: 350000 },
];

export default function BarChartFinance() {
  return (
    <div className="bg-white p-4 rounded-xl shadow h-64">
      <h2 className="font-bold mb-2">Comparaison</h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="revenu" fill="#22c55e" />
          <Bar dataKey="depense" fill="#ef4444" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}