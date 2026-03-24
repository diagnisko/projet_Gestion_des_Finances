import { useState } from 'react';
import Dashboard from './DashboardUI'; // adapte le chemin si besoin

export default function DashboardContainer() {
  const [income, setIncome] = useState([
    { id: 1, description: "Salaire", amount: 500 },
    { id: 2, description: "Bonus", amount: 150 },
  ]);

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Loyer", amount: 200 },
    { id: 2, description: "Courses", amount: 100 },
  ]);

  const addIncome = (item) => setIncome([...income, item]);
  const addExpense = (item) => setExpenses([...expenses, item]);

  const balance = income.reduce((a, i) => a + i.amount, 0)
                - expenses.reduce((a, e) => a + e.amount, 0);

  return (
    <Dashboard 
      income={income} 
      expenses={expenses} 
      balance={balance}
      addIncome={addIncome}
      addExpense={addExpense}
    />
  );
}
