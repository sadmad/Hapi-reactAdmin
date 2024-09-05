import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import the App component
import './index.css'; // Global CSS if needed

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App /> {/* Render the App component, which contains the routing */}
    </React.StrictMode>
);
