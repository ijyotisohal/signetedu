import React from "react"
import {useTranslation} from 'react-i18next'
import i18next from "i18next"
import Menu from "../components/menu";
import Languageoption from "../components/language-dropdown";
import { useEffect } from "react";
import { useState } from "react";
const Home = () => {
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
    return <div><Loading/></div>;
  }
    return(
        <div style={{marginTop:'50px'}}>
         {languageData && <p>{t('welcome')} {t('about')}</p>}
            <Menu/>
            <Languageoption onChange={(e)=> handleClick(e)}/>
            
            <h1>{t('welcome')}</h1>
            <h1>{t('home')}</h1>
            <h1>{t('dashboard')}</h1>
            <h1>{t('contact')}</h1>
            <h1>{t('about')}</h1>
            <h1>{t('channel')}</h1>
            <h1>{t('holiday')}</h1>
            </div>
        
    )
}
export default Home