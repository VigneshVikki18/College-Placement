import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Function to submit a new application
export const submitApplication = async (formData) => {
    try {
        const response = await axios.post('http://localhost:5000/api/applications/submit', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || 'Error submitting application');
    }
};
const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('studentId', user?.studentId || '');  // Ensure it's added
    formData.append('name', name);
    formData.append('email', email);
    formData.append('coverLetter', coverLetter);
    formData.append('resume', resumeFile);

    console.log("Submitting form data:", Object.fromEntries(formData.entries())); // Debugging

    try {
        await submitApplication(formData);
        alert('Application submitted successfully!');
    } catch (error) {
        console.error("Error:", error.message);
        alert(error.message);
    }
};



// Function to get application status by student ID
export const getApplicationStatus = async (studentId) => {
    try {
        const response = await axios.get(`${API_URL}/applications/status/${studentId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching application status: ' + error.message);
    }
};

// Function to update application status
export const updateApplicationStatus = async (applicationId, statusData) => {
    try {
        const response = await axios.put(`${API_URL}/applications/update/${applicationId}`, statusData);
        return response.data;
    } catch (error) {
        throw new Error('Error updating application status: ' + error.message);
    }
};

// Function to get all applications for a specific student
export const getApplicationsByStudent = async (studentId) => {
    try {
        const response = await axios.get(`${API_URL}/applications/student/${studentId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching applications: ' + error.message);
    }
};

// Function to get all applications
export const getApplications = async () => {
    try {
        const response = await axios.get(`${API_URL}/applications`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching applications: ' + error.message);
    }
};

// Function to get all interviews
export const getInterviews = async () => {
    try {
        const response = await axios.get(`${API_URL}/applications/interviews`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching interviews: ' + error.message);
    }
};

const applicationService = {
    submitApplication,
    getApplicationStatus,
    updateApplicationStatus,
    getApplicationsByStudent,
    getApplications,
    getInterviews,
};

export default applicationService;