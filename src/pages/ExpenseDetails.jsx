import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getExpenseById } from "../api/api";


const ExpenseDetails = () => {
  const { id } = useParams();
  const [expense, setExpense] = useState(null);

  const fetchExpense = async () => {
    try {
      const res = await getExpenseById(id);
      setExpense(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchExpense();
  }, [id]);

  if (!expense)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md transform hover:scale-105 transition-all duration-300">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
          {expense.title}
        </h2>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Amount:</span>
            <span className="text-gray-800 font-semibold">${expense.amount}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-medium">Category:</span>
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
              {expense.category}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Description:</span>
            <span className="text-gray-800">{expense.description || "-"}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600 font-medium">Date:</span>
            <span className="text-gray-800">
              {new Date(expense.date).toLocaleDateString()}
            </span>
          </div>
        </div>

        <button
          className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl font-semibold shadow-lg transition"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ExpenseDetails;
