import { useEffect, useState } from 'react';
import { useAuth } from './useAuth';

export interface FinanceEntry {
  id: number;
  description: string;
  amount: number;
}

const INCOME_KEY_PREFIX = 'financeflow-income-entries';
const EXPENSE_KEY_PREFIX = 'financeflow-expense-entries';

const DEFAULT_INCOME: FinanceEntry[] = [];
const DEFAULT_EXPENSES: FinanceEntry[] = [];

function parseEntries(raw: string | null): FinanceEntry[] | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return null;
    return parsed as FinanceEntry[];
  } catch {
    return null;
  }
}

export function useFinanceStorage() {
  const { user } = useAuth();
  const [income, setIncome] = useState<FinanceEntry[]>(DEFAULT_INCOME);
  const [expenses, setExpenses] = useState<FinanceEntry[]>(DEFAULT_EXPENSES);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (!user?.id) {
      setIncome(DEFAULT_INCOME);
      setExpenses(DEFAULT_EXPENSES);
      setHydrated(false);
      return;
    }

    const incomeKey = `${INCOME_KEY_PREFIX}-${user.id}`;
    const expenseKey = `${EXPENSE_KEY_PREFIX}-${user.id}`;
    const storedIncome = parseEntries(localStorage.getItem(incomeKey));
    const storedExpenses = parseEntries(localStorage.getItem(expenseKey));
    if (storedIncome !== null) setIncome(storedIncome);
    else setIncome(DEFAULT_INCOME);
    if (storedExpenses !== null) setExpenses(storedExpenses);
    else setExpenses(DEFAULT_EXPENSES);
    setHydrated(true);
  }, [user?.id]);

  useEffect(() => {
    if (!hydrated || !user?.id) return;
    localStorage.setItem(`${INCOME_KEY_PREFIX}-${user.id}`, JSON.stringify(income));
  }, [income, hydrated, user?.id]);

  useEffect(() => {
    if (!hydrated || !user?.id) return;
    localStorage.setItem(`${EXPENSE_KEY_PREFIX}-${user.id}`, JSON.stringify(expenses));
  }, [expenses, hydrated, user?.id]);

  return { income, setIncome, expenses, setExpenses, hydrated };
}
