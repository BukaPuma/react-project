import React, { useState, useEffect } from 'react'
import List from '../../Utils/List'
import axios from 'axios'
import ListItem from '../../Components/ListItem/ListItem'
import { Link } from 'react-router-dom'

const tableProperties = {
    fieldNames: [
           "№", 
        "Название", 
        "Информация", 
        "Автор",         
        "Читатель",
        ""

    ],
    h1: "Список книг"
}

const fieldVisible =  {
    checkField : '',
    num:    "№", 
    lastName: "Фамилия", 
    firstName: "Имя", 
    email:"e-mail", 
    phone: "Телефон"
}




const typeList = 'book'
const typeListRus = 'Список книг'

const showHandle = (row, index) => {  
    // let num = num + 1; 
    return (    <tr>
    
        <td>{index + 1}</td>  
        <td>{row.title}</td>                                                        
        <td>{row.info}</td>
        <td>'автор'</td>      
        <td>'Читает'</td>      
        <td> <Link  key={row.id} to={{ pathname: `/{typeList}}/${row.id}` }}>редактировать</Link> </td>
        </tr>)
}



export default function UserList() {
    return (
        <List tableProperties={tableProperties} typeList={typeList} typeListRus={typeListRus} showHandle={showHandle} fieldVisible={fieldVisible}  ></List>
    )

}
