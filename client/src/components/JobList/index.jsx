import { Link } from "react-router-dom";
import "./JobList.css";
import { useQuery } from "@apollo/client";
import { GET_JOBS } from "../../utils/queries";

const JobList = () => {
  const { loading, error, data } = useQuery(GET_JOBS);
  const jobList = data?.getAllJobs || [];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="jobList">
      {jobList.map((job, index) => {
        let jobDescription = job.jobDescription;
        if (jobDescription.length > 100) {
          jobDescription = jobDescription.substring(0, 125) + '...';
        }

        return (
          <Link key={index} to={`/job/${job.jobTitle}`} className="jobItem">
            <h2>{job.jobTitle}</h2>
            <p>Salary: {job.salary}</p>
            <p>{jobDescription}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default JobList;