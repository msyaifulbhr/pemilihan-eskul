// AuthContext.jsx
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userRole, setUserRole] = useState(null);

    const login = (username, password) => {
        // Lakukan pengecekan login disini, misalnya dengan username dan password yang diberikan
        if ((username === 'admin' && password === 'admin123') || (username === 'user' && password === 'user123')) {
            setUserRole(username);
        } else {
            alert('Login gagal. Periksa kembali username dan password.');
        }
    };

    const logout = () => {
        setUserRole(null);
    };

    return <AuthContext.Provider value={{ userRole, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);