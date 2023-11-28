import React from "react";
import CreateJobForm from '../components/AdminPostJob'
import ManageJobsList from "../components/ManageJobsList";


const PostJobs = () => {
    return (
        <div>
            <h1>Post New Job:</h1>
            <CreateJobForm />
            <br />
            <h1>Manage Jobs Here</h1>
            <ManageJobsList />
        </div>
    )
}

export default PostJobs;