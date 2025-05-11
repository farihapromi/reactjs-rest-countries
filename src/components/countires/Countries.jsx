import React, { useState } from 'react'
import Country from './Country'

const Countries = () => {
    const [countries,setCountries]=useState([])
    useEffect(()=>{
        fetch('https://restfulcountries.com/api/v1/countries')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
  return (
    <div>
        {
            countries.map(country=><Country></Country>)
        }
      
    </div>
  )
}

export default Countries
