import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import StudentDashboard from './components/StudentDashboard';
import ApplicationForm from './components/ApplicationForm';
import Navigation from './components/Navigation';
import { UserProvider } from './contexts/UserContext';

const App = () => {
    return (
        <UserProvider>
            <Router>
                <Navigation />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/apply" element={<ApplicationForm />} />
                    <Route path="/student-dashboard" element={<StudentDashboard />} />
                    <Route path="/application-form" element={<ApplicationForm />} />
                    {/* Add other routes as needed */}
                </Routes>
            </Router>
        </UserProvider>
    );
};

export default App;