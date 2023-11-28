import React from 'react';
import { useSelector } from 'react-redux';

const CoursesPage = () => {
  const translations = useSelector(state => state.language.translations);
  const { title, courseList } = translations.courses;

  return (
    <div>
      <h1>{title}</h1>
      {courseList.map(course => (
        <div key={course.id}>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CoursesPage;
