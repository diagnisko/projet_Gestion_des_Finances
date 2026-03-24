export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-600 text-white p-5">
      <h1 className="text-2xl font-bold mb-10">FinanceApp</h1>

      <ul className="space-y-4">
        <li className="hover:bg-blue-500 p-2 rounded">Dashboard</li>
        <li className="hover:bg-blue-500 p-2 rounded">Transactions</li>
        <li className="hover:bg-blue-500 p-2 rounded">Statistiques</li>
        <li className="hover:bg-blue-500 p-2 rounded">Profil</li>
      </ul>
    </div>
  );
}