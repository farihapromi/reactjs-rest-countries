import React, { useState,useEffect } from 'react'
import Country from './Country'
import './countries.css'

const Countries = () => {
    const [countries,setCountries]=useState([])
    //state for viisted countries
    const[visitedCountries,setVisitedCountries]=useState([])
    //viistesd countries flag
    const [visitedFlag,setVisitedFlag]=useState([])

    const handleVisitedCountry=(country)=>{
      // setVisitedCountries.push(country) //this is will not work as useState array is immutable,
      //first have to mkae new array
      const newVisitedCountries=[...visitedCountries,country];
      setVisitedCountries(newVisitedCountries)

    }
    const handleVisitedFlag=flag=>{
    const newVisitedFlags=[...visitedFlag,flag]
    setVisitedFlag(newVisitedFlags)
    }
    useEffect(()=>{
         fetch('https://restcountries.com/v3.1/all')
         .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
  return (
    <div>
      {/* Show list of visited countriesd */}
      <div>
      <h5>Visited countires: {visitedCountries.length}</h5>
      <ul className="visited-list">
        {
          visitedCountries.map(country=><li key={country.cca3}>{country.name.common}</li>)
        }
      </ul>
      </div>
      {/* for flag */}
      <div className='flag-container'>
        {
          visitedFlag.map(flag=><img src={flag}></img>)
        }

      </div>
    <div className='country-container'>
     
        {
      countries.map((country) => (
         <Country 
         key={country.cca3} 
         country={country} 
         handleVisitedCountry={handleVisitedCountry} // sending function through props
         handleVisitedFlag={handleVisitedFlag}
         />
              ))
        }
      
    </div>
    </div>
  )
}

export default Countries
