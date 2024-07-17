import React from 'react';

function Siswa() {
    return (
        <div className="container mt-20 mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12">
            <h1>Daftar Siswa</h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-3 py-3">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nama Siswa
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Jenis Kelamin
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Hobi
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Pengetahuan
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Bakat
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Potensi
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                1
                            </th>
                            <td className="px-6 py-4">
                                M Syaiful Bahri
                            </td>
                            <td className="px-6 py-4">
                                Laki-laki
                            </td>
                            <td className="px-6 py-4">
                                Seni
                            </td>
                            <td className="px-6 py-4">
                                Bagus
                            </td>
                            <td className="px-6 py-4">
                                Ada
                            </td>
                            <td className="px-6 py-4">
                                Ada
                            </td>
                            <td className="px-6 py-4 flex space-x-2">
                                <button className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Edit
                                </button>
                                <button className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    Hapus
                                </button>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                2
                            </th>
                            <td className="px-6 py-4">
                                Ahmad Umar
                            </td>
                            <td className="px-6 py-4">
                                Laki-laki
                            </td>
                            <td className="px-6 py-4">
                                Olahraga
                            </td>
                            <td className="px-6 py-4">
                                Bagus
                            </td>
                            <td className="px-6 py-4">
                                Tidak
                            </td>
                            <td className="px-6 py-4">
                                Ada
                            </td>
                            <td className="px-6 py-4 flex space-x-2">
                                <button className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Edit
                                </button>
                                <button className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    Hapus
                                </button>
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                3
                            </th>
                            <td className="px-6 py-4">
                                Dina Dinawati
                            </td>
                            <td className="px-6 py-4">
                                Perempuan
                            </td>
                            <td className="px-6 py-4">
                                Bahasa
                            </td>
                            <td className="px-6 py-4">
                                Bagus
                            </td>
                            <td className="px-6 py-4">
                                Tidak
                            </td>
                            <td className="px-6 py-4">
                                Ada
                            </td>
                            <td className="px-6 py-4 flex space-x-2">
                                <button className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Edit
                                </button>
                                <button className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                    Hapus
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Siswa;