import React, { useState } from 'react';
import AddUser from './components/AddUser/AddUser';
import UsersList from './components/UsersList/UsersList';
import Card from './components/Card/Card';

function App() {
  const [users, setUsers] = useState([]);
  function addUserHandler(user) {
    setUsers((prevUsers) => {
      return [ ...prevUsers, user ];
    });
    console.log(users);
  }

  return (
    <div>
      <Card>
        <AddUser onAddUser={addUserHandler} />
      </Card>
      <Card>
        <UsersList />
      </Card>
    </div>
  );
}

export default App;
