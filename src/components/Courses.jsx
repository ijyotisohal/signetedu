import React from 'react';
import { useSelector } from 'react-redux';
import Course from './Course';

const Courses = () => {
  const language = useSelector((state) => state.language);
  const translations = require(`../translations/${language}.json`);
  const courseData = translations.coursesList;

  return (
    <div>
      <h2>Courses</h2>
      {courseData.map((course) => (
       <>
         <h2>{course.title}</h2>
        <h2>{course.description}</h2>
       </>
      ))}
    </div>
  );
};

export default Courses;
