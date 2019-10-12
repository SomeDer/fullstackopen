import React from "react";
import Header from "./Header";
import Total from "./Total";
import Content from "./Content";

const CourseInfo = ({course}) => {
  const totalExercises = course
    .parts
    .map(({exercises}) => exercises)
    .reduce((x, y) => x + y);
  return (
    <div>
      <Header courseName={course.name} /> 
      <Content courseParts={course.parts}/>
      <Total exercises={totalExercises} />
    </div>
  );
};

export default CourseInfo;
