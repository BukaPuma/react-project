import React, { useState } from 'react'

function Button(props) {
    return (
        <div>
            <button class="list__button gray">{props.title}</button>
        </div>
    )

}


export default Button