import { useState } from 'react';
import classes from './AddUser.module.css';
import ErrorModal from '../ErrorModal';
import Button from '../UI/Button';

function AddUser(props) {
  const [user, setUser] = useState({
    username: '',
    age: '',
  });

  function submitHandler(event) {
    event.preventDefault();
    if (
      user.username.trim().length === 0 ||
      user.age.trim().length === 0 ||
      +user.age < 1
    ) {
      return;
    }
    props.onAddUser(user);
    console.log(user);
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

  return (
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
      {(!user.username || !user.age) && <ErrorModal />}
    </div>
  );
}
export default AddUser;
