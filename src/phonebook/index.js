import React, {useState} from "react";
import PhonebookForm from './PhonebookForm';
import Search from './Search';

const Phonebook = () => {
  const [contacts, setContacts] =  useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
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
