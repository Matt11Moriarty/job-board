import React from "react";
import CreateUserForm from '../components/AdminCreateUser'
import "./CreateUsers.css";

const CreateUsers = () => {
    return (
        <div>
            <h1>Create User</h1>
            <CreateUserForm />
        </div>
    )
}

export default CreateUsers;