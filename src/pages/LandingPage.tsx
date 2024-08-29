import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => (
    <div>
        <h1>Welcome to Our Application</h1>
        <p>
            <Link to="/login">Login</Link> to access the admin panel.
        </p>
    </div>
);

export default LandingPage;
