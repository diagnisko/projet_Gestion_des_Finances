type Props = {
  title: string;
  amount: number | string;
};

export default function Card({ title, amount }: Props) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{amount} FCFA</p>
    </div>
  );
}