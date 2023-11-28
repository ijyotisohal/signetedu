import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTranslations } from '../actions/languageActions';
import LanguageSelector from './LanguageSelector';

const HomePage = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.language.selectedLanguage);
  const translations = useSelector((state) => state.language.translations[selectedLanguage]);

  useEffect(() => {
    dispatch(fetchTranslations(selectedLanguage));
  }, [dispatch, selectedLanguage]);

  if (!translations) {
    return <div><Loading/></div>; // Show loading state while translations are being fetched
  }

  const { homepage,aboutus,courses } = translations;

  return (
    <div>
      <h1>{homepage.title}</h1>
      <h1>{homepage.banner.title}</h1>
      <p>{homepage.banner.description}</p>
      <h1>{aboutus.title}</h1>
      <p>{aboutus.description}</p>
      <h1>{courses.title}</h1>
      {/* {
        courses.courseList.map((data)=>(
            <>
            <h1>{homepage.aboutus.title}</h1>
      <p>{homepage.aboutus.description}</p>
            </>
        ))
      } */}
      <LanguageSelector/>
    </div>
  );
};

export default HomePage;
