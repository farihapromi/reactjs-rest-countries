import React, { useState,useEffect } from 'react'
import Country from './Country'

const Countries = () => {
    const [countries,setCountries]=useState([])
    useEffect(()=>{
         fetch('https://restcountries.com/v3.1/all')
         .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
  return (
    <div>
     
        {
      countries.map((country, index) => (
         <Country key={index} country={country} />
              ))
        }
      
    </div>
  )
}

export default Countries
