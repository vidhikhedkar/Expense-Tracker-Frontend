import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaWallet, FaUser, FaSignOutAlt, FaSignInAlt, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950 border-b border-slate-900/60 text-white transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex justify-between items-center relative">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2.5 group relative z-50">
          <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-indigo-500/30 transition-colors duration-300 shadow-inner">
            <FaWallet className="text-indigo-400 group-hover:scale-110 transition-transform duration-300" size={16} />
          </div>
          <span className="text-sm font-bold tracking-tight text-slate-100 group-hover:text-white transition-colors">
            Expense Tracker
          </span>
        </Link>

        {/* Desktop Links */}
        {token && (
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/dashboard"
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${isActive("/dashboard") ? "bg-slate-900 text-indigo-400" : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"
                }`}
            >
              Dashboard
            </Link>
            <Link
              to="/analytics"
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${isActive("/analytics") ? "bg-slate-900 text-indigo-400" : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"
                }`}
            >
              Analytics
            </Link>
          </div>
        )}

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {token ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-2 bg-slate-900 hover:bg-slate-850 border border-slate-800 px-4 py-2 rounded-xl transition-all duration-200 font-medium text-sm text-slate-200 hover:text-white cursor-pointer select-none"
              >
                <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs font-bold border border-indigo-500/30">
                  E
                </div>
                <span>Account</span>
              </button>

              {/* Dropdown Modal */}
              {dropdownOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setDropdownOpen(false)} />
                  <div className="absolute right-0 mt-2.5 w-44 bg-slate-950 border border-slate-900 rounded-xl shadow-xl overflow-hidden z-20 transition-all duration-200 origin-top-right p-1 animate-fade-in">
                    <button
                      onClick={handleLogout}
                      className="flex items-center px-3 py-2 w-full text-left rounded-lg text-sm text-rose-400 hover:bg-rose-500/10 hover:text-rose-300 transition duration-150 cursor-pointer"
                    >
                      <FaSignOutAlt className="mr-2.5" /> Logout
                    </button>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <Link
                to="/login"
                className="flex items-center space-x-1.5 px-4 py-2 text-slate-300 hover:text-white text-sm font-medium transition-colors"
              >
                <FaSignInAlt className="text-slate-400" />
                <span>Login</span>
              </Link>
              <Link
                to="/register"
                className="flex items-center space-x-1.5 px-4 py-2 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl text-sm font-semibold shadow-md shadow-indigo-600/15 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <FaUser size={10} />
                <span>Register</span>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white focus:outline-none relative z-50 transition-colors"
        >
          {mobileMenuOpen ? <FaTimes size={14} /> : <FaBars size={14} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 md:hidden" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute top-16 left-0 right-0 bg-slate-950 border-b border-slate-900 px-6 py-6 flex flex-col space-y-3 md:hidden z-40 shadow-2xl animate-fade-in-down">
            {token ? (
              <>
                <Link
                  to="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-slate-900 text-slate-300 hover:text-indigo-400 font-medium transition-colors"
                >
                  <span>Dashboard</span>
                </Link>
                <Link
                  to="/analytics"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-slate-900 text-slate-300 hover:text-indigo-400 font-medium transition-colors"
                >
                  <span>Analytics</span>
                </Link>
                <div className="h-px bg-slate-900 my-1" />
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-3 p-3 w-full text-left rounded-xl hover:bg-rose-950/20 text-rose-400 font-medium transition-colors"
                >
                  <FaSignOutAlt />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <div className="flex flex-col space-y-3 pt-2">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 p-3 border border-slate-800 rounded-xl text-slate-300 hover:text-white font-medium transition-colors"
                >
                  <FaSignInAlt />
                  <span>Login</span>
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 p-3 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg shadow-indigo-600/20 transition-colors"
                >
                  <FaUser size={11} />
                  <span>Register Free</span>
                </Link>
              </div>
            )}
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;