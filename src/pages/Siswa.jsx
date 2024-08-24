import React, { useState, useEffect } from 'react';
import { getSiswa, addSiswa, updateSiswa, deleteSiswa } from '../utils/network-data';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


function Siswa() {
    const [siswaList, setSiswaList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getSiswa();
            setSiswaList(response.data);
        };
        fetchData();
    }, []);

    const generatePDF = () => {
        const doc = new jsPDF();

        const logo = "images/logobk.png"; // Ganti dengan Base64 string dari logo sekolahmu
        doc.addImage(logo, 'PNG', 10, 10, 30, 30); // Posisi x, y, lebar, tinggi logo

        // Menambahkan nama sekolah
        doc.setFontSize(16);
        doc.text("SMK Bunda Kandung", 50, 20); // Posisi x, y dari teks

        // Menambahkan alamat sekolah
        doc.setFontSize(12);
        doc.text("Jl. Palapa Raya No. 3, Pasar Minggu, Jakarta Selatan", 50, 30);

        // Garis di bawah kop surat
        doc.line(10, 40, 200, 40); 

        doc.autoTable({
            startY: 50,
            head: [['No', 'Nama Siswa', 'Jenis Kelamin', 'Hobi', 'Pengetahuan','Bakat', 'Potensi']],
            body: siswaList.map((siswa, index) => [
                index + 1,
                siswa.nama,
                siswa.gender === 'L' ? 'Laki-laki' : 'Perempuan',
                siswa.hobi,
                siswa.pengetahuan,
                siswa.bakat,
                siswa.potensi
            ]),
        });

        doc.save('daftar-siswa.pdf');
    };

    return (
        <div className="container mt-20 mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12">
            <div className="flex justify-between items-center">
                <h1>Daftar Siswa</h1>
                <button 
                    onClick={generatePDF} 
                    className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm   
                px-3 py-2 mb-4 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                    Download PDF
                </button>
            </div>
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
                        {siswaList.map((siswa, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {index + 1}
                            </th>
                            <td className="px-6 py-4">
                                {siswa.nama}
                            </td>
                            <td className="px-6 py-4">
                                {siswa.gender === 'L' ? 'Laki-laki' : 'Perempuan'}
                            </td>
                            <td className="px-6 py-4">
                                {siswa.hobi}
                            </td>
                            <td className="px-6 py-4">
                                {siswa.pengetahuan}
                            </td>
                            <td className="px-6 py-4">
                                {siswa.bakat}
                            </td>
                            <td className="px-6 py-4">
                                {siswa.potensi}
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
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Siswa;