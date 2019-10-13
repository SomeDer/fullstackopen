import React from "react";

const FormItem = ({value, onChange, text}) => {
  return (
    <div>{text}: <input {...{value, onChange}} /></div>
  );
};

export default FormItem;
