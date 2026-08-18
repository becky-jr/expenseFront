import React, { useState } from 'react';
import { Header } from './components/Header';
import { AccountSummary } from './components/AccountSummary';
import { QuickAddForm } from './components/QuickAddForm';
import { TransactionList } from './components/TransactionList';
import { CategoryBreakdown } from './components/CategoryBreakdown';

import type { Transaction, TransactionCategory } from './types/type';


export const App = () => {

  let now = new Date()
  let todayDate = now.getDate()
  let thisMonth = now.getMonth()
  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  const [data, setData] = useState<Transaction[]>([

  ])


  // const expenseTotal = data.filter((item) => (
  //     console.log(item.amount)
  // ))

  const sumIncome = data.filter(item => item.type === 'income').reduce((acc, item) => acc + item.amount, 0);
  const sumExpense = data.filter(item => item.type === 'expense').reduce((acc, item) => acc + item.amount, 0);
  const totalBalance = sumIncome - sumExpense;

  const foodExp =
    data.filter(item => item.category === 'food' && item.type === 'expense').reduce((acc, item) => acc + item.amount, 0)

  const utilitiesExp =
    data.filter(item => item.category === 'utilities' && item.type === 'expense').reduce((acc, item) => acc + item.amount, 0)

  const transportExp =
    data.filter(item => item.category === 'transport' && item.type === 'expense').reduce((acc, item) => acc + item.amount, 0)

  // const foodPercentage = foodExp / sumExpense * 100
  const foodPercentage = sumExpense === 0 ? 0 : foodExp / sumExpense * 100;

  const utilitiesPercentage = sumExpense === 0 ? 0 : utilitiesExp / sumExpense * 100;

  const transportPercentage = sumExpense === 0 ? 0 : transportExp / sumExpense * 100;



  const [inp1, setInp1] = useState('')
  const [inp2, setInp2] = useState('')
  const [selectInp, setSelectInp] = useState<TransactionCategory | ''>('')

  console.log(data)

  const handleSubmit = (e: React.FormEvent) => {


    e.preventDefault();
    setInp1('')
    setInp2('')
    setSelectInp('')

    if (!selectInp || !inp1 || !inp2) {
      return;
    }

    setData([
      ...data,
      {
        id: data.length + 1,
        title: inp1,
        amount: Number(inp2.replace(/,/g, '')),
        type: selectInp !== 'income' ? 'expense' : 'income',
        category: selectInp,
        date: `${todayDate} ${months[thisMonth].slice(0, 3)}`
      }
    ]);
  };


  const deleteTransaction = (id: number) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <Header />
        <AccountSummary totalBalance={totalBalance} incomeTotal={sumIncome} expenseTotal={sumExpense} />
        <QuickAddForm
          onSubmit={handleSubmit}
          inp1={inp1}
          setInp1={setInp1}
          inp2={inp2}
          setInp2={setInp2}
          selectInp={selectInp}
          setSelectInp={setSelectInp} />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-7">
            <TransactionList transactions={data} deleteTransaction={deleteTransaction} />
          </div>
          <div className="md:col-span-5">
            <CategoryBreakdown categories={[
              { label: 'Food', percentage: foodPercentage, color: '#10b981' },
              { label: 'Utilities', percentage: utilitiesPercentage, color: '#0EA5E9' },
              { label: 'Transport', percentage: transportPercentage, color: '#F59E0B' },
            ]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;