import styles from './AdminLoginForm.module.css';

const SignIn = () => {
    return (
      <form className={styles.adminLoginForm}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <input type="submit" value="Sign In" />
      </form>
    );
  };
  
  export default SignIn;