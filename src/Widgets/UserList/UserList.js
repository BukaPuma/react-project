import React, { useState, useEffect } from 'react'
import List from '../../Utils/GetList'
import axios from 'axios'

const tableProperties = {
    fieldNames: [
        "", 
        "№", 
        "Фамилия", 
        "Имя", 
        "e-mail", 
        "Телефон"
    ],
    h1: "Список пользователей"
}

const fieldVisible =  {
    checkField : '',
    num:    "№", 
    lastName: "Фамилия", 
    fisrtName: "Имя", 
    email:"e-mail", 
    phone: "Телефон"
}

const typeList = 'user'
const typeListRus = 'Список пользователей'

const showHandle = (row, index) => {  


    // let num = num + 1; 
    return <tr>
    <td> <input type="checkbox" /> </td>
    <td>{index + 1}</td>
    <td>{row.lastName}</td>
    <td>{row.firstName}</td>
    <td>{row.email}</td>
    <td>{row.phone}</td>
  </tr>
  }



export default function UserList() {
    return (
        <List tableProperties={tableProperties} typeList={typeList} typeListRus={typeListRus} showHandle={showHandle} fieldVisible={fieldVisible} ></List>
    )

}
