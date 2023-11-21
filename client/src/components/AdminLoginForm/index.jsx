import React from 'react';
import './AdminLoginForm.css';

const LoginForm = () => {
  return (
    <form className="loginForm">
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <input type="submit" value="Log In" />
    </form>
  );
};

export default LoginForm;