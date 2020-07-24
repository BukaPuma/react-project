import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../Utils/Constants'
import CreateCard from '../../Widgets/CreateCard/CreateCard'
import {BOOK_TEMPLATE} from '../../Templates/BookTemplate'


/// post
export default function BookCard(props) {
    // const [user, setUser] = React.useState({...USER_TEMPLATE});
    const record = {
        id: '',
        title: '',
        info:'',
        author:'',
        user: ''

    }
    return <CreateCard templateRecord={BOOK_TEMPLATE} dataType='book' dataRecord = {record} />

}


