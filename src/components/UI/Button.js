import classes from './Button.module.css';

function Button() {
  return (
    <button type="submit" className={classes.button}>
      Add User
    </button>
  );
}

export default Button;
