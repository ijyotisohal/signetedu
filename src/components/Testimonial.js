import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchTranslations } from '../actions/languageActions';
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Loading from "./loading/Loading";
// import { fatchData } from "../utilits";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay]);

const Testimonial = () => {

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
  const data = homepage.testimonalas.list
  const props = {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".owl-dots",
      clickable: true,
    },
    simulateTouch:true,
    autoplay:{
      delay: 1960,
      disableOnInteraction: false,
    }

  };

  return (
    <div className="dizme_tm_section pt-80" id="testimonal-sec">
      <div className="dizme_tm_testimonials">
       <div className="container">
       <div className="dizme_tm_main_title row" data-align="left">
          <div className="col-md-8">
          <span>{homepage.testimonalas.title}</span>
          <h3>{homepage.testimonalas.titleTwo}</h3>
          <p>
           {homepage.testimonalas.description}
          </p>
          <div className="list_wrapper">
          <div className="total">
            <div className="in">
              <Swiper {...props} className="">
                {data &&
                  data.map((data, i) => (
                    <SwiperSlide key={i}>
                      <div className="icon d-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          id="Layer_1"
                          x="0px"
                          y="0px"
                          width="200px"
                          height="200px"
                          viewBox="796 698 200 200"
                          enableBackground="new 796 698 200 200"
                          xmlSpace="preserve"
                          className="svg replaced-svg"
                        >
                          <g>
                            <path d="M885.208,749.739v-40.948C836.019,708.791,796,748.81,796,798v89.209h89.208V798h-48.26   C836.948,771.39,858.598,749.739,885.208,749.739z" />
                            <path d="M996,749.739v-40.948c-49.19,0-89.209,40.019-89.209,89.209v89.209H996V798h-48.26   C947.74,771.39,969.39,749.739,996,749.739z" />
                          </g>
                        </svg>
                      </div>
                      <div className="text">
                        <p>{data.details}</p>
                      </div>
                      <div className="short">
                        <div className="image d-none">
                          <div className="main" data-img-url={data.img} />
                        </div>
                        <div className="detail">
                          <h3>{data.name}</h3>
                          <span>{data.profession}</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
              <div className="owl-dots"></div>
            </div>
            <div className="left_details d-none">
              <div
                className="det_image one wow fadeIn"
                data-wow-duration="1s"
                data-img-url="img/testimonials/2.jpg"
              />
              <div
                className="det_image two wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
                data-img-url="img/testimonials/1.jpg"
              />
              <div
                className="det_image three wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
                data-img-url="img/testimonials/3.jpg"
              />
              <div
                className="det_image four wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.6s"
                data-img-url="img/testimonials/4.jpg"
              />
              <span className="circle green animPulse" />
              <span className="circle yellow animPulse" />
              <span className="circle border animPulse" />
            </div>
            <div className="right_details d-none">
              <div
                className="det_image one wow fadeIn"
                data-wow-duration="1s"
                data-img-url="img/testimonials/5.jpg"
              />
              <div
                className="det_image two wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
                data-img-url="img/testimonials/6.jpg"
              />
              <div
                className="det_image three wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
                data-img-url="img/testimonials/7.jpg"
              />
               <div
                className="det_image one wow fadeIn"
                data-wow-duration="1s"
                data-img-url="img/testimonials/8.jpg"
              />
              <span className="circle yellow animPulse" />
              <span className="circle purple animPulse" />
              <span className="circle border animPulse" />
            </div>
          </div>
        </div>
        </div>
      
        <div className="col-md-4">
          <img src="/img/thumbs/feedback.png" alt="testimonal" />
        </div>
          </div>
       </div>
        <div className="brush_1 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/testimonials/1.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
