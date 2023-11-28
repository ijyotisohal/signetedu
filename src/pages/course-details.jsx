import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import Slider from "react-slick";
import PageBanner from "../components/about/PageBanner";
// import Accordion from "../src/components/Accordion";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import courseData from "../data/courses/courses.json";
import { slugify } from "../utils";
import CourseDetailsAccordian from "../elements/accordian/CourseDetailsAccrdian";
import { useDispatch, useSelector } from "react-redux";
import { fetchTranslations } from "../actions/languageActions";
import NewHeader from "../components/Header/NewHeader";
import CoreUnitsTableData from "../elements/tables/CoreUnitsTableData";
import UnitsOfCompetencyTable from "../elements/tables/UnitsOfCompetencyTable";
import FormModal from "../elements/FormModal";
import Loading from "../components/loading/Loading";
import FormModalOne from "../elements/FormModalOne";
import { Helmet } from "react-helmet-async";
const Data = courseData;
const shuffle = Data;
console.log(shuffle);
console.log(Data);
const CourseDetails = () => {
  const [active, setActive] = useState(`collapse1`);
  const onClick = (value) => {
    console.log(value);
    setActive(value === active ? "" : value);
  };
  const params = useParams();
  const courseSlug = params.slug;
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const translations = useSelector(
    (state) => state.language.translations[selectedLanguage]
  );

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
  console.log("Data", Data);

  const getCourseData =
    Data && Data.filter((data) => slugify(data.mainTitle) === courseSlug);
  const detailsService = getCourseData[0];
  return (
    <div className="cr-dlts">
      <Helmet>
<title>{detailsService.metaTitle}</title>
<meta name='description' content={detailsService.metaDescription} data-rh="true" />
</Helmet>
      <NewHeader />

      {/* <PageBanner pageName={detailsService.title} /> */}
      <div className="sub-course-banner pt--150 d-none">
        <div className="container">
          <div className="sub-banner-text pt-80">
            <div className="row">
              <div className="col-md-6 banner-sub-text-one">
                <h3 className="banner-sub-ttile">{detailsService.title}</h3>
                <p className="banner-sub-descr">
                  Embrace the opportunity to grow, develop, and achieve your
                  goals with Signet Institute of Australia. Take the first step
                  towards a brighter future by exploring our{" "}
                  {detailsService.title} below and embark on a transformative
                  educational journey like no other.
                </p>
                <p className="sub-banner-cap"> </p>
              </div>
              <div className="col-md-6 banner-sub-text-two ">
                {/* <div class="wrapper">
	<svg>
		<text x="50%" y="50%" dy=".35em" text-anchor="middle">
			Signet Institute 
		</text>
	</svg>
  <svg>
		<text x="50%" y="50%" dy=".35em" text-anchor="middle">
			 Of Australia
		</text>
	</svg>
</div> */}
                <div className="sub-c-banner">
                  <img
                    src="/assets/images/hero/hero-two-left.png"
                    alt="banner"
                  />
                </div>
                <div className="sub-c-banner-tw">
                  <img
                    className="sp-one"
                    src="/assets/images/shapes/circle-dots-two.png"
                    alt="banner"
                  />
                </div>
                <div className="sub-c-banner-th">
                  <img
                    className="sp-two"
                    src="https://themes.envytheme.com/ellen/wp-content/uploads/2022/07/shape-1.png"
                    alt="banner"
                  />
                  <img
                    class="sp-three"
                    src="/img/brushes/contact/2.png"
                    alt="banner"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cr-d">
        <section className="course-details-area pt-130 pb-80 rpt-100">
          <div className="container">
            <div className="row large-gap">
              <div className="col-lg-8">
                <div className="course-details-content">
                  <div className="course-header">
                    {/* <span className="category">{detailsService.cate}</span> */}
                    {/* <img src="assets/images/shapes/line-shape.png" alt="Line" /> */}
                    {/* <span className="off">30% off</span> */}

                    <h2>{detailsService.title}</h2>
                    <div className="ratting">
                      {/* <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" /> */}
                      <span>
                        {" "}
                        <strong style={{ color: "#000" }}>
                          Delivery Mode :{" "}
                        </strong>{" "}
                        {detailsService.deliveryMode}
                      </span>
                    </div>
                  </div>
                  <p className="banner-sub-descr">
                  Embrace the opportunity to grow, develop, and achieve your
                  goals with Signet Institute of Australia. Take the first step
                  towards a brighter future by exploring our{" "}
                  {detailsService.title} below and embark on a transformative
                  educational journey like no other.
                </p>
                  <ul className="author-date-enroll d-none">
                    <li>
                      <img
                        src={detailsService.image}
                        alt={detailsService.title}
                      />
                      <h6>{detailsService.trainername}</h6>
                    </li>
                    <li>
                      <i className="fas fa-cloud-upload-alt" />
                      {detailsService.lastUpdate}
                    </li>
                    <li>
                      <i className="far fa-user" /> {detailsService.enrolled}
                    </li>
                  </ul>
                  <div className="image mb-35 mt-35">
                    <img
                      src={detailsService.image}
                      alt={detailsService.title}
                    />
                  </div>

                  {/* <p>
                 {detailsService.description}
                </p> */}
                  {/* details starts from here */}

                  <CourseDetailsAccordian />
                  <div className="cordian">
                    <Accordion defaultActiveKey="15">
                      <Accordion.Item>
                        <Accordion.Header>
                          {" "}
                          {detailsService.coreUnits.title}
                        </Accordion.Header>
                        <Accordion.Body>
                          {/* {detailsService.coreUnits.coreUnitsList.map(
                            (bodyDataa, i) => (
                              <Accordion.Body>
                                <div key={i}>
                                  <h3 className="title">{bodyDataa.title}</h3>
                                  <p className="title">{bodyDataa.data}</p>
                                </div>
                              </Accordion.Body>
                            )
                          )} */}
                          <CoreUnitsTableData/>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                  <div className="cordian">
                    <Accordion defaultActiveKey="16">
                      <Accordion.Item>
                        <Accordion.Header>
                          {" "}
                          {detailsService.unitsOfCompetency.title}
                        </Accordion.Header>
                        <Accordion.Body>
                          {/* {detailsService.coreUnits.coreUnitsList.map(
                            (bodyDataa, i) => (
                              <Accordion.Body>
                                <div key={i}>
                                  <h3 className="title">{bodyDataa.title}</h3>
                                  <p className="title">{bodyDataa.data}</p>
                                </div>
                              </Accordion.Body>
                            )
                          )} */}
                          <UnitsOfCompetencyTable/>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <div className="widget widget-recent-courses wow fadeInUp delay-0-2s mt--30 d-none sm">
                    <h4 className="widget-title">
                      {detailsService.otherCoursesTitle}
                    </h4>
                    <ul>
                      {Data &&
                        Data.slice(7, 15)
                          .sort(() => Math.random() - 0.5)
                          .map((recentCourses) => (
                            <li>
                              <div className="image">
                                <img
                                  src={recentCourses.image}
                                  alt={recentCourses.title}
                                />
                              </div>
                              <div className="content">
                                <h6>
                                  <Link
                                    to={
                                      process.env.PUBLIC_URL +
                                      `/${slugify(
                                        recentCourses.courseCategory
                                      )}/${slugify(recentCourses.mainTitle)}`
                                    }
                                  >
                                    {recentCourses.title.slice(0, 30)}...
                                  </Link>
                                </h6>
                                <span>
                                  {detailsService.byTitle}{" "}
                                  <Link href="/course-grid">
                                    {detailsService.coursesSubTitle}
                                  </Link>
                                </span>
                              </div>
                            </li>
                          ))}
                    </ul>
                  </div>
                  </div>
                  {/* <div className="cordian">
                    <Accordion defaultActiveKey="17">
                      <Accordion.Item>
                        <Accordion.Header>
                          {" "}
                          {detailsService.unitsOfCompetency.title}
                          Standard Pricings
                        </Accordion.Header>
                        <Accordion.Body>
                       <ul>
                       <li><span><strong className="me-2 prices_tav" >{detailsService.materialPriceTitle} : </strong></span> {detailsService.price}</li>
                        <li> <span><strong className="me-2 prices_tav" >{detailsService.priceTitle} &nbsp; &nbsp;  </strong></span>{detailsService.materialPrice}</li>
                       </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div> */}
                  {/* deatils ends here */}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="course-sidebar rmt-75">
                  <div className="widget widget-course-details wow fadeInUp delay-0-2s">
                    <div className="widget-video">
                      <img src={detailsService.instImg} alt="Course Details" />
                      <Link
                        href="https://www.youtube.com/watch?v=9Y7ma241N8k"
                        className="mfp-iframe youtube-video-play"
                      >
                        <i className="fas fa-play" />
                      </Link>
                    </div>
                    {/* <div className="price-off">
                    <span className="price">259.83</span>
                    <span className="off">25% off</span>
                  </div> */}
                    <ul className="course-details-list mb-25">
                      <li>
                        <i className="far fa-file-alt" />{" "}
                        <span>{detailsService.coursesCodeTitle}</span>{" "}
                        <b>{detailsService.courseCode}</b>
                      </li>
                      <li>
                        <i className="far fa-clock" />{" "}
                        <span>{detailsService.cricosCodeTitle}</span>{" "}
                        <b>{detailsService.cricosCode}</b>
                      </li>
                      <li>
                        <i className="far fa-play-circle" />{" "}
                        <span>{detailsService.durationTitle}:</span>{" "}
                        <b>{detailsService.duration}</b>
                      </li>
                      <li>
                        <i className="far fa-clipboard" />{" "}
                        <span>{detailsService.facultyTitle}:</span>{" "}
                        <b>{detailsService.faculty}</b>
                      </li>
                      {/* <li>
                        <i className="far fa-file-alt" />{" "}
                        <span>{detailsService.coursesCodeTitle}</span> <b>{detailsService.courseCode}</b>
                        <span>{detailsService.priceTitle}</span> <b>{detailsService.price}</b>
                      </li>
                      <li>
                        <i className="far fa-file-alt" />{" "}
                        <span>{detailsService.coursesCodeTitle}</span> <b>{detailsService.courseCode}</b>
                        <span>{detailsService.materialPriceTitle}</span> <b>{detailsService.materialPrice}</b>
                      </li> */}
                    </ul>
                    {/* <p>
                  {detailsService.codeDescription}
                  </p> */}
                    
                      <p className="theme-btn">
                     {/* Learn More <i className="fas fa-arrow-right" />
                     
                      */}
                      <FormModalOne  />
                    </p>
                  
                    <a href="https://forms.zohopublic.com.au/signetinstituteofaustralia/form/StudentApplicationFormInternational1/formperma/r9spwShJ3jrSJbCj79M_ajhT3fVJ1WJjP0r34ch8nXQ" className="mt-4" >
                      <a  href="https://forms.zohopublic.com.au/signetinstituteofaustralia/form/StudentApplicationFormInternational1/formperma/r9spwShJ3jrSJbCj79M_ajhT3fVJ1WJjP0r34ch8nXQ" target=" " className="theme-btn mt-10">
                     Enroll Now <i className="fas fa-arrow-right" />
                     
                     
                     
                    </a>
                    </a>
                    <div className="social-style-two d-flex d-none">
                      <Link href="/contact">
                        <Link>
                          <i className="fab fa-twitter" />
                        </Link>
                      </Link>
                      <Link href="/contact">
                        <Link>
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </Link>
                      <Link href="/contact">
                        <Link>
                          <i className="fab fa-instagram" />
                        </Link>
                      </Link>
                      <Link href="/contact">
                        <Link>
                          <i className="fab fa-pinterest-p" />
                        </Link>
                      </Link>
                    </div>
                  </div>
                  <div className="widget widget-menu wow fadeInUp delay-0-2s mt--30">
                    <h4 className="widget-title">
                      {detailsService.categotyTitle}
                    </h4>
                    <ul>
                      {Data &&
                        Data.slice(0, 7).map((courseData) => (
                          <li>
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                `/${slugify(courseData.urlTitle)}`
                              }
                            >
                              <a> {courseData.title}</a>
                            </Link>{" "}
                            <span>({courseData.coursesLength})</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className="widget widget-recent-courses wow fadeInUp delay-0-2s mt--30">
                    <h4 className="widget-title">
                      {detailsService.otherCoursesTitle}
                    </h4>
                    <ul>
                      {Data &&
                        Data.slice(7, 15)
                          .sort(() => Math.random() - 0.5)
                          .map((recentCourses) => (
                            <li>
                              <div className="image">
                                <img
                                  src={recentCourses.image}
                                  alt={recentCourses.title}
                                />
                              </div>
                              <div className="content">
                                <h6>
                                  <Link
                                    to={
                                      process.env.PUBLIC_URL +
                                      `/${slugify(
                                        recentCourses.courseCategory
                                      )}/${slugify(recentCourses.mainTitle)}`
                                    }
                                  >
                                    {recentCourses.title.slice(0, 30)}...
                                  </Link>
                                </h6>
                                <span>
                                  {detailsService.byTitle}{" "}
                                  <Link href="/course-grid">
                                    {detailsService.coursesSubTitle}
                                  </Link>
                                </span>
                              </div>
                            </li>
                          ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Course Details End */}
      {/* <section className="pt-130" >

</section> */}
      <Footer />
    </div>
  );
};
export default CourseDetails;
