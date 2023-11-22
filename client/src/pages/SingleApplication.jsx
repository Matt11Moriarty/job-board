import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client'; // new import

const GET_CANDIDATE = gql`
    query GetCandidate($id: ID!) {
        candidate(id: $id) {
            id
            firstName
            lastName
            phoneNumber
            email
            job {
                jobTitle
            }
        }
    }
`;

const SingleApplication = () => {
    const { id } = useParams(); // change firstName to id
    const { loading, error, data } = useQuery(GET_CANDIDATE, {
        variables: { id },
    });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error :(</div>;

    const candidate = data.candidate;

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