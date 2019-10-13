import React from "react";

const Detailed = ({country}) => {
  return (
    <div>
      <h2>{country.name}</h2>
      Capital: {country.capital}<br/>
      Population: {country.population}
      <h3>Languages</h3>
      <ul>
        {country.languages.map(l => <li>{l.name}</li>)}
      </ul>
      <svg width="90" height="90">       
       <image href={country.flag} width="90" height="90"/>    
      </svg>
    </div>
  );
};

export default Detailed;
