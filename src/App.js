import React from 'react';
import './App.css';
// import PersonList from './testUser'
import Context from './context'
import UserList from './Widgets/UserList/UserList'
import Button from './Components/Buttons/Button.js'
import UserCard from './testUserCard'


function App() {
  return (
    <Context.Provider value={{ сount }}>
    <div className="App">
      Тихо должно быть в библиотеке
      <Modal />
      <UserList />
      <Button title="Добавить читателя" />

      <UserCard userCount = "51" />
    </div>
    </Context.Provider>
  );
}

export default App;
