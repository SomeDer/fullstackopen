import React from "react";
import FormItem from './FormItem';

const Search = ({searching, setSearching}) => {
  return (
    <FormItem text="Search" value={searching} onChange={e => setSearching(e.target.value)} />
  );
};

export default Search;
