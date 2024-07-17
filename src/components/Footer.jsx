import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-white rounded-lg shadow m-0 mt-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="/" className="hover:underline">SMK Bunda Kandung™</Link>. Aplikasi Sistem Rekomendasi Pemilihan Ekstrakurikuler.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link to="https://www.linkedin.com/in/msyaifulbhr/" target="_blank" rel="noopener noreferrer" className="hover:underline me-4 md:me-6">Muhamad Syaiful Bahri</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;