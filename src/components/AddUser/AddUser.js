import { useState } from 'react';
import classes from './AddUser.module.css';

function AddUser(props) {
  const [user, setUser] = useState({
    username: '',
    age: '',
  });

  function submitHandler(event) {
    event.preventDefault();
    props.onAddUser(user);
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
    <div className={classes.addUser}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={changeHandler} />
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number" onChange={changeHandler} />
        <button>Add User</button>
      </form>
    </div>
  );
}
export default AddUser;
