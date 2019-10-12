import React from "react";

const Statistic = ({text, value}) => {
  return (
    <tr>
      <td style={{"width": "100px"}}>{text}</td> 
      <td>{value}</td>
    </tr>
  );
}

export default Statistic;
