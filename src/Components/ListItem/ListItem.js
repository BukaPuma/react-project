import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {ThemeContext} from '../../context'
const ListItem = (props) => {

    const { row, index, path } = props

     const { parId, setId } = useContext(ThemeContext);

    // setId(row.id)
     console.log(parId)
    return (
        <tbody>
            <tr>
                
                <td>{index + 1}</td>
                <td>{row.lastName}</td>
                <td>{row.firstName}</td>
                <td>{row.email}</td>
                <td>{row.phone}</td>
                <td> <Link  key={row.id} to={{ pathname: `/user/${row.id}` }}>редактировать</Link> </td>

            </tr>
        </tbody>
    )

}



// const template = templateRecord.fields.map((field) => {
//     return (<li>
//         <label for={field.name}> {field.caption} {(field.required) && '*'}:</label>
//         <input type={field.inputType || "text"} name={field.name} placeholder={field.placeholder} onChange={handleChange} required={field.required} value={data[field.name]||''} />

//     </li>)
// }

export default ListItem