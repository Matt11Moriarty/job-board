import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Company Logo</h1>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/jobs">Jobs</Link></li>
          <li><Link to="/create-users">Create Users</Link></li>
          <li><Link to="/job-applications">Job Applications</Link></li>
          <li><Link to="/post-jobs">Post Jobs</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;