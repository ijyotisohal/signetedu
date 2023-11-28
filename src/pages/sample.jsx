import React, { useState, useEffect } from 'react';
import Languageoption from '../components/language-dropdown';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Loading from "../components/loading/Loading";
const DataComponent = () => {
  const {t} = useTranslation();
  const handleClick=(e)=>{
      i18next.changeLanguage(e.target.value)
  }
  const [languageData, setLanguageData] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  useEffect(() => {
    const fetchLanguageData = async () => {
      const response = await fetch(`/locales/${selectedLanguage}/translation.json`);
      console.log(response)
      const data = await response.json();
      setLanguageData(data);
    
    };

    fetchLanguageData();
  }, [selectedLanguage]);

  if (!languageData) {
    return <div>
      <Loading/>
    </div>;
  }

  // Render your component using the data

  return (
    <div>
       {languageData && <p>{t(languageData.Banner.titleTwo)}</p>}
   <h5>title</h5>
   <Languageoption onChange={(e)=> handleClick(e)}/>
    </div>
  );
};

export default DataComponent;
