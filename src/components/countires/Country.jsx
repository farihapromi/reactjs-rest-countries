import React, { useState } from 'react';
import './Country.css'

const Country = ({ country }) => {
    const {name,flags,population,area,cca3}=country
    const [visited,setVisited]=useState(false)
  return (
    <div className={`country ${visited && 'visited'}`}>
      <h3>{name?.common}</h3>
      <img src={flags.png} alt="flag" />
      <p>Population : {population}</p>
      <p>Area: {area}</p>
      <p><small>Code :{cca3}</small></p>
      <button onClick={()=>setVisited(!visited)}>{visited ? 'Visited':"Going"}</button>
      {
        visited ? ' I have visited this country':'I wnat to go there'
      }
    </div>
  );
};

export default Country;
