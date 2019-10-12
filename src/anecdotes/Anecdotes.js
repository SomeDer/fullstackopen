import React, {useState} from "react";
import Anecdote from './Anecdote';

const Anecdotes = () => {
  const [selected, setSelected] = useState(0);
  const setRandom = () => setSelected(Math.floor(Math.random() * anecdotes.length));
  const [votes, setVotes] = useState(anecdotes.map(_ => 0));
  const upvote = () => setVotes(s => s.map((x, i) => i === selected ? x + 1 : x))
  const highest = votes.indexOf(Math.max(...votes)); 
  return (
    <div>
      <h2>Random</h2>
      <Anecdote text={anecdotes[selected]} votes={votes[selected]} upvote={upvote} />
      <button onClick={setRandom}>New</button>
      
      <h2>Popular</h2>
      <Anecdote text={anecdotes[highest]} votes={votes[highest]} upvote={upvote} />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

export default Anecdotes;
