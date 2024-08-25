import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import NavigationUser from './NavigationUser';
import Home from '../pages/HomePage';
import Siswa from '../pages/Siswa';
import Kriteria from '../pages/Kriteria';
import Kegiatan from '../pages/Kegiatan';
import LoginPage from '../pages/LoginPage';
import RekomendasiSiswa from '../pages/RekomendasiSiswa';
import DataDiri from '../pages/DataDiri';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthContex';

function Dashboard() {
    const { userRole } = useAuth();

    if (!userRole) {
        return <LoginPage />;
    }

    return (
        <div>
            {userRole === 'admin' && <Navigation />}
            {userRole === 'user' && <NavigationUser />}
            <Routes>
                {userRole === 'admin' && (
                    <>
                        <Route path="/" element={<Home />} />
                        <Route path="/siswa" element={<Siswa />} />
                        <Route path="/kriteria" element={<Kriteria />} />
                        <Route path="/kegiatan" element={<Kegiatan />} />
                    </>
                )}
                {userRole === 'user' && (
                    <>
                        <Route path="/rekomendasi-siswa" element={<RekomendasiSiswa />} />
                        <Route path="/data-diri" element={<DataDiri />} />
                    </>
                )}
            </Routes>
            <Footer />
        </div>
    );
}

export default Dashboard;