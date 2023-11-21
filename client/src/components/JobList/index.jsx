import { Link } from 'react-router-dom';
import './JobList.css';
import jobs from '../../../../server/seeders/jobSeeds.json';

const JobList = () => {
  return (
    <div className="jobList">
      {jobs.map((job, index) => (
        <Link key={index} to={`/job/${job.jobTitle}`} className="jobItem">
          <h2>{job.jobTitle}</h2>
          <p>Salary: {job.salary}</p>
          <p>{job.jobDescription}</p>
        </Link>
      ))}
    </div>
  );
};

export default JobList;