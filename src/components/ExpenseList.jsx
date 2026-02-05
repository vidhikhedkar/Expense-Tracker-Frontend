import React from "react";

const ExpenseList = ({ expenses, onDelete }) => {
  if (expenses.length === 0)
    return <p className="text-center text-gray-400">No expenses added yet!</p>;

  return (
    <div className="grid gap-6">
      {expenses.map((expense) => (
        <div
          key={expense._id}
          className="bg-white rounded-2xl shadow-lg p-5 flex justify-between items-center hover:shadow-xl transition"
        >
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{expense.title}</h3>
            <p className="text-gray-500">${expense.amount} • {expense.category}</p>
            <p className="text-gray-400 text-sm">{new Date(expense.date).toLocaleDateString()}</p>
          </div>
          <button
            onClick={() => onDelete(expense._id)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl shadow-md transition"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
