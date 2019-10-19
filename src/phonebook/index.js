import React, {useState, useEffect} from "react";
import PhonebookForm from './PhonebookForm';
import Search from './Search';
import {getContacts} from './Backend';
import Contact from './Contact';

const Phonebook = () => {
  const [contacts, setContacts] =  useState([]);
  const [searching, setSearching] = useState("")
  const searchResults = 
    contacts.filter(c => 
      c.name
       .toLowerCase()
       .includes(searching.toLowerCase())
    );
  const update = () => getContacts().then(c => setContacts(c.data));
  useEffect(() => {
    update();
  }, []);
  return (
    <div>
      <h1>Phonebook</h1>
      <Search {...{searching, setSearching}} />
      <h2>Add</h2>
      <PhonebookForm {...{contacts, update}} />
      <h2>Contacts</h2>
      {searchResults.map(({name, number, id}) => <Contact key={id} {...{name, number, id, update}} />)}
    </div>
  );
};

export default Phonebook;
