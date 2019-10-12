import React from "react";
import CourseInfo from './CourseInfo';
import courses from './courses';

const AllCourses = () => {
  return courses.map(c => <CourseInfo course={c}/>);
}

export default AllCourses;
