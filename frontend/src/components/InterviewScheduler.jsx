import React, { useState, useEffect } from 'react';
import { scheduleInterview } from '../services/interviewService';

const InterviewScheduler = ({ studentId, jobId }) => {
    const [interviewDate, setInterviewDate] = useState('');
    const [interviewTime, setInterviewTime] = useState('');
    const [interviewFormat, setInterviewFormat] = useState('in-person');
    const [message, setMessage] = useState('');

    const handleSchedule = async (e) => {
        e.preventDefault();
        const interviewDetails = {
            studentId,
            jobId,
            date: interviewDate,
            time: interviewTime,
            format: interviewFormat,
        };

        try {
            const response = await scheduleInterview(interviewDetails);
            if (response.success) {
                setMessage('Interview scheduled successfully!');
            } else {
                setMessage('Failed to schedule interview. Please try again.');
            }
        } catch (error) {
            setMessage('An error occurred while scheduling the interview.');
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Schedule an Interview</h2>
            <form onSubmit={handleSchedule} className="mt-4">
                <div className="mb-4">
                    <label className="block text-sm font-medium">Date</label>
                    <input
                        type="date"
                        value={interviewDate}
                        onChange={(e) => setInterviewDate(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Time</label>
                    <input
                        type="time"
                        value={interviewTime}
                        onChange={(e) => setInterviewTime(e.target.value)}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Interview Format</label>
                    <select
                        value={interviewFormat}
                        onChange={(e) => setInterviewFormat(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    >
                        <option value="in-person">In-Person</option>
                        <option value="virtual">Virtual</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Schedule Interview
                </button>
            </form>
            {message && <p className="mt-4 text-red-500">{message}</p>}
        </div>
    );
};

export default InterviewScheduler;