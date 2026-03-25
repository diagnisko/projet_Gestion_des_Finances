import { useMemo } from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import Card from '../components/dashboard/Card';
import LineChartFinance from '../components/dashboard/LineChartFinance';
import BarChartFinance from '../components/dashboard/BarChartFinance';
import PieChartFinance from '../components/dashboard/PieChartFinance';
import { useFinanceStorage } from '../hooks/useFinanceStorage';

export default function StatisticsPage() {
  const { income, expenses } = useFinanceStorage();

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

  return (
    <DashboardLayout title="Statistiques">
      <p className="text-[#cbd5e1] mb-4 text-sm">
        Vue synthétique de vos indicateurs et graphiques basés sur vos données enregistrées.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        <Card title="Solde" amount={`${balance.toLocaleString()}`} />
        <Card title="Revenus" amount={`${totalIncome.toLocaleString()}`} />
        <Card title="Dépenses" amount={`${totalExpenses.toLocaleString()}`} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <LineChartFinance data={compareChartData} />
        <BarChartFinance data={compareChartData} />
        <PieChartFinance data={pieData} />
      </div>
    </DashboardLayout>
  );
}
