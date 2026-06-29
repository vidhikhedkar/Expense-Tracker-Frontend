import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getProfile, loginUser } from "../api/api";
import { FaWallet } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const checkLogin = async () => {
      try {
        await getProfile();
        navigate("/dashboard");
      } catch (err) {}
    };

    checkLogin();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await loginUser({
        email,
        password,
      });

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="py-16 bg-slate-950 relative overflow-hidden flex items-center justify-center px-4">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-175 bg-indigo-600/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-125 h-125 bg-purple-600/20 rounded-full blur-[120px]" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl p-8 my-10">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-linear-to-r from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg">
            <FaWallet className="text-white text-2xl" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-white text-center">
          Welcome Back
        </h1>

        <p className="text-slate-400 text-center mt-2 mb-8">
          Login to manage your expenses
        </p>

        {error && (
          <div className="mb-5 bg-red-500/10 border border-red-500/30 text-red-300 rounded-xl p-3 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl cursor-pointer bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold transition duration-300"
          >
            Login
          </button>

        </form>

        <div className="flex justify-between mt-6 text-sm">

          <Link
            to="/forgot-password"
            className="text-indigo-400 hover:text-indigo-300"
          >
            Forgot Password?
          </Link>

          <Link
            to="/register"
            className="text-indigo-400 hover:text-indigo-300"
          >
            Register
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Login;