import React from "react";

const SummaryCard = ({ summary }) => {
  return (
    <div className="bg-linear-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-2xl shadow-lg space-y-4">
      <h2 className="text-2xl font-semibold">Monthly Summary</h2>
      <p className="text-lg">
        Total Expense: <span className="font-bold">${summary.totalExpense || 0}</span>
      </p>
      {summary.byCategory &&
        Object.keys(summary.byCategory).map((cat) => (
          <div key={cat} className="flex justify-between bg-white/20 rounded-xl px-3 py-2">
            <span>{cat}</span>
            <span>${summary.byCategory[cat]}</span>
          </div>
        ))}
    </div>
  );
};

export default SummaryCard;
