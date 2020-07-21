import React from 'react';
import './App.css';
// import PersonList from './testUser'

import UserList from './Widgets/UserList/UserList'
import Button from './Components/Buttons/Button.js'
import UserCard from './testUserCard'


function App() {
  return (
    <div className="App">
      Тихо должно быть в библиотеке
      <UserList />
      <Button title="Добавить читателя" />

      <UserCard userCount = "51" />
    </div>
  );
}

export default App;
