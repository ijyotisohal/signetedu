import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Contact";
import News from "../components/News";
import Newsletter from "../components/Newsletter";
import Partners from "../components/Partners";
import Process from "../components/Process";
import Service from "../components/Service";
import Skills from "../components/Skills";
import Testimonial from "../components/Testimonial";
import VerticalTabs from "../elements/VerticalTab";
// import Portfolio from '../Portfolio'
import HomeSlider from "../elements/sliders/HomeSlider";
import FalingAnimation from "../elements/animations/FalingAnimation";
// import { Fade } from 'react-awesome-reveal';
import Reveal from "react-reveal/Reveal";
import CoursesHome from "../components/courses/CoursesHome";
import ExploreCollage from "../components/ExploreCollage";
import Languageoption from "../components/language-dropdown";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Sustain from "../components/Sustain";
import TestimonalSlider from "../elements/sliders/TestimonalSlider";
import About from "../components/AboutComp";
import NewHeader from "../components/Header/NewHeader";
import TopSearches from "../components/home/SearchTop";
import WhyChooseUs from "../components/home/WhyChooseUs";
import BecomeAInstructor from "../components/home/BecomeAInstructor";
import TagComponent from "../components/TagComponent";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { fetchTranslations } from '../actions/languageActions';
import Loading from "../components/loading/Loading";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";



// import { LanguageProvider } from '../components/language/LanguageContext';
const HomeComponent = () => {
  
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.language.selectedLanguage);
  const translations = useSelector((state) => state.language.translations[selectedLanguage]);
  
  useEffect(() => {
    dispatch(fetchTranslations(selectedLanguage));
  }, [dispatch, selectedLanguage]);
  useEffect(() => {
    localStorage.setItem('language', selectedLanguage);
  }, [selectedLanguage]);
  if (!translations) {
    return <div className="load-logo">
      <Loading/>
    </div>; // Show loading state while translations are being fetched
  }
  
  const { homepage ,aboutus} = translations;
  return (
    // <LanguageProvider>
    <div>
      <Helmet>
<title>Signet Institute | Best Diploma Courses in Australia | Top Certificate Courses</title>
<meta name='description' content='We at Signet Institute, Providing Best Diploma Courses In Australia across Automotive, Business, Construction, etc.'data-rh="true" />
</Helmet>
      {/* <Header/> */}
      <NewHeader />
      
      {/* <Languageoption /> */}
      <div className="dizme_tm_section" id="home">
        <div className="hero-banner">
          <div class="remote-training-banner-area">
            <div class="container container-xl container-xxl">
              <div class="row align-items-center ">
                <div class="col-lg-6 col-md-12">
                  <div class="remote-training-banner-content">
                    <h1 class="title">
                    {homepage.banner.title}{" "}
                    </h1>
                    <p>
                    {homepage.banner.description}
                    </p>

                  

                    <div class="support-box">
                      <div class="d-flex align-items-center">
                        {/* <div class="images d-flex align-items-center">
                          <img
                            decoding="async"
                            src="https://themes.envytheme.com/ellen/wp-content/uploads/2022/01/user4.jpg"
                            alt="Find Simple &amp; Effective <b>Training</b> Courses Now"
                          />
                          <img
                            decoding="async"
                            src="https://themes.envytheme.com/ellen/wp-content/uploads/2021/11/user2.jpg"
                            alt="Find Simple &amp; Effective <b>Training</b> Courses Now"
                          />
                          <img
                            decoding="async"
                            src="https://themes.envytheme.com/ellen/wp-content/uploads/2021/11/user3.jpg"
                            alt="Find Simple &amp; Effective <b>Training</b> Courses Now"
                          />
                        </div> */}
                        <div class="text">
                          {/* <p>
                            <span>{homepage.banner.count}</span> {homepage.banner.trusted}{" "}
                            <a href="https://themes.envytheme.com/ellen/success-stories/">
                              {" "}
                              {homepage.banner.viewRev}
                            </a>
                          </p> */}
                          <Link to="/courses" >
                      <a to="/courses/" className="theme-btn my-15">
                       {aboutus.banner.buttonOne} <i className="fas fa-arrow-right" />
                      </a>
                    </Link>
                    <Link to="/contact-us" className="mx-4">
                      <a to="/contact-us" className="theme-btn my-15">
                        {aboutus.banner.buttonTwo} <i className="fas fa-arrow-right" />
                      </a>
                    </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12">
                  <div class="remote-training-banner-image">
                    <img
                      decoding="async"
                      src="https://themes.envytheme.com/ellen/wp-content/uploads/2022/07/remote-training-main.jpg"
                      alt="Find Simple &amp; Effective <b>Training</b> Courses Now"
                    />

                    <div class="banner-video-1">
                      <div class="video">
                        <img
                          decoding="async"
                          src="https://themes.envytheme.com/ellen/wp-content/uploads/2022/07/banner-user-image1.gif"
                          alt="Find Simple &amp; Effective <b>Training</b> Courses Now"
                        />
                      </div>
                    </div>
                    <div class="banner-video-2">
                      <div class="video">
                        <img
                          decoding="async"
                          src="https://themes.envytheme.com/ellen/wp-content/uploads/2022/07/banner-user-image2.gif"
                          alt="Find Simple &amp; Effective <b>Training</b> Courses Now"
                        />
                      </div>
                      <a
                        href="https://www.youtube.com/watch?v=PWvPbGWVRrU"
                        class="popup-video"
                      >
                        <i class="bx bx-play"></i>
                      </a>
                    </div>
                    <div class="banner-wrap-shape">
                      <a href="https://themes.envytheme.com/ellen/success-stories/">
                        {/* <img
                          decoding="async"
                          src="https://themes.envytheme.com/ellen/wp-content/uploads/2022/07/shape-1.png"
                          alt="Find Simple &amp; Effective <b>Training</b> Courses Now"
                        /> */}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Fade delay={1e3} triggerOnce cascade damping={1e-5}> */}
      {/* HERO */}
      {/* ABOUT */}
      <About />
      {/* /ABOUT */}
      {/* Slider */}
     
      {/* /Slider */}
      {/* Courses */}
      <CoursesHome />
      {/* Courses */}

      {/* collage numbers */}
      {/* <TagComponent /> */}
      <FalingAnimation />
      {/* /collage numbers */}

      {/* PROCESS */}
      <Process />
      {/* /PROCESS */}
      {/* why choose us  */}
      {/* <WhyChooseUs/> */}
      {/* why choose us  */}
      {/* PORTFOLIO */}
      {/* <Portfolio /> */}
      {/* /PORTFOLIO */}
      {/* SKILLS */}
      {/* Sustain */}
      <Sustain />

      {/* /Sustain */}
      {/* Vertical Tab */}
      <VerticalTabs />
      {/* /Vertical Tab */}
      <Skills />
      {/* /SKILLS */}
      {/* become a instructor */}
      {/* <BecomeAInstructor/> */}
      {/* become a instructor */}
      {/* PARTNERS */}
      <ExploreCollage />
      {/* /PARTNERS */}
      {/* TESTIMONIALS */}
      {/* <TestimonalSlider/> */}

      <Testimonial />
      {/* /TESTIMONIALS */}
      {/* NEWS */}
     
      <Contact />
      <HomeSlider />
      {/* <Newsletter /> */}
      <News />

      {/* <BannerOne/>
        <AboutOne/>
        <CoursesMain/>
        <FixedBottomNavigation/> */}
      {/* </Fade> */}

      <Footer />
    </div>
    // </LanguageProvider>
  );
};

export default HomeComponent;
