import React, { useEffect, useState } from 'react';
import { getPlacementDrives, createPlacementDrive } from '../services/placementDriveService';

const PlacementDriveManager = () => {
    const [placementDrives, setPlacementDrives] = useState([]);
    const [driveDetails, setDriveDetails] = useState({ title: '', date: '', companies: [] });

    useEffect(() => {
        fetchPlacementDrives();
    }, []);

    const fetchPlacementDrives = async () => {
        const drives = await getPlacementDrives();
        setPlacementDrives(drives);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDriveDetails({ ...driveDetails, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createPlacementDrive(driveDetails);
        fetchPlacementDrives();
        setDriveDetails({ title: '', date: '', companies: [] });
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Placement Drive Manager</h1>
            <form onSubmit={handleSubmit} className="mb-4">
                <input
                    type="text"
                    name="title"
                    value={driveDetails.title}
                    onChange={handleInputChange}
                    placeholder="Drive Title"
                    className="border p-2 mb-2 w-full"
                    required
                />
                <input
                    type="date"
                    name="date"
                    value={driveDetails.date}
                    onChange={handleInputChange}
                    className="border p-2 mb-2 w-full"
                    required
                />
                <textarea
                    name="companies"
                    value={driveDetails.companies}
                    onChange={handleInputChange}
                    placeholder="Companies (comma separated)"
                    className="border p-2 mb-2 w-full"
                />
                <button type="submit" className="bg-blue-500 text-white p-2">Create Placement Drive</button>
            </form>
            <h2 className="text-xl font-semibold">Existing Placement Drives</h2>
            <ul>
                {placementDrives.map((drive) => (
                    <li key={drive.id} className="border p-2 mb-2">
                        <h3 className="font-bold">{drive.title}</h3>
                        <p>Date: {drive.date}</p>
                        <p>Companies: {drive.companies.join(', ')}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlacementDriveManager;