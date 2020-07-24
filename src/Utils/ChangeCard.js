import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from './Constants'
import {Link} from 'react-router-dom'
import { useParams, Route } from 'react-router-dom'

const ChangeCard = (props) => {

    const {id} = useParams();
    const { templateRecord, dataType, dataRecord, fillFields} = props
    
    const [data, setData] = React.useState('');    
    
    useEffect(() => {
      
        //Мы хотим получить данные только при пустом значении data
        if (data=='') { 
   
            console.log(props)
            axios.get(`${BASE_URL}/${id}/11`)
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

        axios.patch(`${BASE_URL}/${dataType}/{id}`, sendData)
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
                    <button className="green-button" type="submit">Добавить</button>
                    <span className="user-card__answer" hidden> Данные изменены</span>
                     <Link className="change-card__link" to="/userlist">К списку</Link>
                    {/* <span className="user-card__answer" hidden>Читатель {user.lastName} {user.firstName} добавлен</span> */}
                </li>
            </ul>
        </form>
    )
}

export default ChangeCard



// const NewProfile = hocUser({ email: 'asd.mail.ru' })(User)



// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import { BASE_URL } from './Constants'


// const h2 =  "Редактировать Читателя"

// export default function ChangeCard(props) {
//     const { templateRecord, dataType, dataRecord } = props    
//     const [data, setData] = React.useState({ ...dataRecord });
    
//     const handleChange = event => {
//         const target = event.target;
//         const name = target.name;
//         const value = target.value;
//         setData(data => ({
//             ...data, [name]: value
//         }))

//         console.log('изменение карточки', data);
//     }


//     const handleSubmit = event => {
//         event.preventDefault()
//         let sendData = {...data,  updatedAt : new Date()}
//         delete sendData['id']

//         axios.patch(`${BASE_URL}${dataType}/${dataRecord.id}`, sendData)
//             .then(res => {
//                 console.log("результат", res)                
//             })
//             .catch((e) =>
//                 console.log("Данные не загрузились", e))
//     }

//     const template = templateRecord.fields.map((field) => {
//         return ( <li>
      
//             <label htmlFor={field.name}> {field.caption} {(field.required) && '*'}:</label>
//             <input type={field.inputType || "text"} name={field.name} placeholder={field.placeholder} pattern={field.pattern} onChange={handleChange} required={field.required} value={data[field.name]||''} />

//         </li>)
//     }
//     )



//     return (
//         <form className={"contact_form"} onSubmit={handleSubmit}>
//             <ul>
//                 <li>
//                     <h2> Редактировать читателя </h2>
//                     <span className="required_notification">* Обязательные для заполнения поля</span>
//                 </li>
//                 {template}
//                 <li>
//                     <button className="submit" type="submit">Добавить</button>
//                     {/* <span className="user-card__answer" hidden>Читатель {user.lastName} {user.firstName} добавлен</span> */}
//                 </li>
//             </ul>
//         </form>

//     )
// }


