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
import CreateCard from './Widgets/CreateCard/CreateCard'

import About from './about'
import Home from './MainPage'
import { USER_TEMPLATE } from './Templates/UserTemplate'
import UserCard from './Pages/UserCardCreate/UserCardCreate'
import UserCardChange from './Pages/UserCardChange/UserCardChange'
import UserCardCreate from './Pages/UserCardCreate/UserCardCreate'
import BookCardCreate from './Pages/BookCardCreate/BookCardCreate'
import AuthorCardCreate from './Pages/AuthorCardCreate/AuthorCardCreate'

import BookCardChange from './Pages/BookCardChange/BookCardChange'
import AuthorCardChange from './Pages/AuthorCardChange/AuthorCardChange'

// import ChangeCard from './Widgets/ChangeCard/ChangeCard'


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

                    {/* <Route path="/userchange" children={<ChangeCard templateRecord={USER_TEMPLATE} dataType='user' parId='11' dataRecord={record} />} /> */}
            {/* <Route path="/user/:id" children={<UserCard dataRecord={record} />} /> */}
            {/* <Route path="/" children={<UserCard dataRecord={record} />} /> */}
            <Route path="/user/:id" children={<UserCardChange  />} />
            <Route path="/usercreate" children={<UserCardCreate  />} />
            <Route path="/bookcreate" children={<BookCardCreate  />} />
            <Route path="/authorcreate" children={<AuthorCardCreate  />} />
            <Route path="/book/:id" children={<BookCardChange  />} />
            <Route path="/author/:id" children={<AuthorCardChange  />} />



          </Switch>
        </Router>
     
      </main>

    </ThemeProvider>
  );
}

export default App;
