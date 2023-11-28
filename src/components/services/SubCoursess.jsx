import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import '../../assets/Courses.css';
import CoursesData from '../../data/courses/courses.json';
import {Link, useParams} from 'react-router-dom';
import {slugify} from '../../utils/index'
import { Fade } from 'react-awesome-reveal';
import PageBanner from '../about/PageBanner';
import SubCoursesBanner from '../../elements/sliders/SubCoursesSliderBanner';
import AboutCube from '../about/AboutCube';
import SubCourseBanner from '../../elements/sliders/SubCourseBanner';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTranslations } from '../../actions/languageActions';
import NewHeader from '../Header/NewHeader';
import Loading from '../loading/Loading';
import FormModal from '../../elements/FormModal';
import FormModalOne from '../../elements/FormModalOne';
import { Helmet } from 'react-helmet-async';
// import Loading from "../components/loading/Loading";
// const Data = CoursesData;
const SubCoursess = () => {

  const params = useParams();
  const courseSlug = params.slug;
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.language.selectedLanguage);
  const translations = useSelector((state) => state.language.translations[selectedLanguage]);
  
  useEffect(() => {
    dispatch(fetchTranslations(selectedLanguage));
  }, [dispatch, selectedLanguage]);
  
  if (!translations) {
    return <div>
      <Loading/>
    </div>; // Show loading state while translations are being fetched
  }
  
  const { homepage } = translations;
  const Data = homepage.program.coursesList;
  console.log("Data",Data)
  const getCourseData = Data && Data.filter(data => slugify(data.urlTitle) === courseSlug);
  const detailsService = getCourseData[0];
  const couseSlug = detailsService ? detailsService.urlTitle : '';
  const automotiveData = Data && Data.filter(data => slugify(data.cate ? data.cate : "") === "automotive");
  const businessData = Data && Data.filter(data => slugify(data.cate ? data.cate : "") === "business");
  const constructionData = Data && Data.filter(data => slugify(data.cate ? data.cate : "") === "construction");
  const communityData = Data && Data.filter(data => slugify(data.cate ? data.cate : "") === "community");
  const healthcareData = Data && Data.filter(data => slugify(data.cate ? data.cate : "") === "healthcare");
  const manufactureData = Data && Data.filter(data => slugify(data.cate ? data.cate : "") === "healthcare");
  const generalData = Data && Data.filter(data => slugify(data.cate ? data.cate : "") === "manufacture");
  console.log(automotiveData);
  console.log(businessData);
  console.log(constructionData);
  console.log(communityData);
  console.log(healthcareData);
  console.log(generalData);
  console.log(manufactureData);
  console.log(detailsService)
  return (
    <div className='sb-cr '>
   <Helmet>
<title>{detailsService.metaTitle}</title>
<meta name='description' content={detailsService.metaDescription} data-rh="true" />
</Helmet>
      <NewHeader/>
      <Fade   delay={1e2} triggerOnce cascade damping={1e-9}>
     
       <div className="sub-course-banner pt--60 d-none">
       <div className="container">
       <div className="sub-banner-text pt-80">
          <div className="row align-items-center">
         
            <div className="col-md-6 banner-sub-text-one">
      
              <h3 className="banner-sub-ttile">
              Explore Our <br /> {detailsService.title}
              </h3>
              <p className="banner-sub-descr">
       {detailsService.bannerDesc}
              </p>
              <p className="sub-banner-cap"> </p>
            </div>
            <div className="col-md-6 banner-sub-text-two pt--100 ">
            
                <div className="sub-c-banner">
                <img
                    src="/assets/images/hero/hero-three-man.png"
                    alt="banner"
                  />
               
                </div>
                <div className="sub-c-banner-tw">
                <img className='sp-one'
                    src="/assets/images/shapes/circle-dots-two.png"
                    alt="banner"
                  />
                </div>
                <div className="sub-c-banner-th">
                <img className='sp-two'
                    src="https://themes.envytheme.com/ellen/wp-content/uploads/2022/07/shape-1.png"
                    alt="banner"
                  />
                  <img class="sp-three" src="/img/brushes/contact/2.png" alt="banner"></img>
                </div>
               
            </div>
          </div>
        </div>
       </div>
       </div>
  <div className=" pt-150 pb-80">
  <div className="container">
  <h3 className="courses-available-title pt--40 h1">  {detailsService.title}</h3>
 <p> {detailsService.bannerDesc}</p>
        <div className="row justify-content-center align-items-center">
          {
            Data &&
  Data.filter((data) => slugify(data.cate ? data.cate : "") === detailsService.data).map((cData)=>(
             <div className="col-md-4">
                    <div className="coach-item wow fadeInUp delay-0-4s">
                      <div className="coach-image">
                      {/* <Link to={process.env.PUBLIC_URL + `/${slugify(couseSlug)}/${slugify(cData.mainTitle)}`}>
                          <a className="category">{cData.title}</a>
                        </Link> */}
                        <img
                          src={cData.image}
                          alt={cData.title}
                        />
                      </div>
                      <div className="coach-content">
                        {/* <span className="label">Basic Coach</span> */}
                        <h4>
                        <Link to={process.env.PUBLIC_URL + `/${slugify(couseSlug)}/${slugify(cData.mainTitle)}`}>

                           {cData.title}
                          </Link>
                        </h4>
                        <div className="ratting-price">
                          <div className="ratting">
                            {/* <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" /> */}
                            <span> {cData.courseCode}</span>
                          </div>
                          <span className="price">{cData.duration}</span>
                        </div>
                        <ul className="coach-footer">
                        <li>
                      <FormModalOne/>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
            ))
          }
         
        </div>
      </div>
  </div>
      </Fade>
      <Footer/>
    </div>
  )
}

export default SubCoursess