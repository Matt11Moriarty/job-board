import { Link } from 'react-router-dom';
import './JobList.css';
import { useQuery } from '@apollo/client';
import { GET_JOBS } from '../../utils/queries';

const JobList = () => {
  const {loading, data} = useQuery(GET_JOBS)
  const jobList = data?.getAllJobs || []
  console.log(jobList)
  return (
    <div className="jobList">
      {jobList.map((job, index) => (
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