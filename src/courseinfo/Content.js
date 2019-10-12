import React from "react";
import Part from './Part';
import courses from './courses';

const Content = ({courseParts}) => {
  return (
    <div>
      {courseParts.map(({name, exercises}) => (
      <Part {...{name, exercises}} />
      ))}
    </div>
  ); 
}

export default Content;
