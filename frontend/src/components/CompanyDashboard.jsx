import React, { useEffect, useState } from 'react';
import { getJobPostings, reviewApplication, getApplications } from '../services/companyService';

const CompanyDashboard = () => {
    const [jobPostings, setJobPostings] = useState([]);
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        fetchJobPostings();
        fetchApplications();
    }, []);

    const fetchJobPostings = async () => {
        const postings = await getJobPostings();
        setJobPostings(postings);
    };

    const fetchApplications = async () => {
        const apps = await getApplications();
        setApplications(apps);
    };

    const handleReviewApplication = async (applicationId, status) => {
        await reviewApplication(applicationId, status);
        fetchApplications(); // Refresh applications after review
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Company Dashboard</h1>
            <h2 className="text-xl font-semibold mb-2">Job Postings</h2>
            <ul className="mb-4">
                {jobPostings.map(posting => (
                    <li key={posting.id} className="border p-2 mb-2">
                        <h3 className="font-bold">{posting.title}</h3>
                        <p>{posting.description}</p>
                    </li>
                ))}
            </ul>
            <h2 className="text-xl font-semibold mb-2">Applications</h2>
            <ul>
                {applications.map(application => (
                    <li key={application.id} className="border p-2 mb-2">
                        <h3 className="font-bold">{application.studentName}</h3>
                        <p>Status: {application.status}</p>
                        <button 
                            onClick={() => handleReviewApplication(application.id, 'accepted')} 
                            className="bg-green-500 text-black px-2 py-1 mr-2"
                        >
                            Accept
                        </button>
                        <button 
                            onClick={() => handleReviewApplication(application.id, 'rejected')} 
                            className="bg-red-500 text-black px-2 py-1"
                        >
                            Reject
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CompanyDashboard;