import React, { useState, useEffect } from 'react';
import AllApplications from '../components/ApplicationList/index.jsx';
import ApplicationFilter from '../components/ApplicationFilter/index.jsx';
import './JobApplications.css';

const JobApplications = () => {

    const [filter, setFilter] = useState('time');
    const [search, setSearch] = useState('');

    useEffect(() => {
        const reloadCount = sessionStorage.getItem('reloadCount');
        if(reloadCount < 2) {
          sessionStorage.setItem('reloadCount', String(reloadCount + 1));
          window.location.reload();
        } else {
          sessionStorage.removeItem('reloadCount');
        }
      }, []);

    return (
        <div className="job-applications">
            <ApplicationFilter filter={filter} setFilter={setFilter} search={search} setSearch={setSearch} />
            <AllApplications filter={filter} search={search} />
        </div>
    );
};

export default JobApplications;