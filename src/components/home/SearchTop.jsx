import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CourseData from "../../data/courses/courses.json";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";
const CoursesData = CourseData;
// import required modules

export default function TopSearches() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={40}
        // pagination={{
        //   clickable: true,
        // }}
        loop={true}
        autoplay={{
          delay: 1960,
          disableOnInteraction: false,
        }}
        modules={[]}
        className="mySwiper"
      >
       <div className="cards">
       {
        CoursesData.slice(6,15).map((data)=>(
            <SwiperSlide>
           
  
            <Link to='' class="card">
      <img src={data.image} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          {/* <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" /> */}
          <div class="card__header-text">
            <h3 class="card__title">{data.title}</h3>             
            <span class="card__status">1 hour ago</span>
          </div>
        </div>
        <p class="card__description">{data.cate}</p>
      </div>
    </Link>      
   

        </SwiperSlide>
        ))
       }
       </div>
      </Swiper>
    </>
  );
}
