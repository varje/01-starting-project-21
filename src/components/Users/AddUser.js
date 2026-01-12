import { useState } from 'react';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';
import Button from '../UI/Button';

function AddUser(props) {
  const [user, setUser] = useState({
    username: '',
    age: '',
  });

  const [error, setError] = useState();

  function submitHandler(event) {
    event.preventDefault();
    if (user.username.trim().length === 0 || user.age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }

    if (+user.age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter age higher than 0.',
      });
      return;
    }

    props.onAddUser(user);
    setUser({ username: '', age: '' });
  }

  function changeHandler(event) {
    const { id, value } = event.target;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [id]: value,
      };
    });
  }

  function errorHandler() {
    setError(null);
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <div className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={user.username}
            onChange={changeHandler}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            value={user.age}
            onChange={changeHandler}
          />
          <Button type="submit">Add user</Button>
        </form>
      </div>
    </div>
  );
}
export default AddUser;
