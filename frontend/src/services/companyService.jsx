import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Function to get job postings
export const getJobPostings = async () => {
    try {
        const response = await axios.get(`${API_URL}/companies/job-postings`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching job postings: ' + error.message);
    }
};

// Function to review an application
export const reviewApplication = async (applicationId, status) => {
    try {
        const response = await axios.put(`${API_URL}/companies/applications/${applicationId}`, { status });
        return response.data;
    } catch (error) {
        throw new Error('Error reviewing application: ' + error.message);
    }
};

// Function to fetch applications related to the company
export const getApplications = async () => {
    try {
        const response = await axios.get(`${API_URL}/companies/applications`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching applications: ' + error.message);
    }
};

const companyService = {
    getJobPostings,
    reviewApplication,
    getApplications,
};

export default companyService;