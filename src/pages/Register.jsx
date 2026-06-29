import React, { useState, useEffect } from "react";
import { registerUser, getProfile } from "../api/api";
import { useNavigate, Link } from "react-router-dom";
import { FaWallet } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    const checkLogin = async () => {
      try {
        await getProfile();
        navigate("/dashboard");
      } catch (err) { }
    };

    checkLogin();
  }, [navigate]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser(form);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="py-16 bg-slate-950 relative overflow-hidden flex items-center justify-center px-4">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-175 bg-indigo-600/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-125 h-125 bg-purple-600/20 rounded-full blur-[120px]" />

      {/* Register Card */}
      <div className="relative z-10 w-full max-w-md bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl p-8 my-8">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-linear-to-r from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg">
            <FaWallet className="text-white text-2xl" />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-white text-center">
          Create Account
        </h1>

        <p className="text-slate-400 text-center mt-2 mb-8">
          Start managing your expenses smarter.
        </p>

        {error && (
          <div className="mb-5 bg-red-500/10 border border-red-500/30 text-red-300 rounded-xl p-3 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
            required
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
            required
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            autoComplete="new-password"
            required
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
          />

          <button
            type="submit"
            className="w-full py-3 cursor-pointer rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold transition duration-300"
          >
            Create Account
          </button>

        </form>

        <p className="mt-6 text-center text-slate-400 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-400 hover:text-indigo-300 font-medium cursor-pointer"
          >
            Login
          </Link>
        </p>

       

      </div>
    </div>
  );
};

export default Register;