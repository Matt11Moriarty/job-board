import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';


const Header = () => {
  const currentPage = useLocation().pathname;


  return (
    <header className={styles.header}>
      <h1>Company Logo</h1>
      <nav>
        <ul>
          <li>
            <Link 
                to="/"
                className={currentPage === "/" ? "nav-link active text-info" : "nav-link text-light"}
              >
                Jobs 
              </Link>
          </li>
          <li>
            <Link 
                to="/create-users"
                className={currentPage === "/" ? "nav-link active text-info" : "nav-link text-light"}
              >
                Create Users 
              </Link>
          </li>
          <li>
            <Link 
                to="/job-applications"
                className={currentPage === "/" ? "nav-link active text-info" : "nav-link text-light"}
              >
                Job Applications 
              </Link>
          </li>
          <li>
            <Link 
                to="/post-jobs"
                className={currentPage === "/" ? "nav-link active text-info" : "nav-link text-light"}
              >
                Post Jobs
              </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;