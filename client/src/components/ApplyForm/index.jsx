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
        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
      </label>
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
      </label>
      <label>
        Phone:
        <input type="tel" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <input onClick={createCandidate} type="submit" value="Apply" />
    </form>
  );
};

export default ApplyForm;

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   //THIS WILL NEED TO CHANGE WHEN DEPLOYED
  //   const endpoint = 'http://localhost:3001/send-message';

  //   try {
  //     const response = await fetch(endpoint, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         phoneNumber: phone,
  //         messageBody: 'Come in for an interview'
  //       })
  //     });
      
  //     if (response.ok) {
  //       const result = await response.json();
  //       console.log(result);
  //     } else {
  //       const errorText = await response.text();
  //       console.error('Error', errorText);
  //     }

  //   } catch (error) {
  //     console.error('Error submitting form: ', error)
  //   }
  // }