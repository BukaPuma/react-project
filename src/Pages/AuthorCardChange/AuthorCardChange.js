import React from 'react'
import {Link} from 'react-router-dom'
import {AUTHOR_TEMPLATE} from '../../Templates/AuthorTemplate'
import ChangeCard from '../../Widgets/ChangeCard/ChangeCard'

const  AuthorCardChange = (props) => {
    const record = {    
        firstName: '',
        lastName: '',
        info: '',
        birthday:new Date()  
        
        }
        return (<ChangeCard  dataRecord={record} dataType='author' templateRecord={AUTHOR_TEMPLATE} />) 
    }
        

export default AuthorCardChange

