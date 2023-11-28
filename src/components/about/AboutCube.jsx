import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderData from '../../data/slider/homeSlider.json'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/effect-cube"


import { EffectCoverflow, Pagination ,EffectCube,Navigation} from "swiper";
const slidesData = sliderData;

export default function AboutCube() {
  return (
    <>
    <Swiper
        effect={"cube"}
        grabCursor={true}
        slidesPerView={"4"}
     loop={true}
     
        spaceBetween={10}
        cubeEffect={{
      shadow: true,
      rotate: 80,
        //   stretch: 0,
          depth: 100,
          modifier: 1,
         
         
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        

        modules={[EffectCoverflow, Pagination,EffectCube,Navigation]}
        className="mySwiper about-swiper-slider"
      >
       {
        slidesData.map((data)=>data.imagesCube.map((imgData)=>(
          <SwiperSlide>
          <img src={imgData.image} alt={imgData.id} />
        </SwiperSlide>
        )))
       }
      </Swiper>
  
    </>
  );
}
