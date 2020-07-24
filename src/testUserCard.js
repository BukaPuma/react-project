import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from './Utils/Constants'


/// post
export default function UserCard(props) {

    const dataType = 'user'

    const [user, setUser] = React.useState({
        id: 50,
        firstName: 'Nata',
        lastName: 'Li',
        email: 'm@mail.ru',
        phone: '+7',
        createdAt: new Date(),
        updatedAt: new Date(),
        books: []
    });

    const handleChange = (event, user) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setUser(user =>({
            ...user, [name] : value}))            
        // setUser(usersData)
        console.log('изменение карточки', user);
    }    

    const handleSubmit = event => {
        event.preventDefault()
        // setUsers( usersData );
        setUser(user =>({
            ...user, id : props.userCount + 1 }))   
        axios.post(`${BASE_URL}${dataType}`, user)
            .then(res => {
                console.log("результат", res)
            })
            .catch((e) =>
                console.log("Данные не загрузились", e))
    }
    return (
            <form class="contact_form" onSubmit={handleSubmit}>
                <ul>
                <li>
                    <h2>Добавить читателя</h2>
                    <span className="required_notification">* Обязательные для заполнения поля</span>
                </li>
                    <li>
                        <label for="lastName"> Фамилия *:</label>
                        <input type="text" name="lastName" placeholder="Пушкин" onChange={handleChange} required />  
                        
                    </li>

                    <li>
                        <label for="firstName"> Имя *:</label>
                        <input type="text" name="firstName" placeholder="Александр" onChange={handleChange} required /> 
      
                    </li>
                    <li>
                        <label for="email"> e-mail:</label>
                        <input type="email" name="email" placeholder="pushkina@mail.ru" onChange={handleChange} />     
  
                    </li>                    
                    <li>
                        <label for="phone"> Телефон:</label>
                        <input type="tel" name="phone" placeholder="89292692469" pattern="\d{11}" onChange={handleChange} required />                    
  
                    </li>                    
                    <li>
                    <button className="submit" type="submit">Добавить</button> <span class="user-card__answer" hidden>Читатель {user.lastName} {user.firstName} добавлен</span>
                    </li>


                </ul>
                   
            </form>


    )

}