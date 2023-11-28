import React from 'react';
import { useSelector } from 'react-redux';

const AustralianLifestylePage = () => {
  const translations = useSelector(state => state.language.translations);
  const { title, lifestyleData } = translations.austarlianlifestyle;

  return (
    <div>
      <h1>{title}</h1>
      {lifestyleData.map(data => (
        <div key={data.id}>
          <p>{data.data}</p>
        </div>
      ))}
    </div>
  );
};

export default AustralianLifestylePage;
