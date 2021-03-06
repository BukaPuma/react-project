import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ChangeCard from '../../Widgets/ChangeCard/ChangeCard'
import { USER_TEMPLATE } from '../../Templates/UserTemplate'

const UserCardChange = (props) => {
    const record = {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    }



        return (<ChangeCard dataRecord={record} dataType='user' templateRecord={USER_TEMPLATE} />)
    }




    export default UserCardChange

