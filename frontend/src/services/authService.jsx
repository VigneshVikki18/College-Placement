import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Function to register a new user
export const register = async ({ email, password }) => {  // ✅ Pass as an object
    try {
        const response = await axios.post(`${API_URL}/auth/register`, { email, password }, {
            headers: { 'Content-Type': 'application/json' }  // ✅ Explicitly set headers
        });
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error.response?.data || error.message);
        throw new Error(error.response?.data?.message || 'Registration failed');
    }
};


// Function to login a user
export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, { email, password });
        return response.data;
    } catch (error) {
        throw new Error('Error logging in: ' + error.message);
    }
};

export default {
    register,
    login,
};