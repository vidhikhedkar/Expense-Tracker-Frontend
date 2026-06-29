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
    <div className=" bg-slate-100 pt-24 px-6">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800">
          Welcome Back
        </h1>
        <p className="text-slate-500 mt-2">
          Manage your daily expenses here.
        </p>
      </div>

      {/* Form + Summary */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ExpenseForm onSubmit={handleAdd} />
        </div>

        <SummaryCard summary={summary} />
      </div>

      {/* Expense List */}
      <div className="mt-10">
        <ExpenseList
          expenses={expenses}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );

};

export default Dashboard;
