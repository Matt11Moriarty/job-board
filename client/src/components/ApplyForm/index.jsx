import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import './ApplyForm.css';
import { CREATE_CANDIDATE } from '../../utils/mutations';

const ApplyForm = ({ job }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [createCandidate, { error }] = useMutation(CREATE_CANDIDATE);
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await createCandidate({
         variables: {
          firstName,
          lastName,
          phoneNumber,
          email,
          job: {
            jobTitle: job.jobTitle,
            salary: job.salary,
            jobDescription: job.jobDescription
          }
         }
      })
      setFirstName('');
      setLastName('');
      setPhoneNumber('');
      setEmail('');
    } catch (err) {
      console.error(err);
    }

  };

  return (
    <form className="applyForm" onSubmit={handleSubmit}>
      <label>
        First Name:
      </label>
      <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
      <label>
        Last Name:
      </label>  
      <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
      <label>
        Phone:
      </label> 
      <input type="tel" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
      <label>
        Email:
      </label>  
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input onClick={createCandidate} type="submit" value="Apply" />
    </form>
  );
};

export default ApplyForm;

