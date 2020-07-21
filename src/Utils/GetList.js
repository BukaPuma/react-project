import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {BASE_URL} from '../Utils/Constants'




export default function List({ tableProperties, typeListRus, typeList, showHandle }) {

  const [elements, setElements] = React.useState({ count: 0, rows: [] });
  useEffect(() => {
    // console.log(`${BASE_URL}${typeList}`)
    axios.get(`${BASE_URL}${typeList}`)
      .then(res => {
        const elementsData = res.data;
        // console.log('myPeople',myPeople);
        setElements(elementsData);
        // console.log(elements.rows);
      })
      .catch((e) => console.log(`${{typeListRus}} Пользователи не загрузились`, e))
  })

  return (
    <>
      <h1>{tableProperties.h1}</h1>
      <table class="biblio-table">
        {tableProperties.fieldNames.map((caption) => { return <th>{caption}</th> })
        }
        {elements.rows.map(showHandle)}
      </table>

    </>

  );


}
