import { useMemo } from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import { useFinanceStorage } from '../hooks/useFinanceStorage';

type Row = {
  key: string;
  rowId: number;
  label: string;
  amount: number;
  kind: 'revenu' | 'depense';
};

export default function TransactionsPage() {
  const { income, expenses } = useFinanceStorage();

  const rows = useMemo(() => {
    const list: Row[] = [
      ...income.map((i) => ({
        key: `r-${i.id}`,
        rowId: i.id,
        label: i.description,
        amount: i.amount,
        kind: 'revenu' as const,
      })),
      ...expenses.map((e) => ({
        key: `d-${e.id}`,
        rowId: e.id,
        label: e.description,
        amount: e.amount,
        kind: 'depense' as const,
      })),
    ];
    return list.sort((a, b) => b.rowId - a.rowId);
  }, [income, expenses]);

  return (
    <DashboardLayout title="Transactions">
      <div className="bg-[#111827] border border-[#334155] rounded-xl shadow p-4 sm:p-6">
        <p className="text-[#cbd5e1] mb-4 text-sm">
          Liste de toutes vos entrées (revenus et dépenses) enregistrées dans l’application.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-[#f8fafc]">
            <thead>
              <tr className="border-b border-[#334155]">
                <th className="py-3 pr-4 font-semibold">Type</th>
                <th className="py-3 pr-4 font-semibold">Libellé</th>
                <th className="py-3 text-right font-semibold">Montant</th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={3} className="py-8 text-center text-[#cbd5e1]">
                    Aucune transaction pour le moment.
                  </td>
                </tr>
              ) : (
                rows.map((r) => (
                  <tr key={r.key} className="border-b border-[#1e293b]">
                    <td className="py-3 pr-4 font-medium text-[#f8fafc]">
                      {r.kind === 'revenu' ? 'Revenu' : 'Dépense'}
                    </td>
                    <td className="py-3 pr-4 text-[#f8fafc]">{r.label}</td>
                    <td className="py-3 text-right font-medium tabular-nums text-[#f8fafc]">
                      {r.kind === 'revenu' ? '+' : '-'}
                      {r.amount.toLocaleString()} FCFA
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
