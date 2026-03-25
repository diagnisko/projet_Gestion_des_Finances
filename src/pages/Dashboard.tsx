import { useMemo, useState } from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import Card from '../components/dashboard/Card';
import LineChartFinance from '../components/dashboard/LineChartFinance';
import BarChartFinance from '../components/dashboard/BarChartFinance';
import PieChartFinance from '../components/dashboard/PieChartFinance';
import { useFinanceStorage } from '../hooks/useFinanceStorage';

export default function DashboardPage() {
  const { income, setIncome, expenses, setExpenses } = useFinanceStorage();

  const [newIncomeDesc, setNewIncomeDesc] = useState('');
  const [newIncomeAmount, setNewIncomeAmount] = useState('');
  const [newExpenseDesc, setNewExpenseDesc] = useState('');
  const [newExpenseAmount, setNewExpenseAmount] = useState('');
  const [message, setMessage] = useState('');

  const totalIncome = useMemo(() => income.reduce((a, i) => a + i.amount, 0), [income]);
  const totalExpenses = useMemo(() => expenses.reduce((a, e) => a + e.amount, 0), [expenses]);
  const balance = useMemo(() => totalIncome - totalExpenses, [totalIncome, totalExpenses]);

  const compareChartData = useMemo(
    () => [
      { month: 'Revenus', revenu: totalIncome, depense: 0 },
      { month: 'Dépenses', revenu: 0, depense: totalExpenses },
    ],
    [totalIncome, totalExpenses],
  );

  const pieData = useMemo(
    () => expenses.map((e) => ({ name: e.description, value: e.amount })),
    [expenses],
  );

  const addIncome = () => {
    if (!newIncomeDesc.trim() || !newIncomeAmount.trim() || Number(newIncomeAmount) <= 0) {
      setMessage('Veuillez saisir un revenu et un montant valides.');
      return;
    }

    setIncome((prev) => [
      ...prev,
      {
        id: Date.now(),
        description: newIncomeDesc.trim(),
        amount: Number(newIncomeAmount),
      },
    ]);
    setNewIncomeDesc('');
    setNewIncomeAmount('');
    setMessage('Revenu ajouté avec succès.');
    setTimeout(() => setMessage(''), 2500);
  };

  const addExpense = () => {
    if (!newExpenseDesc.trim() || !newExpenseAmount.trim() || Number(newExpenseAmount) <= 0) {
      setMessage('Veuillez saisir une dépense et un montant valides.');
      return;
    }

    setExpenses((prev) => [
      ...prev,
      {
        id: Date.now(),
        description: newExpenseDesc.trim(),
        amount: Number(newExpenseAmount),
      },
    ]);
    setNewExpenseDesc('');
    setNewExpenseAmount('');
    setMessage('Dépense ajoutée avec succès.');
    setTimeout(() => setMessage(''), 2500);
  };

  return (
    <DashboardLayout title="Tableau de bord">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <Card title="Solde" amount={`${balance.toLocaleString()}`} />
        <Card title="Revenus" amount={`${totalIncome.toLocaleString()}`} />
        <Card title="Dépenses" amount={`${totalExpenses.toLocaleString()}`} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <LineChartFinance data={compareChartData} />
        <BarChartFinance data={compareChartData} />
        <PieChartFinance data={pieData} />
      </div>

      <div className="bg-[#111827] border border-[#334155] p-4 sm:p-6 rounded-xl shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Gérer recettes et dépenses</h2>
        {message && <p className="mb-4 text-sm text-[#f8fafc]">{message}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Ajouter un revenu</h3>
            <input
              value={newIncomeDesc}
              onChange={(e) => setNewIncomeDesc(e.target.value)}
              placeholder="Description"
              className="w-full border border-[#334155] p-2 rounded mb-2 text-base max-w-full bg-[#0f172a] text-[#f8fafc] placeholder:text-[#94a3b8]"
            />
            <input
              type="number"
              value={newIncomeAmount}
              onChange={(e) => setNewIncomeAmount(e.target.value)}
              placeholder="Montant"
              className="w-full border border-[#334155] p-2 rounded mb-2 text-base max-w-full bg-[#0f172a] text-[#f8fafc] placeholder:text-[#94a3b8]"
            />
            <button
              type="button"
              onClick={addIncome}
              className="w-full bg-[#22C55E] text-white py-2 rounded hover:bg-[#16a34a]"
            >
              Ajouter revenu
            </button>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Ajouter une dépense</h3>
            <input
              value={newExpenseDesc}
              onChange={(e) => setNewExpenseDesc(e.target.value)}
              placeholder="Description"
              className="w-full border border-[#334155] p-2 rounded mb-2 text-base max-w-full bg-[#0f172a] text-[#f8fafc] placeholder:text-[#94a3b8]"
            />
            <input
              type="number"
              value={newExpenseAmount}
              onChange={(e) => setNewExpenseAmount(e.target.value)}
              placeholder="Montant"
              className="w-full border border-[#334155] p-2 rounded mb-2 text-base max-w-full bg-[#0f172a] text-[#f8fafc] placeholder:text-[#94a3b8]"
            />
            <button
              type="button"
              onClick={addExpense}
              className="w-full bg-[#EF4444] text-white py-2 rounded hover:bg-[#dc2626]"
            >
              Ajouter dépense
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#111827] border border-[#334155] p-4 sm:p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Historique</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Revenus</h3>
            <ul className="space-y-1">
              {income.map((item) => (
                <li key={item.id} className="flex justify-between gap-2 p-2 border border-[#334155] rounded text-sm">
                  <span className="truncate">{item.description}</span>
                  <strong className="shrink-0">+{item.amount.toLocaleString()} FCFA</strong>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-2">Dépenses</h3>
            <ul className="space-y-1">
              {expenses.map((item) => (
                <li key={item.id} className="flex justify-between gap-2 p-2 border border-[#334155] rounded text-sm">
                  <span className="truncate">{item.description}</span>
                  <strong className="shrink-0">-{item.amount.toLocaleString()} FCFA</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
