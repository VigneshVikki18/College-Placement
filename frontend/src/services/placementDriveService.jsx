import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Create a new placement drive
export const createPlacementDrive = async (driveData) => {
    try {
        const response = await axios.post(API_URL, driveData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Get all placement drives
export const getPlacementDrives = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Get a specific placement drive by ID
export const getPlacementDriveById = async (driveId) => {
    try {
        const response = await axios.get(`${API_URL}/${driveId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Update a placement drive
export const updatePlacementDrive = async (driveId, driveData) => {
    try {
        const response = await axios.put(`${API_URL}/${driveId}`, driveData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Delete a placement drive
export const deletePlacementDrive = async (driveId) => {
    try {
        const response = await axios.delete(`${API_URL}/${driveId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};