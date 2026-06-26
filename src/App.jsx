import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";

function App() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col">
      {/* Dynamic Modern Navigation bar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">💰</span>
          <span className="text-xl font-bold bg-linear-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
            SpendWise
          </span>
        </div>

        <nav className="flex items-center gap-1">
          <Link
            to="/"
            className={`px-4 py-2 rounded-xl text-sm font-medium transition ${isActive("/") ? "bg-indigo-50 text-indigo-600" : "text-slate-600 hover:bg-slate-100"
              }`}
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className={`px-4 py-2 rounded-xl text-sm font-medium transition ${isActive("/dashboard") ? "bg-indigo-50 text-indigo-600" : "text-slate-600 hover:bg-slate-100"
              }`}
          >
            Dashboard
          </Link>
          <Link
            to="/login"
            className="ml-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-xl shadow-sm transition"
          >
            Login
          </Link>
        </nav>
      </header>

      {/* Main View Wrapper */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

     
    </div>
  );
}

export default App;