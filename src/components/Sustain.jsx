import React from 'react'
import HomeAnimationOne from './lotties/HomeAnimationOne'

import { useDispatch, useSelector } from 'react-redux';
import { fetchTranslations } from '../actions/languageActions';
import { useEffect } from "react";
import Loading from './loading/Loading';

const Sustain = () => {
    
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.language.selectedLanguage);
  const translations = useSelector((state) => state.language.translations[selectedLanguage]);
  
  useEffect(() => {
    dispatch(fetchTranslations(selectedLanguage));
  }, [dispatch, selectedLanguage]);
  
  if (!translations) {
    return <div><Loading/></div>; // Show loading state while translations are being fetched
  }
  
  const { homepage } = translations;
  return (
    <div className='dizme_tm_section sustain-sec pt-40 pb--40 mb--60 text-black' id='sustain'>
<div className="container">
    <div className="row align-items-center">
        <div className="col-md-6">
            <h3 className="sustain-title">{homepage.changeThrough.title}  <span className="count-text">{homepage.changeThrough.titleTwo} </span>{homepage.changeThrough.titleThree}</h3>
            <p className="sustain-desc">{homepage.changeThrough.description}</p>
        </div>
        <div className="col-md-6 ">
            <div className="sustain-img">
                {/* <img src="/images/sustain.svg" alt="sustain" /> */}
                {/* <HomeAnimationOne/> */}
                <img src="/img/about/algo-machine.gif" alt="banner"/>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Sustain