import PageBanner from '../components/about/PageBanner';
import Pagination from "../components/Pagination";
import {Link} from 'react-router-dom';
import CoursesData from '../data/courses/courses.json'
import { slugify } from '../utils';
import Header from '../components/Header/Header';
import { useState } from 'react';
import CourseBanner from '../elements/sliders/CourseBanner';
import Footer from '../components/Footer/Footer';
import TitleMessage from '../components/banner/elements/TypeWritter';
import Loading from "../components/loading/Loading";
import { useDispatch, useSelector } from 'react-redux';
import { fetchTranslations } from '../actions/languageActions';
import { useEffect } from "react";
import Languageoption from '../components/language-dropdown';
import NewHeader from '../components/Header/NewHeader';
import { Helmet } from 'react-helmet-async';
// const Data = CoursesData;
const CourseGrid = () => {
  
  const [filteredData, setFilteredData] = useState();
  const [selectedCategory, setSelectedCategory] = useState("");
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.language.selectedLanguage);
  const translations = useSelector((state) => state.language.translations[selectedLanguage]);
  useEffect(() => {
    // Scroll to 1000px vertically
    window.scrollTo(0, 650);
  }, []);
  useEffect(() => {
    dispatch(fetchTranslations(selectedLanguage));
  }, [dispatch, selectedLanguage]);
  
  if (!translations) {
    return <div  >
   <Loading/>
    </div>; // Show loading state while translations are being fetched
  }
  
  const { homepage,header } = translations;
  const Data = homepage.program.coursesList;
console.log("courses", Data)
  console.log(homepage,)
  const handleTitleFilter = (title) => {
    const filtered = Data.filter((product) =>
      product.title.includes(title)
    );
    setFilteredData(filtered);
  };

  const handleCategoryFilter = (cate) => {
    const filtered = Data.filter((product) => product.cate === cate);
    setFilteredData(filtered);
  };

  const handleCategoryClick = (cate) => {
    setSelectedCategory(cate);
    if (cate === "") {
      setFilteredData(Data);
    } else {
      handleCategoryFilter(cate);
    }
  };

  return (
    <div className='cr-sec' >
      <Helmet>
<title>Top Diploma Certificate Courses In Australia | Signet Institute</title>
<meta name='description' content='Top Diploma Certificate Courses - In Automotive, Building & Construction, Community, Healthcare and General English Courses.'data-rh="true" />
</Helmet>
    <NewHeader/>
    <Languageoption/>
      {/* <PageBanner pageName={"Courses In Signet"} /> */}
      <div className="course-banner">
      <div className="pt-120 pb-40">
        <div className="container">
          <div className="row align-items-center" >
            <div className="col-md-6 pt--60">
            {/* <CourseBanner/> */}
            <h3 className="banner-sub-ttile">
            {homepage.program.coursesHomebanner.banner}                        </h3>
              <p className="banner-sub-descr">
              {homepage.program.coursesHomebanner.description}
</p>              {/* <p className="sub-banner-cap"> </p> */}
         
                {/* <img src="/images/course-bn-image.png" alt="Banner " /> */}
                {/* <Link to="/crds/"  >
                      <a to="/crds/" className="theme-btn my-15">
                      {homepage.program.coursesHomebanner.buttonOne}<i className="fas fa-arrow-right" />
                      </a>
                    </Link> */}
                    <Link to="/contact-us" className="mx-0">
                      <a to="/contact-us" className="theme-btn my-15">
                      {homepage.program.coursesHomebanner.buttonTwo} <i className="fas fa-arrow-right" />
                      </a>
                    </Link>
            </div>
            <div className="col-md-6">
             <div className="banner-sec-images">
             <div className="course-bn-image-one">
            {/* <CourseBanner/> */}
            <img
                    src="/assets/images/gallery/gallery1.jpg"
                    alt="banner"
                  />
           
              </div>
              <div className="course-bn-image-two">
            {/* <CourseBanner/> */}
            <img
                    src="/assets/images/gallery/gallery2.jpg"
                    alt="banner"
                  />
           
              </div>
              <div className="course-bn-image-three">
            {/* <CourseBanner/> */}
            <img
                    src="/assets/images/gallery/gallery3.jpg"
                    alt="banner"
                  />
           
              </div>
             </div>

            </div>

          </div>
        </div>
      </div>
      </div>
      {/* Page Banner End */}
      {/* Course Left Start */}
      <section className="course-left-area py-20 rpy-20" id='crds'>
        <div className="container">
          <div className="row large-gap">
            <div className="col-lg-4">
              <div className="course-sidebar rmb-55">
                <div className="widget widget-search wow fadeInUp delay-0-2s">
                
                </div>
                <div className="widget widget-menu wow fadeInUp delay-0-4s">
                  <h4 className="widget-title">{homepage.program.categoryTitle}</h4>
                  <ul>
                  {
                    Data.slice(0,7).map((courseData)=>(
                      <li>
                      <Link to={process.env.PUBLIC_URL + `/${slugify(courseData.urlTitle)}`}>
                        <a> {courseData.title}</a>
                      </Link>{" "}
                      <span>({courseData.coursesLength})</span>
                      {/* <span>{${slugify(courseData.title)}}</span> */}
                    </li>
                    ))
                  }
                   
                  </ul>
                </div>
                <div className="widget widget-menu wow fadeInUp delay-0-2s d-none">
                  <h4 className="widget-title">Courses Available </h4>
                  {/* <ul>
                   
                   {
                    Data.map((instuctors)=>(
                      <li>
                      <Link to="/instructors">{instuctors.teacher}</Link>{" "}
                      <span>(8)</span>
                    </li>
                    ))
                   }
                  </ul> */}
                  {
                    Data.slice(6,31).map((courseData)=>(
                      <li>
                      <Link to={process.env.PUBLIC_URL + `/${slugify(courseData.title)}`}>
                        <a> {courseData.title}</a>
                      </Link>{" "}
                      <span>({courseData.coursesLength})</span>
                      {/* <span>{${slugify(courseData.title)}}</span> */}
                    </li>
                    ))
                  }
                </div>
                <div className="widget widget-radio wow fadeInUp delay-0-2s d-none">
                  <h4 className="widget-title">Filter By Price</h4>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="newsletter-form"
                    action="#"
                  >
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="all-course"
                        name="filter"
                        defaultChecked=""
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="all-course"
                      >
                        Show All Courses <span>(205)</span>
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="premium-course"
                        name="filter"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="premium-course"
                      >
                        Premium Courses <span>(159)</span>
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="free-course"
                        name="filter"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="free-course"
                      >
                        Free Courses <span>(65)</span>
                      </label>
                    </div>
                  </form>
                </div>
                <div className="widget widget-radio wow fadeInUp delay-0-2s d-none">
                  <h4 className="widget-title">Filter By Level</h4>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="newsletter-form"
                    action="#"
                  >
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="all-level"
                        name="filter"
                        defaultChecked=""
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="all-level"
                      >
                        Show All Level <span>(55)</span>
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="beginner-level"
                        name="filter"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="beginner-level"
                      >
                        Beginner Level <span>(20)</span>
                      </label>
                    </div>
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        className="custom-control-input"
                        id="advance-level"
                        name="filter"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="advance-level"
                      >
                        Advance level <span>(45)</span>
                      </label>
                    </div>
                  </form>
                </div>
                <div className="widget widget-ratting wow fadeInUp delay-0-2s d-none">
                  <h4 className="widget-title">Filter By Rating</h4>
                  <ul>
                    <li>
                      <div className="ratting">
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star checked" />
                      </div>
                      <span>(35)</span>
                    </li>
                    <li>
                      <div className="ratting">
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star" />
                      </div>
                      <span>(28)</span>
                    </li>
                    <li>
                      <div className="ratting">
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span>(23)</span>
                    </li>
                    <li>
                      <div className="ratting">
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span>(4)</span>
                    </li>
                    <li>
                      <div className="ratting">
                        <i className="fas fa-star checked" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <span>(0)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="course-grids">
                <div className="shop-shorter mb-40 wow fadeInUp delay-0-2s">
              
                  <ul className="grid-list">
                    <li>
                      <a href="#">
                        <i className="fas fa-list-ul" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="active">
                        <i className="fas fa-border-all" />
                      </a>
                    </li>
                  </ul>
                
                </div>
                <div>
      {/* <h2>Product List</h2>
 

      <h3>Filter by Category:</h3>
      <ul>
        <li onClick={() => handleCategoryClick("")}>All Categories</li>
        {Array.from(new Set(Data.map((product) => product.cate))).map(
          (cate) => (
            <li key={cate} onClick={() => handleCategoryClick(cate)}>
              {cate}
            </li>
          )
        )}
      </ul>

      <h3>Filtered Data:</h3>
      <ul>
        {filteredData.map((product) => (
          <li key={product.id}>
            {product.title} - {product.category}
          </li>
        ))}
      </ul> */}
    </div>
                <div className="row">
                  {
                    Data.map((data)=>(
                      <div className="col-md-6">
                    <div className="coach-item wow fadeInUp delay-0-4s">
                      <div className="coach-image">
                        {/* <Link to={process.env.PUBLIC_URL + `/${slugify(data.urlTitle)}`}>
                          <a className="category">{data.title}</a>
                        </Link> */}
                        <img
                          src={data.image}
                          alt={data.title}
                        />
                      </div>
                      <div className="coach-content">
                        {/* <span className="label">Basic Coach</span> */}
                        <h4>
                          <Link to={process.env.PUBLIC_URL + `/${slugify(data.urlTitle)}`}>
                           {data.title}
                          </Link>
                        </h4>
                        <div className="ratting-price">
                          <div className="ratting">
                           
                            <span> {header.courses} ({data.coursesLength})</span>
                          </div>
                          {/* <span className="price">{data.price}</span> */}
                        </div>
                        {/* <ul className="coach-footer">
                          <li>
                            <i className="far fa-file-alt" />
                            <span>12 Lessions</span>
                          </li>
                          <li>
                            <i className="far fa-user" />
                            <span>seats</span>
                          </li>
                        </ul> */}
                      </div>
                    </div>
                  </div>
                    ))
                  }
            
                </div>
                <ul className="pagination flex-wrap mt-20">
                  <Pagination
                    paginationCls={".course-grids .row .col-md-6"}
                    sort={8}
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
    //
  );
};
export default CourseGrid;
