import React from 'react';
import { useSelector } from 'react-redux';

const AboutUsPage = () => {
  const translations = useSelector(state => state.language.translations);
  const { title, description } = translations.aboutus;

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default AboutUsPage;
