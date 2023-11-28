import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import PageBanner from "../components/about/PageBanner";
import Counter from "../components/Counter";
import Footer from "../components/Footer/Footer";
import { Fade } from "react-awesome-reveal";
import AboutCube from "../components/about/AboutCube";
import ImageMasonry from "../components/masonary/MasonaryAbout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTranslations } from "../actions/languageActions";
import NewHeader from "../components/Header/NewHeader";
import Loading from "../components/loading/Loading";
import FormModal from "../elements/FormModal";
import { Helmet } from "react-helmet-async";
// import Typewriter from "typewriter-effect";
const handleChnge = () => {
  onclick = "window.print()";
};
const AboutPage = () => {
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
  
  const { aboutus } = translations;
  const industryList = aboutus.industry.list;
  const learnUs = aboutus.learnUs.list;
  return (
    <>
      <Helmet>
<title>About Us | Best Certificate & Diploma Courses | Signet Institute</title>
<meta name='description' content='Signet Institute of Australia are BASED IN MELBOURNE, SYDNEY & ADELAIDE. (13+ YEARS Experience) Providing Best Certificate & Diploma Courses.'data-rh="true" />
</Helmet>
      <NewHeader />
      {/* <PageBanner pageName={"About us"} /> */}

      {/* <Fade delay={1e3} triggerOnce cascade damping={1e-5}> */}

      {/* page banner */}

      {/* page banner */}
      {/* Page Banner End */}

      <div className="about-sec-">
        <section class="baner-sec pt-150 ">
        
          <div className="container">
            <div className="row">
              <div className="col-md-6 pt-60">
                <h2 className="title-banner ">
                {aboutus.banner.title}
                </h2>
                {/* <Typewriter
              options={{
                strings: ["Automotive Courses", "Business Course", "Construction Courses","Community  Courses","Healthcare Courses","General English "],
                autoStart: true,
                loop: true,
                delay: 90,
                className:"options-sub"
              }}
            /> */}
                <p>

{aboutus.banner.description}
</p>
                <Link to="/courses" >
                      <a to="/courses/" className="theme-btn my-15">
                       {aboutus.banner.buttonOne} <i className="fas fa-arrow-right" />
                      </a>
                    </Link>
                    <Link to="" className="mx-4">
                      <a to="" className="theme-btn my-15">
                        {/* {aboutus.banner.buttonTwo} <i className="fas fa-arrow-right" /> */}
                        <FormModal/>
                      </a>
                    </Link>
              </div>
              <div className="col-md-6 ">
                <div className="banner-ab-image">
                  <ImageMasonry/>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Section Start */}
        <section className="about-page-section pt-80 pb-65 rpt-90">
          <div className="container">
            <div className="row align-items-center large-gap">
              <div className="col-lg-5">
                <div className="about-page-content wow fadeInLeft delay-0-2s">
                  <div className="section-title mb-30">
                    <span className="sub-title-two">{aboutus.industry.title}</span>
                    <h2>{aboutus.industry.titleOne}</h2>
                  </div>
                  <p>
                  {aboutus.industry.descriptionOne}
                  </p>
                  <p>
                  {aboutus.industry.descriptionTwo}
                  </p>
                  <p>
                  {aboutus.industry.descriptionThree}
                  </p>
                  <div className="about-btns pt-25">
                    <Link to="/contact-us">
                      <a to="/" className="theme-btn my-15">
                      {aboutus.industry.buttonOne} <i className="fas fa-arrow-right" />
                      </a>
                    </Link>
                    {/* <Link to="/">
                      <a to="" className="read-more">
                    
                      {aboutus.industry.buttonTwo} <i className="fas fa-arrow-right" />
                      </a>
                    </Link> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="about-page-middle rpt-55 rpb-30 wow fadeInRight delay-0-2s">
                  <img src="assets/images/about/about-page.png" alt="About" />
                  <div className="circle-content">
                    <b>15</b>
                    <span>Years Of Experience</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="counter-wrap style-two wow fadeInRight delay-0-4s">
                 {
                  industryList.map((data)=>(
                    <div className="success-item">
                    <span
                      className="count-text plus"
                      data-speed={3000}
                      data-stop={data.count} 
                    > 
                      <Counter end={data.count} 
                        
                      /> 
                   <span className="mx-1" >+</span>
                    </span>
                   
                    <span>{data.title}</span>
                  </div>
                  ))
                 }
                
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Section End */}
        {/* about signet section one  */}
        <section className="team-setion-two  rel z-1 pt-80 rpt-90 pb-70 rpb-40">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-tw row justify-content-center align-items-center">
                <h2 className="about-tt">
                 {aboutus.signet.title}
                  <br />
                  <span className="count-text">{aboutus.signet.titleTwo}</span>
                </h2>
              </div>
              <div className="col-lg-6 col_tw ">
                <p>
                {aboutus.signet.descriptionOne}
                </p>
                <p>
                {aboutus.signet.descriptionTwo}
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* about signet section one  */}

        {/* vision and  mission section starts here */}
        <section className="team-setion-two vs-ms-sec pt--60">
          <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-4 ms-sec">
              <h2 className="ms-title">{aboutus.ourmission.title}</h2>
              <p className="ms-desc">
              {aboutus.ourmission.description}              </p>
            </div>
            <div className="col-md-4 vs-sec">
              <h2 className="vs-title">{aboutus.ourvision.title} </h2>
              <p className="vs-desc">
              {aboutus.ourvision.description} 
                            </p>
            </div>
            <div className="col-md-4 os-sec">
              <h2 className="vs-title">{aboutus.ourMotto.title} </h2>
              <p className="vs-desc">
              {aboutus.ourMotto.description} 
                            </p>
            </div>
          </div>
          </div>

        </section>
        {/* vision and  mission section Ends here */}

        {/* Features Section Start */}
        <section className="features-section-three rel z-1 pt-110 rpt-85 pb-20 rpb-70">
          <div className="container">
            <div className="section-title text-center mb-55">
              <span className="sub-title-two">{aboutus.learnUs.title}</span>
              <h2>{aboutus.learnUs.titleTwo}</h2>
            </div>
            <div className="row justify-content-center">
              {
                learnUs.map((data)=>(
                  <div className="col-lg-3 col-sm-6">
                <div className="feature-three-item wow fadeInUp delay-0-4s">
                  <div className="icon">
                    <img src={data.image} alt="Icon" />
                  </div>
                  <h4>{data.title}</h4>
                  <p>
                    {data.description}
                   </p>
                  <Link to="/about-us">
                    <a to="/about" className="details-btn">
                      <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </Link>
                </div>
              </div>
                ))
              }
            </div>
          </div>
        </section>
        {/* Features Section End */}
        {/* about signet section */}
        <section className="team-setion-two  rel z-1 pt-100 rpt-90 pb-70 rpb-40">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col_tw ">
                <p>
                {aboutus.ourCourses.descriptionOne}
                </p>
                <p>
                {aboutus.ourCourses.descriptionTwo}
                </p>
              </div>
              <div className="col-lg-6 col-tw row justify-content-center align-items-center">
                <AboutCube />
              </div>
            </div>
          </div>
        </section>
        {/* about signet section */}

   
        {/* Advertise Area Start */}
        <section className="advertise-area ">
          <div className="container">{/* <Advertise /> */}</div>
        </section>
        {/* Advertise Area End */}
        {/* Why Learn Start */}
        <section className="why-learn-area pt--100 rpb-100">
          <div className="container">
            <div className="row align-items-center large-gap wow fadeInLeft delay-0-2s">
              <div className="col-lg-6">
                <div className="why-learn-content rmb-35">
                  <div className="section-title mb-30">
                    <span className="sub-title-two">{aboutus.worldClassEducation.title}</span>
                    <h2>{aboutus.worldClassEducation.titleTwo}</h2>
                  </div>
                  <p>
                  {aboutus.worldClassEducation.descriptionTwo}
                  </p>
                  <div className="why-learn-feature pt-30">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="feature-three-item">
                          <div className="icon">
                            <img
                              src="assets/images/features/icon10.png"
                              alt="Icon"
                            />
                          </div>
                          <h4>{aboutus.worldClassEducation.list[0].title}</h4>
                          <p>
                          {aboutus.worldClassEducation.list[0].description}                          </p>
                          <Link to="/courses">
                            <a to="/about" className="read-more color-two theme-btn">
                            {aboutus.worldClassEducation.list[0].button} <i className="fas fa-arrow-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="feature-three-item">
                          <div className="icon">
                            <img
                              src="assets/images/features/icon7.png"
                              alt="Icon"
                            />
                          </div>
                          <h4>{aboutus.worldClassEducation.list[1].title}</h4>
                          <p>
                          {aboutus.worldClassEducation.list[1].description}                          </p>
                          <Link to="/contact-us">
                            <a to="/about" className="read-more color-two theme-btn">
                            {aboutus.worldClassEducation.list[1].button} <i className="fas fa-arrow-right" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="why-learn-image wow fadeInRight delay-0-2s">
                  <img
                    src="assets/images/about/choose-us-image-01-2.webp"
                    alt="Why Learn"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Why Learn End */}
        <div className="row justify-content-center mb-120">
              <div className="col-lg-10 col-sm-12 col-md-12">
              <p>{aboutus.sigdata.descriptionOne}</p>
              <p>{aboutus.sigdata.descriptionTwo}</p>
              <p><strong>{aboutus.sigdata.thankNote}</strong></p>
              </div>
              </div>
             {/* Team Section Start */}
             <section className="team-setion-two  rel z-1 pt--20 pb-80 d-none">
          <div className="container">
            <div className="row justify-content-center">  
              <div className="col-lg-8">
                <div className="section-title text-center mb-55">
                  <span className="sub-title-two">Meet Our Team</span>
                  <h2>We Have Thousands Of Experienced Team Members</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="team-member-two wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/teams/team1.jpg"
                      alt="Team Member"
                    />
                    <div className="social-style-two">
                      <Link to="/contact">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link to="/contact">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link to="/contact">
                        <i className="fab fa-instagram" />
                      </Link>
                      <Link to="/contact">
                        <i className="fab fa-pinterest-p" />
                      </Link>
                    </div>
                  </div>
                  <div className="member-description">
                    <h4>David S. Wickman</h4>
                    <span>Wed Designer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="team-member-two wow fadeInUp delay-0-4s">
                  <div className="image">
                    <img
                      src="assets/images/teams/team2.jpg"
                      alt="Team Member"
                    />
                    <div className="social-style-two">
                      <Link to="/contact">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link to="/contact">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link to="/contact">
                        <i className="fab fa-instagram" />
                      </Link>
                      <Link to="/contact">
                        <i className="fab fa-pinterest-p" />
                      </Link>
                    </div>
                  </div>
                  <div className="member-description">
                    <h4>Walter J. Drake</h4>
                    <span>Wed Developer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="team-member-two wow fadeInUp delay-0-6s">
                  <div className="image">
                    <img
                      src="assets/images/teams/team3.jpg"
                      alt="Team Member"
                    />
                    <div className="social-style-two">
                      <Link to="/contact">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link to="/contact">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link to="/contact">
                        <i className="fab fa-instagram" />
                      </Link>
                      <Link to="/contact">
                        <i className="fab fa-pinterest-p" />
                      </Link>
                    </div>
                  </div>
                  <div className="member-description">
                    <h4>Steven J. Voorhees</h4>
                    <span>Wed Designer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="team-member-two wow fadeInUp delay-0-8s">
                  <div className="image">
                    <img
                      src="assets/images/teams/team4.jpg"
                      alt="Team Member"
                    />
                    <div className="social-style-two">
                      <Link to="/contact">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link to="/contact">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link to="/contact">
                        <i className="fab fa-instagram" />
                      </Link>
                      <Link to="/contact">
                        <i className="fab fa-pinterest-p" />
                      </Link>
                    </div>
                  </div>
                  <div className="member-description">
                    <h4>Herman C. Kennedy</h4>
                    <span>Wed Designer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="team-member-two wow fadeInUp delay-0-2s">
                  <div className="image">
                    <img
                      src="assets/images/teams/team5.jpg"
                      alt="Team Member"
                    />
                    <div className="social-style-two">
                      <Link to="/contact">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link to="/contact">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link to="/contact">
                        <i className="fab fa-instagram" />
                      </Link>
                      <Link to="/contact">
                        <i className="fab fa-pinterest-p" />
                      </Link>
                    </div>
                  </div>
                  <div className="member-description">
                    <h4>Nathan A. Browning</h4>
                    <span>Business Consultant</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="team-member-two wow fadeInUp delay-0-4s">
                  <div className="image">
                    <img
                      src="assets/images/teams/team6.jpg"
                      alt="Team Member"
                    />
                    <div className="social-style-two">
                      <Link to="/contact">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link to="/contact">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link to="/contact">
                        <i className="fab fa-instagram" />
                      </Link>
                      <Link to="/contact">
                        <i className="fab fa-pinterest-p" />
                      </Link>
                    </div>
                  </div>
                  <div className="member-description">
                    <h4>Carmine M. Allen</h4>
                    <span>Senior Manager</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="team-member-two wow fadeInUp delay-0-6s">
                  <div className="image">
                    <img
                      src="assets/images/teams/team7.jpg"
                      alt="Team Member"
                    />
                    <div className="social-style-two">
                      <Link to="/contact">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link to="/contact">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link to="/contact">
                        <i className="fab fa-instagram" />
                      </Link>
                      <Link to="/contact">
                        <i className="fab fa-pinterest-p" />
                      </Link>
                    </div>
                  </div>
                  <div className="member-description">
                    <h4>Rubin R. Nelligan</h4>
                    <span>Wed Designer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="team-member-two wow fadeInUp delay-0-8s">
                  <div className="image">
                    <img
                      src="assets/images/teams/team8.jpg"
                      alt="Team Member"
                    />
                    <div className="social-style-two">
                      <Link to="/contact">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link to="/contact">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link to="/contact">
                        <i className="fab fa-instagram" />
                      </Link>
                      <Link to="/contact">
                        <i className="fab fa-pinterest-p" />
                      </Link>
                    </div>
                  </div>
                  <div className="member-description">
                    <h4>Jimmy T. Briley</h4>
                    <span>Programmer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Team Section End */}
        {/* Testimonials Section Start */}

        {/* Testimonials Section End */}
        {/* Partner Section Start */}
        <section className="partner-section rel z-1 pt-120 rpt-90 pb-75 rpb-55 d-none">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="categories-content mb-50 wow fadeInRight delay-0-2s">
                  <div className="section-title mb-25">
                    <span className="sub-title-two">
                      Training as a Responsibility
                    </span>
                    <h2>Creating a Fun and Exciting Learning Environmen</h2>
                    <p>
                      We take our job to train our students, not as a business,
                      but as a responsibility. It is our responsibility to
                      provide them with the best learning and engaging
                      experience while they are here in Australia as students.
                      We want to create an environment where learning is fun and
                      assessments are exciting. We believe in taking care of
                      every background process and services seamlessly so that
                      the students can focus on the only thing that matters –
                      their learning and development. We have planned, designed,
                      and structured our processes and services around student
                      experience, and this is exactly what we train our team
                      members in – exceptional service.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="logo-inner style-two wow fadeInLeft delay-0-2s"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* </Fade> */}
      <Footer />
    </>
  );
};
export default AboutPage;
