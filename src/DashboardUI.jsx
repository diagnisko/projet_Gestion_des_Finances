import React, { useState } from 'react';

export default function Dashboard({ income, expenses, balance, addIncome, addExpense }) {
  const [newIncomeDesc, setNewIncomeDesc] = useState('');
  const [newIncomeAmount, setNewIncomeAmount] = useState('');
  const [newExpenseDesc, setNewExpenseDesc] = useState('');
  const [newExpenseAmount, setNewExpenseAmount] = useState('');

  const handleAddIncome = (e) => {
    e.preventDefault();
    if (newIncomeDesc && newIncomeAmount) {
      addIncome({
        id: Date.now(),
        description: newIncomeDesc,
        amount: parseFloat(newIncomeAmount)
      });
      setNewIncomeDesc('');
      setNewIncomeAmount('');
    }
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (newExpenseDesc && newExpenseAmount) {
      addExpense({
        id: Date.now(),
        description: newExpenseDesc,
        amount: parseFloat(newExpenseAmount)
      });
      setNewExpenseDesc('');
      setNewExpenseAmount('');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Gestion des Finances</h1>
      <div style={{ background: '#f0f8ff', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <h2>Solde: <span style={{ fontSize: '2em', color: balance >= 0 ? 'green' : 'red' }}>{balance.toFixed(2)} €</span></h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div>
          <h2>Revenus</h2>
          <ul style={{ textAlign: 'left' }}>
            {income.map(item => (
              <li key={item.id} style={{ margin: '5px 0' }}>
                {item.description}: <strong>{item.amount} €</strong>
              </li>
            ))}
          </ul>
          <form onSubmit={handleAddIncome}>
            <input
              type="text"
              placeholder="Description revenu"
              value={newIncomeDesc}
              onChange={(e) => setNewIncomeDesc(e.target.value)}
              style={{ marginRight: '10px', padding: '5px' }}
            />
            <input
              type="number"
              placeholder="Montant"
              value={newIncomeAmount}
              onChange={(e) => setNewIncomeAmount(e.target.value)}
              style={{ marginRight: '10px', padding: '5px' }}
            />
            <button type="submit" style={{ padding: '5px 10px' }}>Ajouter</button>
          </form>
        </div>

        <div>
          <h2>Dépenses</h2>
          <ul style={{ textAlign: 'left' }}>
            {expenses.map(item => (
              <li key={item.id} style={{ margin: '5px 0' }}>
                {item.description}: <strong>{item.amount} €</strong>
              </li>
            ))}
          </ul>
          <form onSubmit={handleAddExpense}>
            <input
              type="text"
              placeholder="Description dépense"
              value={newExpenseDesc}
              onChange={(e) => setNewExpenseDesc(e.target.value)}
              style={{ marginRight: '10px', padding: '5px' }}
            />
            <input
              type="number"
              placeholder="Montant"
              value={newExpenseAmount}
              onChange={(e) => setNewExpenseAmount(e.target.value)}
              style={{ marginRight: '10px', padding: '5px' }}
            />
            <button type="submit" style={{ padding: '5px 10px' }}>Ajouter</button>
          </form>
        </div>
      </div>
    </div>
  );
}
