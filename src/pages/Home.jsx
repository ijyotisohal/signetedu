import React from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import News from "./components/News";
import Newsletter from "./components/Newsletter";
import Partners from "./components/Partners";
import Process from "./components/Process";
import Service from "./components/Service";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";
import VerticalTabs from "./elements/VerticalTab";
// import Portfolio from './Portfolio'
import HomeSlider from './elements/sliders/HomeSlider';
import FalingAnimation from './FalingAnimation';
// import { Fade } from 'react-awesome-reveal';
import Reveal from 'react-reveal/Reveal';
import CoursesHome from './components/courses/CoursesHome';
import ExploreCollage from './components/ExploreCollage';
import Languageoption from './components/language-dropdown';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Sustain from './components/Sustain';
import TestimonalSlider from './elements/sliders/TestimonalSlider';
import NewHeader from '../components/Header/NewHeader';
// import { LanguageProvider } from './components/language/LanguageContext';
const HomeComponent = () => {
  const {t} = useTranslation();
  const handleClick=(e)=>{
      i18next.changeLanguage(e.target.value)
  }
  return (
    // <LanguageProvider>
    <div>
      <NewHeader/>
      <Languageoption onChange={(e)=> handleClick(e)}/>
      <Home />
      {/* <Fade delay={1e3} triggerOnce cascade damping={1e-5}> */}
      {/* HERO */}
          {/* ABOUT */}
          <About />
      {/* /ABOUT */}
       {/* Slider */}
       <HomeSlider />
      {/* /Slider */}
      {/* Courses */}
<CoursesHome/>
{/* Courses */}

     
      {/* collage numbers */}
      
      <FalingAnimation />
      {/* /collage numbers */}
  
      {/* PROCESS */}
      <Process />
      {/* /PROCESS */}
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
  
      {/* PARTNERS */}
   <ExploreCollage/>
      {/* /PARTNERS */}
      {/* TESTIMONIALS */}
      {/* <TestimonalSlider/> */}
      <Testimonial />
      {/* /TESTIMONIALS */}
      {/* NEWS */}
      <News />
      <Newsletter />
      <Contact />
        {/* <BannerOne/>
        <AboutOne/>
        <CoursesMain/>
        <FixedBottomNavigation/> */}
      {/* </Fade> */}

      <Footer/>
    
    </div>
    // </LanguageProvider>
  )
}

export default HomeComponent