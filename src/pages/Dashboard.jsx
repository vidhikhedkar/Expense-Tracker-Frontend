import React, { useEffect, useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import SummaryCard from "../components/SummaryCard";
import { addExpense, deleteExpense, getExpenses, getMonthlySummary } from "../api/api";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [summary, setSummary] = useState({ totalExpense: 0, byCategory: {} });

  const fetchExpenses = async () => {
    const res = await getExpenses();
    setExpenses(res.data);
  };

  const fetchSummary = async () => {
    const date = new Date();
    const res = await getMonthlySummary(date.getMonth() + 1, date.getFullYear());
    setSummary(res.data);
  };

  useEffect(() => {
    fetchExpenses();
    fetchSummary();
  }, []);

  const handleDelete = async (id) => {
    await deleteExpense(id);
    fetchExpenses();
    fetchSummary();
  };

  const handleAdd = async (data) => {
    await addExpense(data);
    fetchExpenses();
    fetchSummary();
  };

  return (
    <div className="pt-24 p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Your Expenses
      </h1>

      {/* Add Expense Form */}
      <div className="max-w-xl mx-auto mb-8">
        <ExpenseForm onSubmit={handleAdd} />
      </div>

      {/* Monthly Summary */}
      <div className="max-w-xl mx-auto mb-8">
        <SummaryCard summary={summary} />
      </div>

      {/* Expenses List */}
      <div className="max-w-3xl mx-auto">
        <ExpenseList expenses={expenses} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Dashboard;
