import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export interface PieSlice {
  name: string;
  value: number;
}

interface Props {
  data: PieSlice[];
}

const COLORS = [
  '#3B82F6',
  '#22C55E',
  '#EF4444',
  '#C2410C',
  '#A855F7',
  '#06B6D4',
  '#EAB308',
  '#EC4899',
  '#14B8A6',
  '#F97316',
];

const formatAmount = (value: number) => `${value.toLocaleString('fr-FR')} FCFA`;

export default function PieChartFinance({ data }: Props) {
  const empty = data.length === 0;
  const chartData = empty
    ? [{ name: 'Aucune dépense enregistrée', value: 1 }]
    : data;
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-[#111827] border border-[#334155] p-4 rounded-xl shadow min-h-[16rem] flex flex-col text-[#f8fafc]">
      <h2 className="font-bold mb-1 shrink-0">Répartition des dépenses</h2>
      <p className="text-xs text-[#cbd5e1] mb-2 shrink-0">
        {empty ? 'Aucune donnée pour le moment.' : `Total: ${formatAmount(total)}`}
      </p>

      <div className="flex-1 min-h-[12rem] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={46}
              outerRadius={80}
              paddingAngle={2}
              label={
                empty
                  ? false
                  : ({ percent }) => `${Math.round((percent ?? 0) * 100)}%`
              }
              labelLine={false}
            >
              {chartData.map((_, i) => (
                <Cell key={i} fill={empty ? '#64748B' : COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              cursor={{ fill: '#33415555' }}
              contentStyle={{ color: '#f8fafc', backgroundColor: '#1e293b', border: '1px solid #334155' }}
              formatter={(value, name) => [
                typeof value === 'number' ? formatAmount(value) : String(value ?? ''),
                String(name ?? ''),
              ]}
              labelFormatter={(_, payload) =>
                payload && payload.length > 0 ? String(payload[0].name ?? '') : ''
              }
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
