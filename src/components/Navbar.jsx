import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaWallet,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { getProfile, logoutUser } from "../api/api";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      try {
        await getProfile();
        setLoggedIn(true);
      } catch {
        setLoggedIn(false);
      }
    };

    checkUser();
  }, [location.pathname]);

  const handleLogout = async () => {
    try {
      await logoutUser();
      setLoggedIn(false);
      setMenuOpen(false);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-5">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
        >
          <div className="w-11 h-11 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg">
            <FaWallet className="text-white text-lg" />
          </div>

          <div>
            <h2 className="text-white font-bold text-lg">
              SpendWise
            </h2>

            <p className="text-slate-400 text-xs hidden sm:block">
              Smart Expense Tracker
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          {!loggedIn ? (
            <>
              <Link
                to="/login"
                className="px-5 py-2 rounded-xl border border-slate-700 text-slate-300 hover:border-indigo-500 hover:text-white transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-5 py-2 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white hover:scale-105 transition"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/dashboard"
                className="text-slate-300 hover:text-indigo-400 transition"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white transition"
              >
                <FaSignOutAlt />
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96" : "max-h-0"
          }`}
      >
        <div className="bg-slate-900 border-t border-slate-800 px-6 py-5 flex flex-col gap-4">

          {loggedIn && (
            <Link
              to="/dashboard"
              onClick={() => setMenuOpen(false)}
              className="text-slate-300 hover:text-indigo-400"
            >
              Dashboard
            </Link>
          )}

          {!loggedIn ? (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="text-center px-5 py-3 rounded-xl border border-slate-700 text-white"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="text-center px-5 py-3 rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 text-white"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="flex justify-center items-center gap-2 px-5 py-3 rounded-xl bg-red-600 text-white"
            >
              <FaSignOutAlt />
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;