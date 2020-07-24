import React from 'react';
import './App.css';

import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
// import PersonList from './testUser'
import ThemeContext, { ThemeProvider } from './context'

import UserList from './Pages/UserList/UserList'
import AuthorList from './Pages/AuthorList/AuthorList'
import BookList from './Pages/BookList/BookList'
import Button from './Components/Buttons/Button.js'
import CreateCard from './Utils/CreateCard'

import About from './about'
import Home from './MainPage'
import { USER_TEMPLATE } from './Templates/UserTemplate'
import UserCard from './Pages/UserCardCreate/UserCardCreate'
import ChangeCard from './Utils/ChangeCard'

const record = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: ''
}

function App() {
  return (
    <ThemeProvider value={'dark'} >
      <main>
      
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/" component={<ChangeCard dataTemplate={USER_TEMPLATE} dataType='user' dataCount="111" />}/> */}
            <Route path="/userlist" children={<UserList />} />
            <Route path="/authorlist" children={<AuthorList />} />
            <Route path="/booklist" children={<BookList />} />

            <Route path="/usercreate" children={<UserCard />} />
            {/* <Route path="/userchange" children={<ChangeCard templateRecord={USER_TEMPLATE} dataType='user' parId='11' dataRecord={record} />} /> */}
            <Route path="/user/:id" children={<UserCard dataRecord={record} />} />
            <Route path="/" children={<UserCard dataRecord={record} />} />



          </Switch>
        </Router>
     
      </main>

    </ThemeProvider>
  );
}

export default App;
