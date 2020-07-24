import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {BASE_URL} from '../../Utils/Constants'
import AuthorList from '../../Pages/AuthorList/AuthorList';
import {Link} from 'react-router-dom'



export default function List({ tableProperties, typeListRus, typeList, showHandle }) {


  const [users, setUsers] = React.useState({ count: 0, rows: [] });
  const [authors, setAuthors] = React.useState([]);
  const [books, setBooks] = React.useState([]);
  

  const [elements, setElements] = React.useState({ count: 0, rows: [] });
  
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  useEffect(() => {
  { axios.get(`${BASE_URL}/author`, {
  cancelToken: source.token
})
  .then(res => {
    const elementsData = res.data;
    // console.log('myPeople',myPeople);
    setAuthors(elementsData);
    // console.log(elements.rows);
  })
  .catch((thrown) => {
    if (axios.isCancel(thrown)) {
      console.log('отмена загрузки');
    } else {
      console.log('ошибка');
    }
  })


  axios.get(`${BASE_URL}/user`, {
    cancelToken: source.token
  })
    .then(res => {
      const elementsData = res.data;
      // console.log('myPeople',myPeople);
      setUsers(elementsData);
      // console.log(elements.rows);
    })
    .catch((thrown) => {
      if (axios.isCancel(thrown)) {
        console.log('отмена загрузки');
      } else {
        console.log('ошибка');
      }
    })


    axios.get(`${BASE_URL}/book`, {
      cancelToken: source.token
    })
      .then(res => {
        const elementsData = res.data;
        // console.log('myPeople',myPeople);
        setBooks(elementsData);
        // console.log(elements.rows);
      })
      .catch((thrown) => {
        if (axios.isCancel(thrown)) {
          console.log('отмена загрузки');
        } else {
          console.log('ошибка');
        }
      })

    return function cleanup() {
      source.cancel('Operation canceled by the user.');
    }

}
        
})

  return (
    <>
      <h2>{tableProperties.h1}</h2>
      <table className="biblio-table">

    <thead>
      <tr>
        {tableProperties.fieldNames.map((caption, key) => { return <th>{caption}</th>  })
        }
      </tr>
    </thead>       
        {(typeList==='user') && users.rows.map(showHandle)}
        {(typeList==='author') && authors.map(showHandle)}
        {(typeList==='book') && books.map(showHandle)}
        
        <Link className="list__link" to="/">К списку</Link>
        <Link className="green-button"  to={{ pathname: `/${typeList}create` }}>Создать</Link> 
      </table>

    </>

  );


}
