import styles from './JobListItem.css';

const JobListItem = ({ job }) => {
    return (
      <div className={styles.jobListItem}>
        <h2>{job.title}</h2>
        <p>{job.location}</p>
      </div>
    );
  };
  
  export default JobListItem;