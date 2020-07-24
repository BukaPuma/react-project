import React, { useState, useEffect } from 'react'
import List from '../../Widgets/List/List'
import axios from 'axios'
import ListItem from '../../Components/ListItem/ListItem'
import { Link } from 'react-router-dom'
import {formatDate} from '../../Utils/Constants'

const tableProperties = {
    fieldNames: [
         "№", 
        "Фамилия", 
        "Имя", 
        "Информация", 
        "Дата рождения",
        "Книги",
        ""
    ],
    h1: "Список авторов"
}

const fieldVisible =  {
    checkField : '',
    num:    "№", 
    lastName: "Фамилия", 
    firstName: "Имя", 
    email:"e-mail", 
    phone: "Телефон"
}

const typeList = 'author'
const typeListRus = 'Список пользователей'
function getBooks(books) {
    let idBooks = ''
    books.forEach(element => {
        idBooks += element.id + '/'
    })
    return idBooks
}


const showHandle = (row, index) => {  
    // let num = num + 1; 
    return (
    <tr>
    
    <td>{index + 1}</td>  
    <td>{row.lastName}</td>
    <td>{row.firstName}</td>                                                             
    <td>{row.info}</td>
    <td>{formatDate(row.birthday)}</td>
    {/* <td>{ getBooks(row.books)}</td> */}
    <td>книги</td>
    <td> <Link  key={row.id} to={{ pathname: `/author/${row.id}` }}>редактировать</Link> </td>
    </tr>
    
    )
}



export default function AuthorList() {
    return (
        <List tableProperties={tableProperties} typeList={typeList} typeListRus={typeListRus} showHandle={showHandle} fieldVisible={fieldVisible}  ></List>
    )

}
