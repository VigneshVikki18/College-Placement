import React from 'react';

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to the College Placement Management System</h1>
            <p className="text-lg mb-8">Your gateway to successful placements and career opportunities.</p>
            <div className="flex space-x-4">
                <a href="/register" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Register</a>
                <a href="/login" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Login</a>
            </div>
        </div>
    );
};

export default HomePage;