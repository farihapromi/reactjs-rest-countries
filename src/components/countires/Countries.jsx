import React, { useState,useEffect } from 'react'
import Country from './Country'
import './countries.css'

const Countries = () => {
    const [countries,setCountries]=useState([])
    useEffect(()=>{
         fetch('https://restcountries.com/v3.1/all')
         .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
  return (
    <div className='country-container'>
     
        {
      countries.map((country) => (
         <Country key={country.cca3} country={country} />
              ))
        }
      
    </div>
  )
}

export default Countries
