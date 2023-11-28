import React from 'react';
import { useSelector } from 'react-redux';

const CourseDetailsPage = () => {
  const translations = useSelector(state => state.language.translations);
  const { title, courseData } = translations.coursesdetails;

  return (
    <div>
      <h1>{title}</h1>
      {courseData.map(data => (
        <div key={data.id}>
          <p>{data.data}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseDetailsPage;
