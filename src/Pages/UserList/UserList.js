import React, { useState, useEffect } from 'react'
import List from '../../Utils/List'
import axios from 'axios'
import ListItem from '../../Components/ListItem/ListItem'

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
    return <ListItem row={row} index={index}  />
}



export default function UserList() {
    return (
        <List tableProperties={tableProperties} typeList={typeList} typeListRus={typeListRus} showHandle={showHandle} fieldVisible={fieldVisible}  ></List>
    )

}
