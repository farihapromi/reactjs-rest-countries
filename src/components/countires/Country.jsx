import React from 'react';

const Country = ({ country }) => {
  return (
    <div className='country'>
      <h3>{country.name.common}</h3>
    </div>
  );
};

export default Country;
