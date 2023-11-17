import styles from './ApplyForm.module.css';

const ApplyForm = () => {
    return (
      <form className={styles.ApplyForm}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Resume:
          <input type="file" name="resume" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  };
  
  export default ApplyForm;