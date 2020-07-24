import React from 'react'
import {Link} from 'react-router-dom'
import ChangeCard from '../../Widgets/ChangeCard/ChangeCard'
import {BOOK_TEMPLATE} from '../../Templates/BookTemplate'

const  BookCardChange = (props) => {
const record = {
    id: '',
    title: '',
    info: '',
    authorId: '',
    userId: ''
    }
    return (<ChangeCard  dataRecord={record} dataType='book' templateRecord={BOOK_TEMPLATE} />) 
}
    

export default BookCardChange
