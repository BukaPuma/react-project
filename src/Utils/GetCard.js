import React from 'react'


import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from './Utils/Constants'

const data = {
    id: 50,
    firstName: 'Nata',
    lastName: 'Li',
    email: 'm@mail.ru',
    phone: '+7',
    createdAt: new Date(),
    updatedAt: new Date(),
    books: []
}
/// post
export default function cardCard(props) {
    const { typeCard, data } = props

    const [card, setCard] = React.useState(data)

    const handleChange = event => {
        const target = event.target;
        // const value = target.name === 'isGoing' ? target.checked : target.value;
        const name = target.name;
        const value = target.value;
        setCard(card => ({
            ...card, [name]: value
        }))
        // setcard(cardsData)
        // console.log('изменение карточки', card);
    }

    const handleSubmit = event => {
        event.preventDefault()
        // setcards( cardsData );
        setcard(card => ({
            ...card, id: props.count + 1
        }))
        axios.post(`${BASE_URL}${typeCard}`, card)
            .then(res => {
                console.log("результат", res)
            })
            .catch((e) =>
                console.log("Данные не загрузились", e))
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

                <button type="submit">Add card</button>
            </form>
        </div>
    )

}