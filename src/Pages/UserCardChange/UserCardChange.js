import React from 'react'
import {Link} from 'react-router-dom'
import { USER_TEMPLATE } from '../../Templates/UserTemplate'
import ChangeCard from '../../Utils/ChangeCard'

const UserCardChange = (props) => {
    const {dataRecord} = props  
    return (<ChangeCard templateRecord={USER_TEMPLATE} dataType='user' parId='11' dataRecord={dataRecord} />)
}


export default UserCardChange

