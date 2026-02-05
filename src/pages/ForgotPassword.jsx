import React, { useState } from "react";
import { forgotPassword } from "../api/api";


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await forgotPassword({ email });
      setMessage(res.data.message);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Failed");
      setMessage("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-gray-100 to-gray-200 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md transform hover:scale-105 transition-all duration-300">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Forgot Password
        </h2>

        {message && (
          <div className="bg-green-100 text-green-800 p-3 rounded mb-4 text-center font-medium">
            {message}
          </div>
        )}
        {error && (
          <div className="bg-red-100 text-red-800 p-3 rounded mb-4 text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold shadow-lg transition"
          >
            Send Reset Link
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500 text-sm">
          Remembered your password?{" "}
          <a href="/login" className="text-indigo-600 font-medium hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
