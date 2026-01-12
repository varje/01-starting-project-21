import classes from './UsersList.module.css';

function UsersList({ users }) {
  return (
    <div className={classes.users}>
      <ul>
        {users.map((user) => (
          <li key={user.username}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
