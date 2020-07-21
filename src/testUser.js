import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {BASE_URL} from './Utils/Constants'

const tableProperties = {
  fieldNames : [
      "", "№", "Фамилия", "Имя", "e-mail", "Телефон"
   ],
   h1 : "Список пользователей"   
}
 
export default function PersonList() {
  const [users, setUsers] = React.useState({count: 0, rows:[]});
  useEffect(() => {
    axios.get(`${BASE_URL}user`)
      .then(res => {
        const usersData = res.data;            
        // console.log('myPeople',myPeople);
        setUsers( usersData );
        console.log(users.rows);     
      })
      .catch((e) => console.log("Пользователи не загрузились", e))      
    
  })
  return (
     <>
    <h1>{tableProperties.h1}</h1>    
      <table class="biblio-table"> 
      {tableProperties.fieldNames.map((caption) => 
      {return <th>{caption}</th>})
      }      
      
        
             { users.rows.map((person, id) => { id= id+1; return  <tr> 
                                                            <td> <input type="checkbox" /> </td>  
                                                            <td>{id}</td>  
                                                            <td>{person.lastName}</td>
                                                            <td>{person.firstName}</td>                                                             
                                                            <td>{person.email}</td>
                                                            <td>{person.phone}</td>
                                                             </tr>})}                
      </table>

      </>

  );
     
    
  }
  