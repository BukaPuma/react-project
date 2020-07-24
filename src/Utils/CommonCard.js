import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from './Constants'
import GetCard from './GetCard'
import {Link} from 'react-router-dom'


const CommonCard = (props) => {
    const { templateRecord, dataType, dataRecord, handleSubmit, fillFields} = props
    
    const [data, setData] = React.useState('');
    
    
    useEffect(() => {
      
        //Мы хотим получить данные только при пустом значении data
        if (data=='') { 
   
            console.log(props)
            axios.get(`${BASE_URL}${dataType}/11`)
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
        axios.post(`${BASE_URL}${dataType}`, data)
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
    return (
        <form className={"contact_form"} onSubmit={handleSubmit} >
            <ul>
                <li>
                    <h2> Редактировать читателя </h2>
                    <span className="required_notification">* Обязательные для заполнения поля</span>
                </li>
                {template}
                <li>
                    <button className="submit" type="submit">Добавить</button>
                    <span className="user-card__answer" hidden> Данные изменены</span>
                     <Link to="/userlist">К списку</Link>
                    {/* <span className="user-card__answer" hidden>Читатель {user.lastName} {user.firstName} добавлен</span> */}
                </li>
            </ul>
        </form>
    )
}

export default CommonCard

