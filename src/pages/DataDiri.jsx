
import React from 'react';

function DataDiri() {
    return (
        <div className="container mt-20 mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12">
            <form className="flex flex-col bg-stone-50 p-6 rounded-lg">
                <div className="flex justify-between mb-4">
                <label>Nama:</label>
                        <input type="text" name="nama" className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                <div className="flex justify-between mb-4">
                    <label>Jenis Kelamin:</label>
                    <select name="jenisKelamin" className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                    </select>
                </div>

                <div className="flex justify-between mb-4">
                    <label>NIS:</label>
                    <input type="number" name="nis" className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>

                <div className="flex justify-between mb-4">
                    <label>Kelas:</label>
                    <input type="text" name="kelas" className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>

                <div className="flex justify-between mb-4">
                    <label>Hobi:</label>
                    <select name="hobi" className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="seni">Seni</option>
                        <option value="olahraga">Olahraga</option>
                        <option value="bahasa">Bahasa</option>
                    </select>
                </div>

                <div className="flex justify-between mb-4">
                    <label>Pengetahuan:</label>
                    <select name="pengetahuan" className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="bagus">Bagus</option>
                        <option value="cukup">Cukup</option>
                        <option value="kurang">Kurang</option>
                    </select>
                </div>

                <div className="flex justify-between mb-4">
                    <label>Bakat:</label>
                    <select name="bakat" className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="ada">Ada</option>
                        <option value="tidak ada">Tidak Ada</option>
                    </select>
                </div>

                <div className="flex justify-between mb-4">
                    <label>Potensi:</label>
                    <select name="potensi" className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="ada">Ada</option>
                        <option value="tidak ada">Tidak Ada</option>
                    </select>
                </div>

                <div className="flex justify-between mb-4">
                    <label>Password:</label>
                    <input type="password" name="password" className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-end">Submit</button>
            </form>
        </div>
    );
}

export default DataDiri;