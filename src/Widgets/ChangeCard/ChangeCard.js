import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../Utils/Constants'
import {Link} from 'react-router-dom'
import { useParams, Route } from 'react-router-dom'
import { element } from 'prop-types'

const ChangeCard = (props) => {

    const {id} = useParams();

    const { templateRecord, dataType, dataRecord, fillFields , h2} = props
    
    const [data, setData] = React.useState('');    

    const [users, setUsers] = React.useState('');    
    const [books, setBooks] = React.useState('');    
    const [authors, setAuthors] = React.useState('');  

    
    
    
    useEffect(() => {
      
        //Мы хотим получить данные только при пустом значении data
        if (data=='') {   
            
            axios.get(`${BASE_URL}/user`)
            .then(res => {
              const elementsData = res.data;
              // console.log('myPeople',myPeople);
              setUsers(elementsData);
              // console.log(elements.rows);
            })
            .catch((e) => console.log(`Данные не загрузились`, e))

            axios.get(`${BASE_URL}/author`)
            .then(res => {
              const elementsData = res.data;
              // console.log('myPeople',myPeople);
              setAuthors(elementsData);
              // console.log(elements.rows);
            })
            .catch((e) => console.log(`Данные не загрузились`, e))

            axios.get(`${BASE_URL}/book`)
            .then(res => {
              const elementsData = res.data;
              // console.log('myPeople',myPeople);
              setBooks(elementsData);
              // console.log(elements.rows);
            })
            .catch((e) => console.log(`Данные не загрузились`, e))
            axios.get(`${BASE_URL}/${dataType}/${id}`)
            .then(res => {
              const elementsData = res.data;
              // console.log('myPeople',myPeople);
              setData(elementsData);
              // console.log(elements.rows);
            })
            .catch((e) => console.log(`Данные не загрузились`, e))
 } })
    const handleChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setData(data => ({
            ...data, [name]: value
        }))

        console.log('изменение карточки', data);
    }


    const handleSubmit = event => {       
        event.preventDefault()
        let sendData = {...data,  updatedAt : new Date()}
        delete sendData['id']

        axios.patch(`${BASE_URL}/${dataType}/${id}`, sendData)
            .then(res => {
                console.log("результат", res)                
            })
            .catch((e) =>
                console.log("Данные не загрузились", e))
    }


    const template = templateRecord.fields.map((field, key) => {
        return ( <li key={key}>
      
            <label htmlFor={field.name}> {field.caption} {(field.required) && '*'}:</label>
            <input type={field.inputType || "text"} name={field.name} placeholder={field.placeholder} pattern={field.pattern} onChange={handleChange} required={field.required} value={data[field.name]||''} />

        </li>)
    }
    )

    const listBooks = ''

    return (
        <form className={"data_form"} onSubmit={handleSubmit} >
            <ul>
                <li>
                    <h2> {templateRecord.h2} </h2>
                    <span className="required_notification">* Обязательные для заполнения поля</span>
                </li>
                {template}
                <li>
                    
                    {data.hasOwnProperty('books')&& <li><h2>Книги:</h2></li>}
                    {(data.hasOwnProperty('books') ) && data.books.map((bookItem) => {return <li> {(books[bookItem.id])?books[bookItem.id].title:'-'} </li>})}
                    <Link className="change-card__link" to={{ pathname: `/${dataType}list`}}>К списку</Link>
                    <button className="green-button" type="submit">Подтвердить изменения</button>
                    <span className="user-card__answer" hidden> Данные изменены</span>          
                     
                    {/* <span className="user-card__answer" hidden>Данные добавлены</span> */}
                </li>
            
            
            </ul>
        </form>
    )
}

export default ChangeCard


