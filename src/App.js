import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import Card from './components/Card/Card';
import ErrorModal from './components/ErrorModal';

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
        <UsersList users={users}/>
      </Card>
    </div>
  );
}

export default App;
