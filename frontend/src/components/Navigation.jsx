import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link to="/dashboard" className="text-white">Dashboard</Link>
                </li>
                <li>
                    <Link to="/apply" className="text-white">Apply</Link>
                </li>
                {/* Add other navigation links as needed */}
            </ul>
        </nav>
    );
};

export default Navigation;