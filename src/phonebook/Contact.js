import React from "react";
import {deleteContact} from './Backend';

const Contact = ({name, number, id, update}) => {
  const action = () => {
    if (window.confirm(`Delete ${name}?`)) {
      deleteContact(id).then(() =>
        update()
      );
    }
  };
  return (
    <div>
      {name} {number}&nbsp;
      <button onClick={action}>delete</button>
    </div>
  );
};

export default Contact;
