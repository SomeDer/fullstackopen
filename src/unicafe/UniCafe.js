import React, {useState} from "react";
import FeedbackButton from './FeedbackButton';
import Statistics from './Statistics';

const UniCafe = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  return (
    <div>
      <h2>Give Feedback!</h2> 
      <FeedbackButton text="good" action={setGood} /> 
      <FeedbackButton text="neutral" action={setNeutral} /> 
      <FeedbackButton text="bad" action={setBad} /> 
      <h2>Statistics</h2>
      <Statistics {...{good, neutral, bad }} />
    </div>
  )
};

export default UniCafe;
