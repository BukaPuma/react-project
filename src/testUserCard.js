import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from './Utils/Constants'


/// post
export default function UserCard(props) {

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

    const handleChange = event => {
        // this.setState({ fistame: event.target.value });
        // const usersData = {
        //     id : 100,
        //     firstName: 'Наталья',
        //     lastName: 'Руденко',
        //     email: 'melvia@mail.ru',
        //     phone: '+79292692469',
        //     createdAt: new Date(),
        //     updatedAt: new Date(),
        //     books: []
        // }
        const target = event.target;
        // const value = target.name === 'isGoing' ? target.checked : target.value;
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
        axios.post(`${BASE_URL}user`, user)
            .then(res => {
                console.log("результат", res)
            })
            .catch((e) =>
                console.log("Пользователи не загрузились", e))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                 Фамилия
                    <input type="text" name="firstName" onChange={handleChange} />
                </label>
                <label>
                    Имя
                    <input type="text" name="lastName" onChange={handleChange} />
                </label>
                <label>
                    Электронная почта
                    <input type="text" name="phone" onChange={handleChange} />
                </label>
                <label>
                    Телефон
                    <input type="text" name="phone" onChange={handleChange} />
                </label>

                <button type="submit">Add user</button>
            </form>
        </div>
    )

}