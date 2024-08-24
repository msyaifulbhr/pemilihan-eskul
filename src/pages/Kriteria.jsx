import React, { useState, useEffect } from 'react';
import { getKriteria } from '../utils/network-data';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function Kriteria() {
    const [kriteriaList, setKriteriaList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getKriteria();
            setKriteriaList(response.data);
        };
        fetchData();
    }, []);

    const generatePDF = () => {
        const doc = new jsPDF();

        doc.text('Daftar Kriteria', 14, 10);

        doc.autoTable({
            head: [['No', 'Nama Kriteria', 'Bobot']],
            body: kriteriaList.map((kriteria, index) => [
                index + 1,
                kriteria.nama,
                kriteria.bobot,
            ]),
        });

        doc.save('kriteria.pdf');
    };

    return (
        <div className="container mt-20 mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12">
            <div className="flex justify-between items-center">
                <h1>Daftar Kriteria</h1>
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
                                Nama Kriteria
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Bobot
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {kriteriaList.map((kriteria, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {index + 1}
                                </th>
                                <td className="px-6 py-4">
                                    {kriteria.nama}
                                </td>
                                <td className="px-6 py-4">
                                    {kriteria.bobot}
                                </td>
                                <td className="px-6 py-4 flex space-x-2">
                                    <button className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Edit
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

export default Kriteria;