
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { fetchTranslations } from '../../actions/languageActions';
import Loading from '../loading/Loading'
const Newsletters = () => {
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
  return (
    <div className="footer-newsletter br-10 bg-lighter">
      <div className="row">
        <div className="col-lg-6">
          <div
            className="newsletter-video bgs-cover overlay wow fadeInLeft delay-0-2s"
            style={{
              backgroundImage: "url(/assets/images/video/footer-video-bg.jpg)",
            }}
          >
            <a
              href="https://www.youtube.com/watch?v=6RMcWdQNf9c"
              target="_blank"
              className="mfp-iframe video-play"
            >
              <img src="/assets/images/video/play-button.png" alt='play button ' className='pl-btn'/>
            </a>
          </div>
        </div>
        <div className="col-lg-6 align-self-center">
          <div className="newsletter-content wow fadeInRight delay-0-2s">
            <div className="section-title ">
              <span className="sub-title-two">{homepage.newsletter.title}</span>
              <h2>{homepage.newsletter.titleTwo}</h2>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="newsletter-form mt-25"
              action="#"
            >
              <div className="newsletter-radios ">
                <div className="custom-control custom-radio">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="hero-wekly"
                    name="example1"
                    defaultChecked
                  />
                  <label className="custom-control-label" htmlFor="hero-wekly">
                 {homepage.newsletter.regular}
                  </label>
                </div>
                {/* <div className="custom-control custom-radio">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="hero-monthly"
                    name="example1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="hero-monthly"
                  >
                    {homepage.newsletter.weekly}
                  </label>
                </div> */}
              </div>
              <div className="newsletter-email">
                <label htmlFor="email">
                  <i className="far fa-envelope" />
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                  required=""
                />
                <button type="submit" className="theme-btn style-two">
                  {homepage.newsletter.signup} <i className="fas fa-arrow-right" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Newsletters;
