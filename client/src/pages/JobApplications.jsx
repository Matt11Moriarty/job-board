import React, { useState } from 'react';
import AllApplications from '../components/ApplicationList/index.jsx';
import ApplicationFilter from '../components/ApplicationFilter/index.jsx';
import './JobApplications.css';

const JobApplications = () => {
    const [filter, setFilter] = useState('time');
    const [search, setSearch] = useState('');

    return (
        <div className="job-applications">
            <ApplicationFilter filter={filter} setFilter={setFilter} search={search} setSearch={setSearch} />
            <AllApplications filter={filter} search={search} />
        </div>
    );
};

export default JobApplications;