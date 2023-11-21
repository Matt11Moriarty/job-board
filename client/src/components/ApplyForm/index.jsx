import React, { useState } from 'react';
import styles from './ApplyForm.module.css';

const ApplyForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  // const [resume, setResume] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    //THIS WILL NEED TO CHANGE WHEN DEPLOYED
    const endpoint = 'http://localhost:3001/send-message';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          phoneNumber: phone,
          messageBody: 'Come in for an interview'
        })
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log(result);
      } else {
        const errorText = await response.text();
        console.error('Error', errorText);
      }

    } catch (error) {
      console.error('Error submitting form: ', error)
    }
  }

  return (
    <form className={styles.ApplyForm} onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Phone:
        <input type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      {/* <label>
        Resume:
        <input type="file" name="resume" onChange={(e) => setResume(e.target.files[0])} />
      </label> */}
      <input type="submit" value="Submit" />
    </form>
  );
  };
  
  export default ApplyForm;