import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../Utils/Constants'
import CreateCard from '../../Utils/CreateCard'
import {USER_TEMPLATE} from '../../Templates/UserTemplate'


/// post
export default function UserCard(props) {
    // const [user, setUser] = React.useState({...USER_TEMPLATE});
    const record = {
        id: '',
        firstName: '',
        lastName:'',
        email:'',
        phone: ''

    }
    return <CreateCard templateRecord={USER_TEMPLATE} dataType='user' dataRecord = {record} />

}


