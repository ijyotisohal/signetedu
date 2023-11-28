import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CourseData from '../../data/courses/courses.json'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Parallax, Navigation } from "swiper";
import { Link, useParams } from "react-router-dom";
import { slugify } from "../../utils";
const Data = CourseData;
// import required modules

export default function SubCoursesBanner() {
    const params = useParams();
    const courseSlug = params.slug;
  
    const getCourseData = Data.filter(data => slugify(data.title) === courseSlug);
    const detailsService = getCourseData[0];
  const couseSlug = detailsService.title
    const automotiveData = Data.filter(data => slugify(data.cate ? data.cate : "") === "automotive");
    const businessData = Data.filter(data => slugify(data.cate ? data.cate : "") === "business");
    const constructionData = Data.filter(data => slugify(data.cate ? data.cate : "") === "construction");
    const communityData = Data.filter(data => slugify(data.cate ? data.cate : "") === "community");
    const healthcareData = Data.filter(data => slugify(data.cate ? data.cate : "") === "healthcare");
    const generalData = Data.filter(data => slugify(data.cate ? data.cate : "") === "general");
    console.log(automotiveData);
    console.log(businessData);
    console.log(constructionData);
    console.log(communityData);
    console.log(healthcareData);
    console.log(generalData);
    console.log(detailsService)
  return (
    <>
 <div className="course-slider pt-90">
 <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        
        loop={true}
        autoplay={{
          delay: 1960,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Parallax, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start text-center"
          className="parallax-bg"
          style={{
            "background-image":
              "url(https://swiperjs.com/demos/images/nature-1.jpg)",
          }}
          data-swiper-parallax="-23%"
        ></div>
       {
            Data.filter(data => slugify(data.cate ? data.cate : "") === detailsService.data).map((cData)=>(
            <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
         <h2 className="text-white fs-1" > <Link to={process.env.PUBLIC_URL + `/${slugify(cData.title)}`}>
                        <a> {cData.faculty}</a>
                      </Link>{" "}</h2>
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
          <h3 className="text-white fs-1" > <Link to={process.env.PUBLIC_URL + `/${slugify(cData.title)}`}>
                        <a> {cData.title}</a>
                      </Link>{" "}</h3>
          </div>
        
        </SwiperSlide>
        ))
       }
    
      </Swiper>
 </div>
    </>
  );
}
