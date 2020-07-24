import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../Utils/Constants'
import CreateCard from '../../Widgets/CreateCard/CreateCard'
import {AUTHOR_TEMPLATE} from '../../Templates/AuthorTemplate'


/// post
export default function AuthorCard(props) {
    const record = {
        id: '',
        firstName: '',
        lastName:'',
        info:'',
        birtsday: new Date()

    }
    return <CreateCard templateRecord={AUTHOR_TEMPLATE} dataType='author' dataRecord = {record} />

}


