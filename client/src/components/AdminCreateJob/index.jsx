import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_JOB } from '../../utils/mutations';

const CreateJobForm = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [salary, setSalary] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const [createJob, { error }] = useMutation(CREATE_JOB);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
  const jobObject = {jobTitle, salary:parseInt(salary), jobDescription}
  
    try {
      const { data } = await createJob({
        variables: {
        job: {...jobObject}
        },
      });

      console.log('Job created:', data.createJob);

      // Clear form fields after successful submission
      setJobTitle('');
      setSalary('');
      setJobDescription('');
    } catch (err) {
      console.error('Error creating job:', err.message);
    }
  };

  return (
    <form className="applyForm" onSubmit={handleSubmit}>
      <label>
        Job Title:
        <input
          type="text"
          value={jobTitle}
          onChange={e => setJobTitle(e.target.value)}
        />
      </label>
      <label>
        Salary:
        <input
          type="number"
          value={salary}
          onChange={e => setSalary(e.target.value)}
        />
      </label>
      <label>
        Job Description:
        <textarea
          value={jobDescription}
          onChange={e => setJobDescription(e.target.value)}
        />
      </label>
      <button type="submit" value="Create">
        Create Job
      </button>

      {error && <p>Error creating job: {error.message}</p>}
    </form>
  );
};

export default CreateJobForm;
