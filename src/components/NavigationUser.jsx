import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavigationUser({ userRole }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    const getClassNames = (path) => {
        return location.pathname === path
            ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
            : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";
    };

    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src='../../images/logobk.png' className="h-8" alt="Logo SMK Bunda Kandung" />
                    <span className="self-center text-1xl font-semibold whitespace-nowrap dark:text-white">SMK Bunda Kandung</span>
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</button>
                    <button
                        data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-sticky"
                        aria-expanded={isMenuOpen}
                        onClick={handleMenuToggle}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div
                    className={`absolute top-full right-4 mt-2 ${isMenuOpen ? 'flex' : 'hidden'} flex-col items-end w-auto md:relative md:top-0 md:right-auto md:mt-0 md:flex md:flex-row md:items-center`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to="/rekomendasi-siswa" className={getClassNames("/rekomendasi-siswa")} aria-current={location.pathname === "/rekomendasi-siswa" ? "page" : undefined} onClick={handleLinkClick}>Rekomendasi Siswa</Link>
                        </li>
                        <li>
                            <Link to="/data-diri" className={getClassNames("/data-diri")} aria-current={location.pathname === "/data-diri" ? "page" : undefined} onClick={handleLinkClick}>Data Diri</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavigationUser;