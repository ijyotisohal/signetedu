import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";


// import required modules
import { EffectCreative } from "swiper";
import sliderData from '../../data/slider/homeSlider.json'

const imgData = sliderData;

export default function SubCourseBanner() {
  return (
    <>
      
      <Swiper
        grabCursor={true}
        effect={"creative"}
        loop={true}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        creativeEffect={{
        //   prev: {
        //     shadow: true,
        //     origin: "left center",
        //     translate: ["-25%", 0, -150],
        //     rotate: [60, 90, 60],
            
        //   },
        //   next: {
        //     origin: "right center",
        //     translate: ["25%", 0, 150],
        //     rotate: [-60, -90, -60],
        //   },
        prev: {
            shadow: true,
            origin: "left center",
            translate: ["-5%", 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: "right center",
            translate: ["5%", 0, -200],
            rotate: [0, -100, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper6"
      >
      {
            imgData.map((data)=>data.americanLifeStyleBanner.map((imagas)=>(
                <SwiperSlide>
          <img src={imagas.image} alt={imagas.id} />
        </SwiperSlide>
            )))
        }
      </Swiper>
    </>
  );
}
