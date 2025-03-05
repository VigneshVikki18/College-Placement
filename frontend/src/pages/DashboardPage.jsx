import React from 'react';
import StudentDashboard from '../components/StudentDashboard';
import CompanyDashboard from '../components/CompanyDashboard';

const DashboardPage = ({ userType }) => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            {userType === 'student' ? <StudentDashboard /> : <CompanyDashboard />}
        </div>
    );
};

export default DashboardPage;