import React, {useState, useEffect} from "react";
import PhonebookForm from './PhonebookForm';
import Search from './Search';
import Axios from 'axios';

const Phonebook = () => {
  const [contacts, setContacts] =  useState([]);
  const addContact = (name, number) => setContacts(cs => cs.concat({
    name,
    number
  }));
  const [searching, setSearching] = useState("")
  const searchResults = 
    contacts.filter(c => 
      c.name
       .toLowerCase()
       .includes(searching.toLowerCase())
    );
  useEffect(() => {
    Axios
      .get("http://localhost:3001/contacts")
      .then(c => setContacts(c.data))
  }, []);
  return (
    <div>
      <h1>Phonebook</h1>
      <Search {...{searching, setSearching}} />
      <h2>Add</h2>
      <PhonebookForm {...{contacts, addContact}} />
      <h2>Contacts</h2>
      {searchResults.map(c => <p>{c.name} {c.number}</p>)}
    </div>
  );
};

export default Phonebook;
