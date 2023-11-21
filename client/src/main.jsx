
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
        path: '/post-jobs',
        element: <PostJobs />
      },
      {
        path: '/login',
        element: <LoginPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

