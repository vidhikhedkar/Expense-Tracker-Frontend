import React from "react";

const SummaryCard = ({ summary }) => {
  return (
    <div className="bg-linear-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-xl shadow-lg mt-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Monthly Summary</h2>
      <p className="text-lg mb-2">Total Expense: <span className="font-bold">${summary.totalExpense || 0}</span></p>
      <div>
        {summary.byCategory && Object.keys(summary.byCategory).map((cat) => (
          <p key={cat} className="flex justify-between mb-1">
            <span>{cat}</span>
            <span>${summary.byCategory[cat]}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default SummaryCard;
