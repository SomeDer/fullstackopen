import React from "react";

const FeedbackButton = ({ text, action }) => {
  return (
    <button onClick={() => action(s => s + 1)}>
      {text}
    </button>
  );
};

export default FeedbackButton;
