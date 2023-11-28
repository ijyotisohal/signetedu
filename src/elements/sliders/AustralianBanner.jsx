import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import sliderData from '../../data/slider/homeSlider.json'

import { Pagination } from "swiper";
import { SwiperNavButtons } from "./SwiperNavigationButtons";
const imgData = sliderData;
// import required modules

export default function AustralianBanner() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        loop={true}
        autoplay={{
          delay: 1960,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        grabCursor={true}
        className="mySwiper"
      >
        {
            imgData.map((data)=>data.americanLifeStyleBanner.map((imagas)=>(
                <SwiperSlide>
          <img src={imagas.image} alt={imagas.id} />
        </SwiperSlide>
            )))
        }
        <SwiperNavButtons/>
      </Swiper>
    </>
  );
}
