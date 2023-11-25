import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { CREATE_JOB } from '../../utils/mutations'

const CreateJobForm = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [salary, setSalary] = useState('');
    const [jobDescription, setJobDescription] = useState('');

    const [createJob, { error }] = useMutation(CREATE_JOB);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const data = await createJob({
                variables: {
                    job: {
                        jobTitle: jobTitle,
                        salary: parseInt(salary),
                        jobDescription: jobDescription
                    }
                }
            })
            setJobTitle('');
            setSalary('');
            setJobDescription('');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form className="applyForm" onSubmit={handleSubmit}>
          <label>
            Job Title:
            <input type="text" value={jobTitle} onChange={e => setJobTitle(e.target.value)} />
          </label>
          <label>
            Salary:
            <input type="text" value={salary} onChange={e => setSalary(e.target.value)} />
          </label>
          <label>
            Job Description:
            <input type="text" value={jobDescription} onChange={e => setJobDescription(e.target.value)} />
          </label>
          <input onClick={handleSubmit} type="submit" value="Create" />
        </form>
      );
}

export default CreateJobForm;