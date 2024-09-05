import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import AdminPage from './pages/AdminPage';

// Authentication check function
const isAuthenticated = (): boolean => {
    // Logic to check if the user is authenticated (e.g., check a token in local storage)
    return localStorage.getItem('authToken') !== null;
};

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Public routes */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />

                {/* Admin Dashboard - Protected route */}
                <Route 
                    path="/admin/*" 
                    element={isAuthenticated() ? <AdminPage /> : <Navigate to="/login" />} 
                />
            </Routes>
        </Router>
    );
};

export default App;
