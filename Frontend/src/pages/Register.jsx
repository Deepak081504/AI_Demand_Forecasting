import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/auth/register', { username: email, password });
      setSuccess(true);
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      alert('Registration Failed!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Register</h2>
        {success && <p className="text-green-500 text-sm mb-4">Registration Successful! Redirecting...</p>}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email / Username</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border px-3 py-2 rounded focus:outline-indigo-500" required />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border px-3 py-2 rounded focus:outline-indigo-500" required />
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded font-semibold hover:bg-indigo-700 transition">Register</button>
        <p className="text-sm mt-4 text-center">Already have an account? <Link to="/login" className="text-indigo-600 hover:underline">Login</Link></p>
      </form>
    </div>
  );
}