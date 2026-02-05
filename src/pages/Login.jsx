import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../api/api";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser({ email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-gray-100 to-gray-200 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md transform hover:scale-105 transition-all duration-300">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Login
        </h2>

        {error && (
          <div className="bg-red-100 text-red-800 p-3 rounded mb-4 text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold shadow-lg transition"
          >
            Login
          </button>
        </form>

        <div className="mt-6 flex justify-between text-sm text-gray-500">
          <Link to="/forgot-password" className="text-indigo-600 font-medium hover:underline">
            Forgot Password?
          </Link>
          <Link to="/register" className="text-indigo-600 font-medium hover:underline">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
