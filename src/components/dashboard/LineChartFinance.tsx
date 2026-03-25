import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export interface ChartCompareRow {
  month: string;
  revenu: number;
  depense: number;
}

interface Props {
  data: ChartCompareRow[];
}

export default function LineChartFinance({ data }: Props) {
  const chartData = data.length > 0 ? data : [{ month: '—', revenu: 0, depense: 0 }];

  const tickStyle = { fill: '#d1d5db', fontSize: 11 };

  return (
    <div className="bg-[#111827] border border-[#334155] p-4 rounded-xl shadow min-h-[16rem] flex flex-col text-[#f8fafc]">
      <h2 className="font-bold mb-2 shrink-0">Revenus vs dépenses</h2>

      <div className="flex-1 min-h-[12rem] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <XAxis dataKey="month" tick={tickStyle} />
            <YAxis tick={tickStyle} tickFormatter={(v) => `${Number(v) / 1000}k`} />
            <Tooltip
              contentStyle={{ color: '#f8fafc', backgroundColor: '#1e293b', border: '1px solid #334155' }}
              formatter={(value) =>
                typeof value === 'number' ? value.toLocaleString('fr-FR') : String(value ?? '')
              }
            />
            <Line type="monotone" dataKey="revenu" stroke="#22C55E" strokeWidth={2} dot />
            <Line type="monotone" dataKey="depense" stroke="#EF4444" strokeWidth={2} dot />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
