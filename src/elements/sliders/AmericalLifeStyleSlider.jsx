import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import sliderData from '../../data/slider/homeSlider.json'
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";
import { SwiperNavButtons } from "./SwiperNavigationButtons";
const slidesData = sliderData;

export default function AmericanLifeStyleSlider() {
  return (
    <>
     <div className="p-5">
     <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiperAme"
        loop={true}
        
        simulateTouch={true}
        autoplay={{
          delay: 1960,
          disableOnInteraction: false,
        }}
a11y={true}


      >
      
        {
        slidesData.map((data)=>data.americanLifeStyleBanner.map((imgData)=>(
          <SwiperSlide>
          <img src={imgData.image} alt={imgData.id} />
        </SwiperSlide>
        )))
       }
       <SwiperNavButtons/>
      </Swiper>
     </div>
    </>
  );
}
