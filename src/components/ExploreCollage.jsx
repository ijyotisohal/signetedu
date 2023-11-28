import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchTranslations } from '../actions/languageActions';
import { useEffect } from "react";
import Loading from "./loading/Loading";
import PlayableYouTubeVideo from "../elements/VirtualTour";
const ExploreCollage = () => {
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
    <div className="dizme_tm_section explore-clg pt-60 pb-60 text-white " style={{backgroundImage:`url('/images/Signet-Background-Map.webp')`}}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 pt-50">
            <h5 className="title-one">{homepage.exploreCollage.title}</h5>
            <h2 className="tt-two">{homepage.exploreCollage.titleTwo}</h2>
            <p className="desc-one">
            {homepage.exploreCollage.description}
            </p>
          </div>
          <div className="col-md-6 img-fluid position-relative">
         {/* <img src="/images/video-popup-bg-02-2.jpg" alt="title  " />
         <a
              href="https://www.youtube.com/watch?v=6RMcWdQNf9c"
              target="_blank"
              className="explore-clg-ply-btn"
            >
              <img src="/assets/images/video/play-btn.png" alt='play button ' className='pl-btn pl-btn2'/>
            </a> */}
            {/* <PlayableYouTubeVideo/> */}
  <div class="content-ins">
  
      <div class="content-ins-overlay"></div>
      <img class="content-ins-image" src="/img/thumbs/thumb.jpg" alt=""/>
      <div class="content-ins-details fadeIn-top">
     
        <h3><PlayableYouTubeVideo/> </h3>

      </div>
    
  </div>
                </div>
              </div>
            </div>
          </div>
        
    
   
  );
};

export default ExploreCollage;
