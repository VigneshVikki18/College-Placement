import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import applicationService from '../services/applicationService';
import { useUser } from '../contexts/UserContext';

const ApplicationForm = () => {
    const { user } = useUser(); // Get the user data from the context
    const [formData, setFormData] = useState({
        studentId: '',
        name: '',
        email: '',
        resume: null,
        coverLetter: '',
    });
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.files[0],
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // if (!user || !user.studentId) {
        //     alert("User data is missing. Please log in.");
        //     return;
        // }

        const formDataToSubmit = new FormData();
        formDataToSubmit.append("studentId", user.studentId);
        formDataToSubmit.append("name", formData.name);
        formDataToSubmit.append("email", formData.email);
        formDataToSubmit.append("coverLetter", formData.coverLetter);
        formDataToSubmit.append("resume", formData.resume);

        console.log("Submitting form data:", Object.fromEntries(formDataToSubmit.entries())); // Debugging

        try {
            await applicationService.submitApplication(formDataToSubmit);
            alert("Application submitted successfully!");
            navigate('/dashboard');
        } catch (error) {
            console.error("Error:", error.message);
            alert(error.message);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4">Application Form</h2>
            {status && <p className="text-red-500 mb-4">{status}</p>}
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="studentId">
                        Student ID
                    </label>
                    <input
                        type="text"
                        name="studentId"
                        value={formData.studentId}
                        onChange={handleChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resume">
                        Resume
                    </label>
                    <input
                        type="file"
                        name="resume"
                        onChange={handleFileChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coverLetter">
                        Cover Letter
                    </label>
                    <textarea
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Submit Application
                </button>
            </form>
        </div>
    );
};

export default ApplicationForm;