import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import candidates from '../../../server/seeders/candidateSeeds.json';

const SingleApplication = () => {
    const { firstName } = useParams();
    const [candidate, setCandidate] = useState(null);

    useEffect(() => {
        const foundCandidate = candidates.find(candidate => candidate.firstName.toLowerCase() === firstName);
        setCandidate(foundCandidate);
    }, [firstName]);

    if (!candidate) {
        return <div>Loading...</div>;
    }

    return (
            <div>
                <h1>Candidate Info</h1>
                <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
                    <p><strong>Name:</strong> {candidate.firstName} {candidate.lastName}</p>
                    <p><strong>Phone:</strong> {candidate.phoneNumber}</p>
                    <p><strong>Email:</strong> {candidate.email}</p>
                    <p><strong>Job Title:</strong> {candidate.job.jobTitle}</p>
                </div>
            </div>
        );
};

export default SingleApplication;