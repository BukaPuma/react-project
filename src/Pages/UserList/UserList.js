import React, { useState, useEffect } from 'react'
import List from '../../Widgets/List/List'
import axios from 'axios'
import ListItem from '../../Components/ListItem/ListItem'
import { Link } from 'react-router-dom'

const tableProperties = {
    fieldNames: [
           "№", 
        "Фамилия", 
        "Имя", 
        "e-mail", 
        "Телефон",
        ""
    ],
    h1: "Список пользователей"
}

const fieldVisible =  {
    checkField : '',
    num:    "№", 
    lastName: "Фамилия", 
    firstName: "Имя", 
    email:"e-mail", 
    phone: "Телефон"
}

const typeList = 'user'
const typeListRus = 'Список пользователей'

const showHandle = (row, index) => {  
    // let num = num + 1; 
    return (<tr>
                
        <td>{index + 1}</td>
        <td>{row.lastName}</td>
        <td>{row.firstName}</td>
        <td>{row.email}</td>
        <td>{row.phone}</td>
        <td> <Link  key={row.id} to={{ pathname: `/${typeList}/${row.id}` }}>редактировать</Link> </td>


    </tr>)

 
}



export default function UserList() {
    return (
        <List tableProperties={tableProperties} typeList={typeList} typeListRus={typeListRus} showHandle={showHandle} fieldVisible={fieldVisible}  ></List>
    )

}
