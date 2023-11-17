import styles from './Header.module.css';


const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Company Logo</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/jobs">Jobs</a></li>
          <li><a href="/apply">Apply</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;