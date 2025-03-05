import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Schedule a new interview
export const scheduleInterview = async (interviewData) => {
    try {
        const response = await axios.post(`${API_URL}/schedule`, interviewData);
        return response.data;
    } catch (error) {
        throw new Error('Error scheduling interview: ' + error.message);
    }
};

// Get all interviews for a student
export const getStudentInterviews = async (studentId) => {
    try {
        const response = await axios.get(`${API_URL}/student/${studentId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching student interviews: ' + error.message);
    }
};

// Get all interviews for a company
export const getCompanyInterviews = async (companyId) => {
    try {
        const response = await axios.get(`${API_URL}/company/${companyId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching company interviews: ' + error.message);
    }
};

// Update interview status
export const updateInterviewStatus = async (interviewId, status) => {
    try {
        const response = await axios.put(`${API_URL}/update/${interviewId}`, { status });
        return response.data;
    } catch (error) {
        throw new Error('Error updating interview status: ' + error.message);
    }
};

// Send interview notifications
export const sendInterviewNotification = async (interviewId) => {
    try {
        const response = await axios.post(`${API_URL}/notify/${interviewId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error sending interview notification: ' + error.message);
    }
};