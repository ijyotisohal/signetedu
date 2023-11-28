import { Link } from "react-router-dom";
import Newsletters from "./Newsletters";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTranslations } from "../../actions/languageActions";
import Loading from "../loading/Loading";

const Footer = ({ footer }) => {
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
    return (
      <div>
        <Loading />
      </div>
    ); // Show loading state while translations are being fetched
  }

  // const { foooter } = translations;
  // console.log(foooter.courses.courseFive)
  // const scrollTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };
  switch (footer) {
    case 1:
      return <Footer1 />;
    case 3:
      return <Footer3 />;
    case 4:
      return <Footer4 />;
    default:
      return <DefaultFooter />;
  }
};
export default Footer;
const FollowIcon = () => (
    <>
      <a href="https://www.facebook.com/signetinstituteofaustralia">
        <a>
          <img
            src="/assets/images/video/facebook.png"
            alt="play button "
            className="facebook"
          />
        </a>
      </a>
      <a href="https://www.instagram.com/signetinstitute/">
        <a>
          <img
            src="/assets/images/video/twitter.png"
            alt="play button "
            className="twitter"
          />
        </a>
      </a>
      <a href="https://www.linkedin.com/company/13708395/admin/feed/posts/">
        <a>
          <img
            src="/assets/images/video/linkedin.png"
            alt="play button "
            className="linkedin"
          />
        </a>
      </a>
      <a href="https://www.youtube.com/@SignetInstituteKr">
        <a>
          <img
            src="/assets/images/video/youtube.png"
            alt="play button "
            className="youtube"
          />
        </a>
      </a>
      <a
        href="https://wa.me/61402945563"
        title="Get In Touch With us "
        target="_blank"
        className="whatsapp"
      >
      
       <a>
       <img
          src="/assets/images/whatsapp.png"
          className="whatsapp-image pulse"
          alt=""
        />
       </a>
      </a>
    </>
  ),
  Courses = () => (
    <>
      <li>
        <Link to="/automotive-courses/">Automotive </Link>
      </li>
      <li>
        <Link to="/business-courses/">Business </Link>
      </li>
      <li>
        <Link to="/construction-courses/">Building And Construction</Link>
      </li>
      <li>
        <Link to="/community-courses/">Community Service</Link>
      </li>
      <li>
        <Link to="/manufacturing-and-engineering/">
          Fabrication and Manufacturing
        </Link>
      </li>
      <li>
        <Link to="/general-english/">General English</Link>
      </li>
      <li>
        <Link to="/healthcare-courses/">Health</Link>
      </li>
    </>
  ),
  Resources = () => (
    <>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/about-us">About Us</Link>
      </li>
      <li>
        <Link to="https://signet.instructure.com/contact">Canvas LMS</Link>
      </li>
      <li>
        <Link to="/forms">Forms</Link>
      </li>
      <li>
        <Link to="/australian-lifestyle/">Australian Lifestyle</Link>
      </li>
      <li>
        <Link to="/agent-application-form">Agents</Link>
      </li>
    </>
  ),
  FooterBottom = () => (
    <>
      <li>
        <Link to="/faqs">Faqs</Link>
      </li>
      <li>
        <Link to="/contact">Links</Link>
      </li>
      <li>
        <Link to="/about-us">About</Link>
      </li>
      <li>
        <Link to="/contact">Payments</Link>
      </li>
    </>
  ),
  CopyRight = () => (
    <p>
      © {new Date().getFullYear()}.{" "}
      <Link to="/">Signet Institute Of Australia </Link> All rights reserved.
    </p>
  ),
  DefaultFooter = ({ scrollTop }) => (
    <footer className="main-footer ">
      <div className="container">
        <Newsletters />
        <div className="row justify-content-between text-white pt-75">
          <div className="col-lg-3 col-sm-4">
            <div className="footer-widget about-widget">
              <h5 className="footer-title">About Us</h5>
              <p>
                The goal is to equip participants with the knowledge and skills
                to maximise their full potential. Signet Institute of Australia
                is established to offer high-quality education.
              </p>
              <p>
                <strong className="fw-bold">RTO CODE</strong>: 40898
              </p>
              <p>
                <strong className="fw-bold">CRICOS Code</strong>:03377J
              </p>
              <p>
                <strong className="fw-bold">ABN</strong>: 37 135 002 167
              </p>
              <h5 className="pt-5">Follow Us</h5>
              <div className="social-style-one">
                <FollowIcon />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-4">
            <div className="footer-widget menu-widget">
              <h5 className="footer-title">Courses</h5>
              <ul>
                <Courses />
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-4">
            <div className="footer-widget menu-widget">
              <h5 className="footer-title">Resources</h5>
              <ul>
                <Resources />
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="row">
              <div className="col-sm-12">
                <div className="footer-widget contact-info-widget">
                  <h5 className="footer-title">Get In Touch</h5>
                  <ul>
                    <li>
                      <img
                        src="/assets/images/video/pin.png"
                        alt="play button "
                        className="pin"
                      />
                      <Link to="/contact-us/melbourne">
                        Level 5 & 9, 341-345 Queen Street, Melbourne VIC 3000
                      </Link>
                    </li>
                    <li>
                      <img
                        src="/assets/images/video/email.png"
                        alt="play button "
                        className="email"
                      />{" "}
                      <a href="mailto:melbourne@signet.edu.au">
                        melbourne@signet.edu.au
                      </a>
                    </li>
                    <li>
                      {" "}
                      <img
                        src="/assets/images/video/telephone.png"
                        alt="play button "
                        className="telephone"
                      />{" "}
                      <a
                        href="tel:
130+610223312"
                      >
                        +61 1300 223 312
                      </a>
                    </li>
                    <li>
                      <img
                        src="/assets/images/video/wall-clock.png"
                        alt="play button "
                        className="wall-clock"
                      />{" "}
                      Monday - Friday,
                      <br /> 9.00 AM- 5.00 PM
                    </li>
                  </ul>
                </div>
              </div>
              {/* <a href="https://wa.me/61402945563" title="Get In Touch With us " target="_blank" className="whatsapp"> <img src="/assets/images/whatsapp.png" className="whatsapp-image pulse" alt="" /></a> */}
              <div className="col-sm-6 d-none">
                <div className="footer-widget video-widget">
                  <p>Quis autem vel eum iure repre enderit voluptate</p>
                  <div className="video-widget overlay my-20">
                    <img src="assets/images/footer/video.jpg" alt="Video" />
                    <a
                      to="https://www.youtube.com/watch?v=9Y7ma241N8k"
                      className="mfp-iframe video-play"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                  <Link to="/about-us">
                    <a className="read-more">
                      view more <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area  text-black rel">
        <div className="container">
          <div className="copyright-inner">
            <CopyRight />
            <ul className="footer-menu">
              <FooterBottom />
            </ul>
          </div>
        </div>
        {/* Scroll Top Button */}
        <button
          className="scroll-top scroll-to-target"
          data-target="html"
          style={{ display: "inline-block" }}
          onClick={() => scrollTop()}
        >
          <span className="fas fa-angle-double-up">Back To Top</span>
        </button>
      </div>
    </footer>
  ),
  Footer1 = ({ scrollTop }) => (
    <footer className="main-footer bg-blue text-white pt-75">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-3 col-sm-4">
            <div className="footer-widget about-widget">
              <h5 className="footer-title">About Us</h5>
              <p>
                Sit amet consectetur adipiscin seeiusmod tempor incididunt ut
                dolore magna aliqu asusp disse ultrices gravida commodo
              </p>
              <h5 className="pt-5">Follow Us</h5>
              <div className="social-style-one">
                <FollowIcon />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <div className="footer-widget menu-widget">
              <h5 className="footer-title">Courses</h5>
              <ul>
                <Courses />
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <div className="footer-widget menu-widget">
              <h5 className="footer-title">Resources</h5>
              <ul>
                <Resources />
              </ul>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="row">
              <div className="col-sm-6">
                <div className="footer-widget contact-info-widget">
                  <h5 className="footer-title">Get In Touch</h5>
                  <ul>
                    <li>
                      <i className="fas fa-map-marker-alt" /> 55 Main Street,
                      2nd Block, New York
                    </li>
                    <li>
                      <i className="far fa-envelope" />{" "}
                      <a to="mailto:support@gmail.com">support@gmail.com</a>
                    </li>
                    <li>
                      <i className="fas fa-phone" />{" "}
                      <a to="callto:+0123456789">+012 (345) 67 89</a>
                    </li>
                    <li>
                      <i className="far fa-clock" /> Sunday - Friday,
                      <br /> 08 am - 05 pm
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="footer-widget video-widget">
                  <p>Quis autem vel eum iure repre enderit voluptate</p>
                  <div className="video-widget overlay my-20">
                    <img src="assets/images/footer/video.jpg" alt="Video" />
                    <a
                      to="https://www.youtube.com/watch?v=9Y7ma241N8k"
                      className="mfp-iframe video-play"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                  <Link to="/about-us">
                    <a className="read-more">
                      view more <i className="fas fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area bg-black rel">
        <div className="container">
          <div className="copyright-inner">
            <CopyRight />
            <ul className="footer-menu">
              <FooterBottom />
            </ul>
          </div>
        </div>
        {/* Scroll Top Button */}
        <button
          className="scroll-top scroll-to-target"
          data-target="html"
          style={{ display: "inline-block" }}
          onClick={() => scrollTop()}
        >
          <span className="fas fa-angle-double-up">Back To Top</span>
        </button>
      </div>
    </footer>
  ),
  Footer3 = ({ scrollTop }) => (
    <footer className="main-footer bg-black">
      <div className="container">
        <div className="row justify-content-between text-white pt-65">
          <div className="col-lg-3 col-sm-4">
            <div className="footer-widget about-widget">
              <h5 className="footer-title">About Us</h5>
              <p>
                Sit amet consectetur adipiscin seeiusmod tempor incididunt ut
                dolore magna aliqu asusp disse ultrices gravida commodo
              </p>
              <h5 className="pt-5">Follow Us</h5>
              <div className="social-style-one">
                <FollowIcon />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <div className="footer-widget menu-widget">
              <h5 className="footer-title">Courses</h5>
              <ul>
                <Courses />
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <div className="footer-widget menu-widget">
              <h5 className="footer-title">Resources</h5>
              <ul>
                <Resources />
              </ul>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="row">
              <div className="col-sm-6">
                <div className="footer-widget contact-info-widget">
                  <h5 className="footer-title">Get In Touch</h5>
                  <ul>
                    <li>
                      <i className="fas fa-map-marker-alt" /> 55 Main Street,
                      2nd Block, New York
                    </li>
                    <li>
                      <i className="far fa-envelope" />{" "}
                      <a to="mailto:support@gmail.com">support@gmail.com</a>
                    </li>
                    <li>
                      <i className="fas fa-phone" />{" "}
                      <a to="callto:+0123456789">+012 (345) 67 89</a>
                    </li>
                    <li>
                      <i className="far fa-clock" /> Sunday - Friday,
                      <br /> 08 am - 05 pm
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="footer-widget newsletter-widget">
                  <h5 className="footer-title">Newsletter</h5>
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <h6>Every Single Updates and Notifications</h6>
                    <div className="email-input">
                      <label htmlFor="footer-newsletter">
                        <i className="far fa-envelope" />
                      </label>
                      <input
                        type="email"
                        id="footer-newsletter"
                        placeholder="Enter Email"
                        required=""
                      />
                    </div>
                    <button className="theme-btn style-two" type="submit">
                      sign up <i className="fas fa-arrow-right" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area bg-light-blue text-white rel">
        <div className="container">
          <div className="copyright-inner">
            <CopyRight />
            <ul className="footer-menu">
              <FooterBottom />
            </ul>
          </div>
        </div>
        {/* Scroll Top Button */}
        <button
          style={{ display: "inline-block" }}
          onClick={() => scrollTop()}
          className="scroll-top scroll-to-target"
          data-target="html"
        >
          <span className="fas fa-angle-double-up">Back To Top</span>
        </button>
      </div>
    </footer>
  ),
  Footer4 = ({ scrollTop }) => (
    <footer className="main-footer footer-two bg-blue-two text-white">
      <div className="container">
        <div className="logo-inner style-two pt-85 pb-35">
          <div className="logo-item">
            <Link to="/about-us">
              <img
                src="assets/images/client-logos/client-logo-two1.png"
                alt="Client Logo"
              />
            </Link>
          </div>
          <div className="logo-item">
            <Link to="/about-us">
              <img
                src="assets/images/client-logos/client-logo-two5.png"
                alt="Client Logo"
              />
            </Link>
          </div>
          <div className="logo-item">
            <Link to="/about-us">
              <img
                src="assets/images/client-logos/client-logo-two3.png"
                alt="Client Logo"
              />
            </Link>
          </div>
          <div className="logo-item">
            <Link to="/about-us">
              <img
                src="assets/images/client-logos/client-logo-two4.png"
                alt="Client Logo"
              />
            </Link>
          </div>
          <div className="logo-item">
            <Link to="/about-us">
              <img
                src="assets/images/client-logos/client-logo-two2.png"
                alt="Client Logo"
              />
            </Link>
          </div>
          <div className="logo-item">
            <Link to="/about-us">
              <img
                src="assets/images/client-logos/client-logo-two6.png"
                alt="Client Logo"
              />
            </Link>
          </div>
        </div>
        <div className="row large-gap justify-content-between pt-85">
          <div className="col-lg-3 col-sm-4">
            <div className="footer-widget about-widget">
              <div className="footer-logo mb-25">
                <Link to="/">
                  <a>
                    <img src="assets/images/logos/logo-four.png" alt="Logo" />
                  </a>
                </Link>
              </div>
              <p>
                Sit amet consectetur adipiscin seeiusmod tempor incididunt ut
                dolore magna aliqu asusp{" "}
              </p>
              <div className="social-style-one pt-10">
                <FollowIcon />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <div className="footer-widget menu-widget">
              <h5 className="footer-title">Courses</h5>
              <ul>
                <Courses />
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-4">
            <div className="footer-widget contact-info-widget">
              <h5 className="footer-title">Get In Touch</h5>
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt" /> 55 Main Street, 2nd
                  Block, New York
                </li>
                <li>
                  <i className="far fa-envelope" />{" "}
                  <a to="mailto:support@gmail.com">support@gmail.com</a>
                </li>
                <li>
                  <i className="fas fa-phone" />{" "}
                  <a to="callto:+0123456789">+012 (345) 67 89</a>
                </li>
                <li>
                  <i className="far fa-clock" /> Sunday - Friday,
                  <br /> 08 am - 05 pm
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="footer-widget gallery-widget">
              <h5 className="footer-title">Gallery</h5>
              <div className="gallery-widget-wrap">
                <div className="gallery-widget-item">
                  <img src="assets/images/widgets/gallery1.jpg" alt="Gallery" />
                  <a to="assets/images/widgets/gallery1.jpg">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="gallery-widget-item">
                  <img src="assets/images/widgets/gallery2.jpg" alt="Gallery" />
                  <a to="assets/images/widgets/gallery2.jpg">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="gallery-widget-item">
                  <img src="assets/images/widgets/gallery3.jpg" alt="Gallery" />
                  <a to="assets/images/widgets/gallery3.jpg">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="gallery-widget-item">
                  <img src="assets/images/widgets/gallery4.jpg" alt="Gallery" />
                  <a to="assets/images/widgets/gallery4.jpg">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="gallery-widget-item">
                  <img src="assets/images/widgets/gallery5.jpg" alt="Gallery" />
                  <a to="assets/images/widgets/gallery5.jpg">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="gallery-widget-item">
                  <img src="assets/images/widgets/gallery6.jpg" alt="Gallery" />
                  <a to="assets/images/widgets/gallery6.jpg">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area rel">
        <div className="container">
          <div className="copyright-inner">
            <CopyRight />
            <ul className="footer-menu">
              <FooterBottom />
            </ul>
          </div>
        </div>
        {/* Scroll Top Button */}
        <button
          style={{ display: "inline-block" }}
          onClick={() => scrollTop()}
          className="scroll-top scroll-to-target"
          data-target="html"
        >
          <span className="fas fa-angle-double-up">Back To Top</span>
        </button>
      </div>
    </footer>
  );
