import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CourseData from '../../data/courses/courses.json'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Parallax, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { slugify } from "../../utils";
const Data = CourseData;
// import required modules

export default function CourseBanner() {
  return (
    <>
 <div className="course-slider pt-20">
 <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        // parallax={true}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
    
        {/* <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image":
              "url(https://swiperjs.com/demos/images/nature-1.jpg)",
          }}
          data-swiper-parallax="-23%"
        ></div> */}
       {
        Data.slice(0,6).map((couseData)=>(
            <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
         <h3 className="text-white fs-1" > <Link to={process.env.PUBLIC_URL + `/${slugify(couseData.title)}`}>
                        <a className="text-black" > {couseData.title}</a>
                      </Link>{" "}</h3>
          </div>
          {/* <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div> */}
          <div className="text" data-swiper-parallax="-100">
<p>          The Signet Institute of Australia offers comprehensive {CourseData.title} designed to equip students with the necessary skills and knowledge for a successful career in the automotive industry. These courses provide hands-on training and theoretical understanding of various {couseData.title} and technologies. The curriculum emphasizes industry standards and practices, ensuring that graduates are job-ready.
</p>
          </div>
        </SwiperSlide>
        ))
       }
    
      </Swiper>
 </div>
    </>
  );
}
