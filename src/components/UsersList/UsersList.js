import classes from './UsersList.module.css';

function UsersList({ users }) {
  return (
    <div className={classes.usersList}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
