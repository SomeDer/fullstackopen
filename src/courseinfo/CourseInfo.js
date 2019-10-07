import React from "react";
import Header from './Header';
import Total from './Total';
import Content from './Content';

const CourseInfo = () => {
  const course = "Half Stack application development";
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;
  return (
    <div>
      <Header courseName={course} /> 
      <Content name1="Fundamentals of React" exercises1={exercises1} />
      <Content name2="Using props to pass data" exercises2={exercises2} />
      <Content name3="State of a component" exercises3={exercises3} />
      <Total {...{exercises1, exercises2, exercises3}} />
    </div>
  );
};

export default CourseInfo;
