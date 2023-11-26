import React from 'react';
import { useParams } from 'react-router-dom';
import jobs from '../../../server/seeders/jobSeeds.json';
import ApplyForm from '../components/ApplyForm';
import JobDetails from '../components/JobDetails';
import './SingleJobPage.css';

const SingleJobPage = () => {
    let { title } = useParams();

    // Find the job with the matching title
    const job = jobs.find(job => job.jobTitle === title);

    // If no job is found, return a not found message
    if (!job) {
        return <p>Job not found</p>;
    }

    return (
        <div className="singleJobPage">
            <div className="jobTitle">
                <h1>{job.jobTitle}</h1>
            </div>
            <div>
                <div className="applyForm">
                    <h2>Apply</h2>
                    <ApplyForm job={job} />
                </div>
                    <JobDetails job={job} />
            </div>
        </div>
    );
};

export default SingleJobPage;