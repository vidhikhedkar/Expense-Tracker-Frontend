import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 shadow-inner border-t border-slate-100 ">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} ExpenseTracker. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-indigo-600">
            GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-indigo-600">
            LinkedIn
          </a>
          <a href="mailto:info@example.com" className="hover:text-indigo-600">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
