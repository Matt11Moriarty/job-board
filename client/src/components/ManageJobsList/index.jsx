import { Link } from 'react-router-dom';
import './ManageJobsList.css';
import { useQuery, useMutation } from '@apollo/client';
import { GET_JOBS } from '../../utils/queries';
import { REMOVE_JOB } from '../../utils/mutations';



const ManageJobsList = () => {
  const {loading, data} = useQuery(GET_JOBS)
  const jobList = data?.getAllJobs || []
  const [deleteJob] = useMutation(REMOVE_JOB);
  console.log(jobList)

  const handleDeleteJob = async (jobId) => {
    try {
        const { data } = await deleteJob({
            variables: {jobId: jobId},
        })
        alert("Job deleted successfully!");
        window.location.reload();
    } catch (err) {
        console.error(err);
    }
  }

  return (
    <div className="jobList">
      {jobList.map((job, index) => (
        <a key={index} to={`/job/${job.jobTitle}`} className="jobItem">
          <h2>{job.jobTitle}</h2>
          <p>Salary: {job.salary}</p>
          <p>{job.jobDescription}</p>
          <button className='btn light bg-warning' onClick={() => handleDeleteJob(job._id)}>Delete Job</button>
        </a>
      ))}
    </div>
  );
};
export default ManageJobsList;