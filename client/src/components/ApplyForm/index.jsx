import React, { useState } from 'react';
import './ApplyForm.css';

const ApplyForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form className="applyForm" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Phone:
        <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <input type="submit" value="Apply" />
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