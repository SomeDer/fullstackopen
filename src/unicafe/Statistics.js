import React from "react";
import Statistic from './Statistic';

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  return total !== 0 ? (
    <div>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={total} />
      <Statistic text="average" value={(good - bad) / total} />
      <Statistic text="positive" value={`${good / total * 100}%`} />
    </div>
  ) : (
    <p>No feedback given</p>
  );
};

export default Statistics;
