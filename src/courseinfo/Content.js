import React from "react";
import Part from './Part';

const Content = props => {
  return (
    <div>
      <Part name={props.name1} numberOfExercises={props.exercises1} />
      <Part name={props.name2} numberOfExercises={props.exercises2} />
      <Part name={props.name3} numberOfExercises={props.exercises3} />
    </div>
  ); 
}

export default Content;
