import React, {useState} from "react";
import FormItem from './FormItem';
import {postContact, patchNumber} from './Backend';

const PhonebookForm = ({contacts, update}) => {
  const [newName, setName] = useState("");
  const updateName = e => setName(e.target.value);
  const [number, setNumber] = useState("");
  const updateNumber = e => setNumber(e.target.value);
  const submitForm = e => {
    e.preventDefault();
    const formAction = fn => fn(newName, number).then(() => update());
    if (contacts.map(c => c.name).includes(newName)) {
      const dialogue = `${newName} is already in the phonebook! Would you like to change the number to ${number}?`;
      if (window.confirm(dialogue)) formAction(patchNumber)
    } else {
      formAction(postContact)
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
