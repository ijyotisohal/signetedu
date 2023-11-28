/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { useContext } from 'react';
// import { LanguageContext } from '../../../contexts/LanguageContext';



function MyComponent() {
    // const { language } = useContext(LanguageContext);   
    // const [translations, setTranslations] = useState(null);

    // useEffect(() => {
    //   const fetchTranslations = async () => {
    //     try {
    //       const response = await fetch(`locales/${language}.json`);
    //       const data = await response.json();
    //       setTranslations(data);
    //     } catch (error) {
    //       console.error('Error fetching translations:', error);
    //     }
    //   };
  
    //   fetchTranslations();
    // }, [language]);
  
    // if (!translations) {
    //   return <div>Loading translations...</div>;
    const [t,i18n] = useTranslation("global");

    // }
    console.log(global)
  return (
   
   <>
     <h1>{t("home.name")}</h1>
      {/* <h2>{translations.courses}</h2> */}
    

      {/* <button onClick={() => switchLanguage('en')}>English</button>
      <button onClick={() => switchLanguage('fr')}>French</button>
      <button onClick={() => switchLanguage('ar')}>Arabic</button>
      <button onClick={() => switchLanguage('hi')}>Hindi</button>
      <button onClick={() => switchLanguage('kn')}>Kannada</button>
      <button onClick={() => switchLanguage('te')}>Telugu</button> */}
   </>
  );
}

export default MyComponent;