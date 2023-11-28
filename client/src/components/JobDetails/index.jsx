import React from 'react';
import './JobDetails.css';

const JobDetails = ({ job }) => {
  return (
    <div className="jobDetails">
      {/* <h2>Job Details</h2> */}
      <p><strong>Job Description:</strong> {job.jobDescription}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
    </div>
  );
};

export default JobDetails;