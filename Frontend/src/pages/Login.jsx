import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({ onLogout }) {
  const navigate = useNavigate();

  return (
    <nav className="bg-indigo-600 text-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold tracking-wide">AI Demand Forecaster</div>
      <div className="flex gap-6 items-center">
        <Link to="/dashboard" className="hover:text-indigo-200 transition">Dashboard</Link>
        <Link to="/upload" className="hover:text-indigo-200 transition">Upload Dataset</Link>
        <Link to="/forecast" className="hover:text-indigo-200 transition">Forecast</Link>
        <Link to="/reports" className="hover:text-indigo-200 transition">Reports</Link>
        <button 
          onClick={() => { onLogout(); navigate('/login'); }} 
          className="bg-red-500 hover:bg-red-600 px-4 py-1.5 rounded text-sm font-semibold transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}