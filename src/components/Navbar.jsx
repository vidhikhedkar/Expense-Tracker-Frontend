import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaWallet, FaUser, FaSignOutAlt, FaSignInAlt } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-linear-to-r from-blue-600 to-indigo-600 text-white p-4 shadow-md flex justify-between items-center relative">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2 text-2xl font-bold hover:text-gray-200">
        <FaWallet className="text-yellow-400" size={28} />
        <span>Expense Tracker</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center space-x-4">
        {token ? (
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-1 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition font-medium"
            >
              <FaUser />
              <span>Account</span>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg">
                <button
                  onClick={handleLogout}
                  className="flex items-center px-4 py-2 w-full hover:bg-gray-200 rounded"
                >
                  <FaSignOutAlt className="mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link
              to="/login"
              className="flex items-center space-x-1 px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-medium"
            >
              <FaSignInAlt />
              <span>Login</span>
            </Link>
            <Link
              to="/register"
              className="flex items-center space-x-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition font-medium"
            >
              <FaUser />
              <span>Register</span>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
