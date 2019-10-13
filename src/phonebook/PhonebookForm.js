import React, {useState} from "react";
import FormItem from './FormItem';

const PhonebookForm = ({contacts, addContact}) => {
  const [newName, setName] = useState("");
  const updateName = e => setName(e.target.value);
  const [number, setNumber] = useState("");
  const updateNumber = e => setNumber(e.target.value);
  const submitForm = e => {
    e.preventDefault();
    if (contacts.map(c => c.name).includes(newName)) {
      alert(`${newName} is already in the phonebook!`);
    } else {
      addContact(newName, number); 
    }
  };
  return (
    <form>
      <div>
        <FormItem text="Name" value={newName} onChange={updateName} />
      </div>
      <div>
        <FormItem text="Number" value={number} onChange={updateNumber} />
      </div>
      <div>
        <button onClick={submitForm} type="submit">Add</button>
      </div>
    </form>
  );
};

export default PhonebookForm;
