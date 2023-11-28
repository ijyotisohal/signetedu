import { Link } from "react-router-dom";
import Counter from "./Counter";
import { useDispatch, useSelector } from 'react-redux';
import { fetchTranslations } from '../actions/languageActions';
import LanguageSelector from './LanguageSelector';
import { useEffect } from "react";
import Loading from '../components/loading/Loading'
import FormModal from "../elements/FormModal";
import FormEoi from "../elements/FormEoi";
const About = ({ dark }) => {
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

  const { homepage,aboutus,courses } = translations;
  return (
    <div className="dizme_tm_section pt--60" id="about">
        <div>

      {/* {
        courses.courseList.map((data)=>(
            <>
            <h1>{homepage.aboutus.title}</h1>
      <p>{homepage.aboutus.description}</p>
            </>
        ))
      } */}
      <LanguageSelector/>
    </div>
      <div className="dizme_tm_about">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div className="image">
                <img src={`img/about/${dark ? 2 : 1}.jpg`} alt="image" />
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={15} />
                    </h3>
                    <span className="name">
                      Years of
                      <br />
                      Success
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={3} />K +
                    </h3>
                    <span className="name">
                      Total
                      <br />
                      Students
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                {/* <span>  <p>{homepage.about.title}</p></span> */}
                <h3>{homepage.about.titleOne} <strong className="count-text">{homepage.about.titleOneSub}</strong> </h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p>
                {homepage.about.description}
                </p>
              </div>
              <div
                className="dizme_tm_button wow fadeInUp"
                data-wow-duration="1s"
              >
                <p className="theme-btn">
                  {/* <span>{homepage.about.button}</span> */}
                  <span><FormModal/></span>
                  
                </p>
                
              </div>
            </div>
          </div>
        </div>
        {/* <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/about/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/about/2.png" alt="image" />
        </div> */}
      </div>
      {/* <FormEoi/> */}
    </div>
  );
};
export default About;
