import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../utils/mutations';

const CreateUserForm = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [createUser, { error }] = useMutation(CREATE_USER);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const data = await createUser({
                variables: {
                    userName,
                    password
                }
            })
            setUserName('');
            setPassword('');
            alert("User created successfully!");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form className="applyForm" onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" value={userName} onChange={e => setUserName(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </label>
          <input onClick={createUser} type="submit" value="Create" />
        </form>
      );
};

export default CreateUserForm;