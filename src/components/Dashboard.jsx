import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Home from '../pages/HomePage';
import Siswa from '../pages/Siswa';
import Kriteria from '../pages/Kriteria';
import Kegiatan from '../pages/Kegiatan';
import Footer from '../components/Footer';

function Dashboard() {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/siswa" element={<Siswa />} />
                <Route path="/kriteria" element={<Kriteria />} />
                <Route path="/kegiatan" element={<Kegiatan />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default Dashboard;
