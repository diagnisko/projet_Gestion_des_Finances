type Props = {
  title: string;
  amount: number | string;
};

export default function Card({ title, amount }: Props) {
  return (
    <div className="bg-[#111827] border border-[#334155] p-4 rounded-xl shadow text-[#f8fafc]">
      <h3 className="text-sm font-semibold text-[#cbd5e1]">{title}</h3>
      <p className="text-2xl font-bold mt-1 tabular-nums">
        {amount} FCFA
      </p>
    </div>
  );
}
