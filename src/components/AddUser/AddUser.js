import classes from './AddUser.module.css'

function AddUser() {
  return (
    <div className={classes.addUser}>
      <form>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number" />
        <button>Add User</button>
      </form>
    </div>
  );
}
export default AddUser;
