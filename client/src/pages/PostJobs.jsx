import React, { useEffect } from "react";
import CreateJobForm from '../components/AdminPostJob'
import ManageJobsList from "../components/ManageJobsList";


const PostJobs = () => {
    return (
        <div>
            <h1>Post New Job</h1>
            <CreateJobForm />
            <br />
            <h1>Manage Jobs</h1>
            <ManageJobsList />
        </div>
    )
}

export default PostJobs;