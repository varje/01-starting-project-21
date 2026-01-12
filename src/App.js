import React from 'react';
import AddUser from './components/AddUser/AddUser';
import UsersList from './components/UsersList/UsersList';
import Card from './components/Card/Card';

function App() {
  return (
    <div>
      <Card>
        <AddUser />
      </Card>
      <Card>
        <UsersList />
      </Card>
    </div>
  );
}

export default App;
