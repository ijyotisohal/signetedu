// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setLanguage, fetchTranslations } from '../actions/languageActions';

// const Languageoption = () => {
//   const dispatch = useDispatch();
//   const selectedLanguage = useSelector((state) => state.language.selectedLanguage);
//   const [currentLanguage, setCurrentLanguage] = useState(selectedLanguage);

//   const handleLanguageChange = (e) => {
//     const language = e.target.value;
//     setCurrentLanguage(language);
//     dispatch(setLanguage(language));
//     dispatch(fetchTranslations(language));
//   };

//   return (
//     <div style={{marginTop:'50px'}} className="lang-selector" >
//     <select value={currentLanguage} onChange={handleLanguageChange}>
//       <option value="en">English</option>
//       <option value="pr">Portuguese</option>
//       <option value="sp">Spanish</option>
//       <option value="ch">Chinese</option>
//       <option value="kr">Korean</option>
//       {/* Add more language options here */}
//     </select>
//     </div>
//   );
// };

// export default Languageoption;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTranslations, setLanguage } from '../actions/languageActions';
// import { fetchTranslations, setLanguage } from '../../actions/languageActions';
// import Languageoption from './LanguageSelector';

const Languageoption = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.language.selectedLanguage);
  const availableLanguages = ['en', 'pr', 'kr',"sp","ch"]; // Replace with your available language options

  useEffect(() => {
    // Fetch translations when the selected language changes
    dispatch(fetchTranslations(selectedLanguage));
  }, [dispatch, selectedLanguage]);

  const handleLanguageChange = (e) => {
    const language = e.target.value;
    dispatch(setLanguage(language));
  };

  return (
    <div>
      <select value={selectedLanguage} className="lang-selector" onChange={handleLanguageChange}>
       
      <option value="en">English</option>
       <option value="pr">Portuguese</option>
       <option value="sp">Spanish</option>
       <option value="ch">Chinese</option>
       <option value="kr">Korean</option>
      </select>
    </div>
  );
};

export default Languageoption;

