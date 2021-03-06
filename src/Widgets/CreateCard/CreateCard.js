
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../Utils/Constants'
import GetCard from './CreateCard'
import {Link} from 'react-router-dom'


const CreateCard = (props) => {
    const { templateRecord, dataType, dataRecord, fillFields} = props
    
    const [data, setData] = React.useState('');
    
    
    const handleSubmit = event => {
        event.preventDefault()
        // setUsers( usersData );
        console.log(`${BASE_URL}/${dataType}`)
        axios.post(`${BASE_URL}/${dataType}`, data)
            .then(res => {
                console.log("результат", res)
            })
            .catch((e) =>
                console.log("Данные не загрузились", e))
    }


const handleChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setData(data => ({
        ...data, [name]: value
    }))

    console.log('изменение карточки', data);
}



const template = templateRecord.fields.map((field, key) => {
    return ( <li key={key}>
    
        <label htmlFor={field.name}> {field.caption} {(field.required) && '*'}:</label>
        <input type={field.inputType || "text"} name={field.name} placeholder={field.placeholder} pattern={field.pattern} onChange={handleChange} required={field.required} value={data[field.name]||''} />

    </li>)
}
)
return (
    <form className={"data_form"} onSubmit={handleSubmit} >
        <ul>
            <li>
                <h2> Добавить читателя </h2>
                <span className="required_notification">* Обязательные для заполнения поля</span>
            </li>
            {template}
            <li>
                <button className="green-button" type="submit">Добавить</button>
                <span className="user-card__answer" hidden> Данные изменены</span>
                    <Link className= "card__link" to="/userlist">К списку</Link>
                {/* <span className="user-card__answer" hidden>Читатель {user.lastName} {user.firstName} добавлен</span> */}
            </li>
        </ul>
    </form>
)}

export default CreateCard
