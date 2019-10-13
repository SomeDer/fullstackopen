import React, {useState, useEffect} from "react";
import Axios from 'axios';
import Detailed from './Detailed';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    Axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(c => setCountries(c.data));
  }, []);
  
  const [search, setSearch] = useState("");
  const updateSearch = e => setSearch(e.target.value);
  const searched = countries.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
  const toDetailed = c => <Detailed country={c} />
  const searchedDisplay =
    searched.length > 10
      ? "Too many matches, specify another filter"
      : searched.length === 1
      ? toDetailed(searched[0])
      : searched.map(x => 
        <div>
          {x.name}
          <button onClick={() => setSearch(x.name)}>show</button>
        </div>
      )
  return (
    <div>
    <input value={search} onChange={updateSearch}/><br/>
    {searchedDisplay}
    </div>
  );
};

export default Countries;
