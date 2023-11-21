import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import auth from '../../utils/auth';

const Header = ({ isLoggedIn }) => {
  return (
    <header className="header">
      <h1 className="logo">Company Logo</h1>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/jobs">Jobs</Link></li>
          {isLoggedIn && <li><Link to="/create-users">Create Users</Link></li>}
          {isLoggedIn && <li><Link to="/job-applications">Job Applications</Link></li>}
          {isLoggedIn && <li><Link to="/post-jobs">Post Jobs</Link></li>}
          {!isLoggedIn && <li><Link to='login'>Login</Link> </li>}
          {isLoggedIn && <li onClick={auth.logout}>Logout</li>}
        </ul>
      </nav>
    </header>
  );
};

export default Header;