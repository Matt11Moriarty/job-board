import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import auth from '../../utils/auth';
import LogoImage from '../../assets/images/logo-here.png';

const Header = ({ isLoggedIn }) => {
  return (
    <header className="header">
      <div>
      <img src={LogoImage} alt="Company Logo" className="logo" />
        <input type="checkbox" id="mobile-button" />
        <label htmlFor="mobile-button">Menu</label>
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            {isLoggedIn && <li><Link to="/create-users">Create Users</Link></li>}
            {isLoggedIn && <li><Link to="/job-applications">Job Applications</Link></li>}
            {isLoggedIn && <li><Link to="/post-jobs">Manage Jobs</Link></li>}
            {!isLoggedIn && <li><Link to='login'>Admin Login</Link> </li>}
            {isLoggedIn && <li id="logout" onClick={auth.logout}>Logout</li>}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;