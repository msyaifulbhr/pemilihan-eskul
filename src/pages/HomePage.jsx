import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function Home() {
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
            head: [['No', 'Nama Siswa', 'Jenis Kelamin', 'Rekomendasi']],
            body: [
                [1, 'M Syaiful Bahri', 'Laki-laki', 'OSIS'],
                [2, 'Ahmad Umar', 'Laki-laki', 'Pramuka'],
                [3, 'Dina Dinawati', 'Perempuan', 'Tari'],
            ],
        });
    
        doc.save('daftar_rekomendasi_siswa.pdf');
    };
    return (
        <div className="container mt-20 mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12">
            <div className="flex justify-between items-center">
            <h1>Selamat Datang, Admin</h1>
            <button 
                    onClick={generatePDF} 
                    className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 mb-4 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
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
                                Rekomendasi
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
                                OSIS
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
                                Pramuka
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
                                Tari
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;
