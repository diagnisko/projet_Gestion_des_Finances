import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

const data = [
  { month: "Jan", revenu: 500000, depense: 300000 },
  { month: "Fev", revenu: 400000, depense: 250000 },
  { month: "Mar", revenu: 600000, depense: 350000 },
];

export default function LineChartFinance() {
  return (
    <div className="bg-white p-4 rounded-xl shadow h-64">
      <h2 className="font-bold mb-2">Évolution</h2>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenu" stroke="#22c55e" />
          <Line type="monotone" dataKey="depense" stroke="#ef4444" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}