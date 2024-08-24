import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        // Cek apakah username dan password cocok dengan yang diharapkan
        if (username === 'admin' && password === 'admin123') {
            login(); // Set isAuthenticated ke true
            navigate('/'); // Arahkan ke Dashboard
        } else if (username === 'user' && password === 'user123') {
            login(); // Set isAuthenticated ke true
            navigate('/siswa-dashboard'); // Arahkan ke Dashboard Siswa
        } else {
            alert('Username atau password salah'); // Tampilkan pesan kesalahan
        }
    };

    return (
<div className="flex items-center justify-center h-screen">
  <form onSubmit={handleSubmit} className="max-w-sm w-full">
    <div className="mb-5">
      <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Username
      </label>
      <input
        type="text"
        id="username"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Masukan Username"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
    <div className="mb-5">
      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Password
      </label>
      <input
        type="password"
        id="password"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <button
      type="submit"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Login
    </button>
  </form>
</div>
    );
}

export default LoginPage;
