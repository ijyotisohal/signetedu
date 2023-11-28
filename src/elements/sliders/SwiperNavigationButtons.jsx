import React from 'react';
import { useSwiper } from 'swiper/react';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button onClick={() => swiper.slidePrev()}>
        <img src='/assets/images/slider/left-arrow.png' className='left-image' alt=''/>
      </button>
      <button onClick={() => swiper.slideNext()}><img src='/assets/images/slider/right-arrow.png' className='right-image' alt=''/></button>
    </div>
  );
};