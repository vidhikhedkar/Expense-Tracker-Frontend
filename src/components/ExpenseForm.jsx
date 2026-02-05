import React, { useState } from "react";

const ExpenseForm = ({ onSubmit, expense }) => {
  const [formData, setFormData] = useState({
    title: expense?.title || "",
    amount: expense?.amount || "",
    category: expense?.category || "",
    description: expense?.description || "",
    date: expense?.date ? expense.date.slice(0, 10) : "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: "",
      amount: "",
      category: "",
      description: "",
      date: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-lg p-8 space-y-4"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add Expense</h2>

      <input
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400"
      />
      <input
        name="amount"
        type="number"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        className="w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400"
      />
      <input
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        className="w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400"
      />
      <input
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400"
      />
      <input
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
        className="w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400"
      />

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl shadow-md font-semibold transition"
      >
        Save Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
