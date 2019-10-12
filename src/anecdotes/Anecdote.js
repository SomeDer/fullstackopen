import React from "react";

const Anecdote = ({text, votes, upvote}) => {
  return (
    <div style={{display: "inline"}}>
      <p>{text}</p>
      <p>Upvotes: {votes}</p>
      <button onClick={upvote}>Upvote</button>
    </div>
  ); 
};

export default Anecdote;
