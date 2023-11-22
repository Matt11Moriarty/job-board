
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import ApplyForm from './components/ApplyForm/index.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";

import App from './App.jsx'
import HomePage from './pages/HomePage';
import CreateUsers from './pages/CreateUsers';
import JobApplications from './pages/JobApplications';
import PostJobs from './pages/PostJobs';
import LoginPage from './pages/LoginPage';
import SingleJobPage from './pages/SingleJobPage';
import AllJobs from './pages/AllJobs';
import SingleApplication from './pages/SingleApplication';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/create-users',
        element: <CreateUsers />
      },
      {
        path: '/job-applications',
        element: <JobApplications />
      },
      {
        path: '/job-applications/:firstName',
        element: <SingleApplication />
      },
      {
        path: '/post-jobs',
        element: <PostJobs />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/job/:title',
        element: <SingleJobPage />
      },
      {
        path: '/jobs',
        element: <AllJobs />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

