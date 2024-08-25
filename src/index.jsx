import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import './styles/style.css';
import { AuthProvider } from './context/AuthContex';

const root = createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <BrowserRouter>
            <Dashboard />
        </BrowserRouter>
    </AuthProvider>  
);