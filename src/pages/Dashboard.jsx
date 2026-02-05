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
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Your Expenses</h1>
      <ExpenseForm onSubmit={handleAdd} />
      {/* <SummaryCard summary={summary} /> */}
      {/* <ExpenseList expenses={expenses} onDelete={handleDelete} /> */}
    </div>
  );
};

export default Dashboard;
