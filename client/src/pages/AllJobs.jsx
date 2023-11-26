import React from 'react';
import './AllJobs.css';

import JobList from '../components/JobList';

const AllJobs = () => {
    return (
        <div>
            <h1 className="featured-jobs-title">Featured Jobs</h1>
            <JobList />
        </div>
    );
}

export default AllJobs;