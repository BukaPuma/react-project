import React from 'react'

export default function CardItem(props)  {
    const {title, name, handleChange} = props
    return(
        <label>
            {title}
        <input type="text" name={name} onChange={handleChange} />
    </label>
    )
}