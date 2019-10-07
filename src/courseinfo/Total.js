import React from "react";


const Total = props => {
  return 	(
    <p>
      Number of exercises:&nbsp;
      {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  );
};

export default Total;
