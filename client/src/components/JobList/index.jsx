import styles from './Header.module.css';


const JobList = () => {
    const jobs = ['Job 1', 'Job 2', 'Job 3']; // Replace with real data
  
    return (
      <ul className={styles.jobList}>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    );
  };
  
  export default JobList;