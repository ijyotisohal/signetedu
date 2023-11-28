import React from 'react'
import Swiper from 'swiper';

const TestimonalSlider = () => {
    const galleryThumbs = new Swiper('.gallery-thumbs', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: '2',
        loop:true,
        allowTouchMove:true,
        allowSlideNext:true,
        allowSlidePrev :true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true,   

        },
        
        
        // coverflowEffect: {
        //     rotate: 0,
        //     stretch: 0,
        //     depth: 50,
        //     modifier: 6,
        //     slideShadows : false,
        //   },
          
      });
      
      
    const galleryTop = new Swiper('.swiper-container.testimonial', {
        speed: 400,
        spaceBetween: 50,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
       loop:true,
        direction: 'vertical',
        pagination: {
          clickable: true,
          el: '.swiper-pagination',
          type: 'bullets',
        },
        
        thumbs: {
            swiper: galleryThumbs
          }
      });
      
  return (
    <div className=' mt--40' >
        <section class="spacer">
			
            <div class="testimonial-section">
                <div class="testi-user-img">
                <div class="swiper-container gallery-thumbs">
                      <div class="swiper-wrapper">
                              <div class="swiper-slide swiper-slider-img">
                                    <img class="u3" src="https://md-aqil.github.io/images/2091127763_1_1_1.jpg" alt=""/>
                                </div>
                      <div class="swiper-slide swiper-slider-img">
                          <img class="u1" src="https://md-aqil.github.io/images/beautiful-beauty-face-2657838.jpg" alt=""/>
                      </div>
                      <div class="swiper-slide swiper-slider-img">
                      <img class="u2" src="https://md-aqil.github.io/images/attractive-beautiful-beauty-1986684.jpg" alt=""/>
                      </div>
                  
                      <div class="swiper-slide swiper-slider-img">
                      <img class="u4" src="https://md-aqil.github.io/images/beautiful-beauty-face-2657838.jpg" alt=""/>
                      </div>
                      
                      </div>
                  </div>
                </div>
                <div class="user-saying">
                      <div class="swiper-container testimonial">
                              {/* <!-- Additional required wrapper --> */}
                              <div class="swiper-wrapper ">
                                  {/* <!-- Slides --> */}
                                  <div class="swiper-slide swiper-slider-img">
                                      <div class="quote">
                                              <img class="quote-icon" src="https://md-aqil.github.io/images/quote.png" alt=""/>
                                          <p>
                                                  “This is best and biggest unified platform
                                          for instant online admission. We can easily
                                          take admission for any course in any institute..“
                                          </p>
                                          <div class="name">-Ramkishor Verma-</div>
                                          <div class="designation">University Student</div>
                                          
                                      </div>
                                  </div>
                                  <div class="swiper-slide swiper-slider-img">
                                      <div class="quote">
                                            <img class="quote-icon" src="https://md-aqil.github.io/images/quote.png" alt=""/>
                                        
                                          <p>
                                                  “This is best and biggest unified platform
                                          for instant online admission. We can easily
                                          take admission for any course in any institute..“
                                          </p>
                                          <div class="name">-Ramkishor Verma-</div>
                                          <div class="designation">University Student</div>
                                          
                                      </div>
                                  </div>
                                  <div class="swiper-slide swiper-slider-img">
                                      <div class="quote">
                                            <img class="quote-icon" src="https://md-aqil.github.io/images/quote.png" alt=""/>
                                              
                                          <p>
                                                  “This is best and biggest unified platform
                                          for instant online admission. We can easily
                                          take admission for any course in any institute..“
                                          </p>
                                          <div class="name">-Ramkishor Verma-</div>
                                          <div class="designation">University Student</div>
                                          
                                      </div>
                                  </div>
                                  <div class="swiper-slide swiper-slider-img">
                                          <div class="quote">
                                                <img class="quote-icon" src="https://md-aqil.github.io/images/quote.png" alt=""/>
                                             
                                              <p>
                                                      “This is best and biggest unified platform
                                              for instant online admission. We can easily
                                              take admission for any course in any institute..“
                                              </p>
                                              <div class="name">-Ramkishor Verma-</div>
                                              <div class="designation">University Student</div>
                                              
                                          </div>
                                      </div>
                                  
                              </div>
                              {/* <!-- If we need pagination --> */}
                              <div class="swiper-pagination swiper-pagination-white"></div>
                          
                          </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default TestimonalSlider