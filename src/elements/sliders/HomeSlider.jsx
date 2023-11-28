import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import sliderData from '../../data/slider/homeSlider.json'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { fetchTranslations } from "../../actions/languageActions";
import Loading from "../../components/loading/Loading";
const slidesData = sliderData;

export default function HomeSlider() {
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
    <>
    <div className="slider-sec-home dizme_tm_section" id="homeSlider">
    <div className="container">
    <h3 className="text-center text-white pt-20 slide-text"> <span className="count-text" >{homepage.opportunity.titlesubOne}</span>  {homepage.opportunity.title} <br /> {homepage.opportunity.titleTwo} <span className="count-text">{homepage.opportunity.titlesubTwo}</span> .</h3>
    {/* <p className="text-center text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus beatae adipisci iusto laboriosam sunt natus nesciunt cum et aspernatur vel odio voluptates aperiam, sequi error vero eaque fuga, assumenda obcaecati soluta reprehenderit. Eos, iusto ullam.</p> */}

    </div>
    <div className="container-fluid ">
    <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"4"}
        loop={true}
        spaceBetween={10}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 1960,
          disableOnInteraction: false,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
       {
        slidesData.map((data)=>data.Images.map((imgData)=>(
          <SwiperSlide>
          <img src={imgData.image} alt={imgData.id} />
        </SwiperSlide>
        )))
       }
      </Swiper>
    </div>
    </div>
  
    </>
  );
}
