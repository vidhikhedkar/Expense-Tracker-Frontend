import React from "react";

const ExpenseList = ({ expenses, onDelete }) => {
  return (
    <div className="grid gap-4 mt-6">
      {expenses.map((expense) => (
        <div
          key={expense._id}
          className="bg-white rounded-xl shadow p-4 flex justify-between items-center hover:shadow-lg transition"
        >
          <div>
            <h3 className="font-bold text-lg text-gray-800">{expense.title}</h3>
            <p className="text-gray-600">${expense.amount} • {expense.category}</p>
            <p className="text-gray-400 text-sm">{new Date(expense.date).toLocaleDateString()}</p>
          </div>
          <button
            onClick={() => onDelete(expense._id)}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg shadow transition"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
