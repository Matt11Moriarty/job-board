import React from 'react';
import './JobDetails.css';

const JobDetails = ({ job }) => {
  return (
    <div className="jobDetails">
      <h2>Job Details</h2>
      <p><strong>Prerequisites:</strong> {job.prerequisites}</p>
      <p><strong>Skill Requirements:</strong> {job.skills}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Other Information:</strong> {job.otherInfo}</p>
    </div>
  );
};

export default JobDetails;