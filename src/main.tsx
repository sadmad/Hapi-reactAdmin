import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Admin from './pages/Admin';
import './index.css';

const isAuthenticated = (): boolean => {
    // Logic to check if the user is authenticated (e.g., check a token in local storage)
    return localStorage.getItem('authToken') !== null;
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route 
                    path="/admin/*" 
                    element={isAuthenticated() ? <Admin /> : <Navigate to="/login" />} 
                />
            </Routes>
        </Router>
    </React.StrictMode>
);
