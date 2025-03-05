import React, { useEffect, useState } from 'react';
import { getApplications, getInterviews } from '../services/applicationService';

const StudentDashboard = () => {
    const [applications, setApplications] = useState([]);
    const [interviews, setInterviews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const appData = await getApplications();
            const interviewData = await getInterviews();
            setApplications(appData);
            setInterviews(interviewData);
        };

        fetchData();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
            <section className="mb-6">
                <h2 className="text-xl font-semibold">Application Status</h2>
                <ul className="list-disc pl-5">
                    {applications.map((app) => (
                        <li key={app.id}>
                            {app.jobTitle} - {app.status}
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2 className="text-xl font-semibold">Interview Schedule</h2>
                <ul className="list-disc pl-5">
                    {interviews.map((interview) => (
                        <li key={interview.id}>
                            {interview.companyName} - {interview.date} at {interview.time}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default StudentDashboard;