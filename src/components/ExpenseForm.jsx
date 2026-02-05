import React, { useState } from "react";

const ExpenseForm = ({ onSubmit, expense }) => {
  const [formData, setFormData] = useState({
    title: expense?.title || "",
    amount: expense?.amount || "",
    category: expense?.category || "",
    description: expense?.description || "",
    date: expense?.date ? expense.date.slice(0, 10) : "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md mx-auto mt-6"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Add / Edit Expense</h2>
      <input
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg p-2 mb-3 w-full focus:ring-2 focus:ring-indigo-400"
      />
      <input
        name="amount"
        type="number"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg p-2 mb-3 w-full focus:ring-2 focus:ring-indigo-400"
      />
      <input
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg p-2 mb-3 w-full focus:ring-2 focus:ring-indigo-400"
      />
      <input
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg p-2 mb-3 w-full focus:ring-2 focus:ring-indigo-400"
      />
      <input
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg p-2 mb-4 w-full focus:ring-2 focus:ring-indigo-400"
      />
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white w-full py-2 rounded-lg shadow transition"
      >
        Save Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
