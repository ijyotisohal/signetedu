import parse from "html-react-parser";
import i18next from "i18next";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// import { fatchData } from "../utilitss";
// const myData = data;

const Home = ({ dark }) => {

  const [data, setData] = useState({});
  const {t} = useTranslation();
  const handleClick=(e)=>{
      i18next.changeLanguage(e.target.value)
  }
// Fetch Function
fetch('/static/info.json').then(
  function (res) {
    return res.json();
  },
).then(function (data) {
  // store Data in State Data Variable
  setData(data);
}).catch(
  function (err) {
    console.log(err, ' error');
  },
);
const [languageData, setLanguageData] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  useEffect(() => {
    const fetchLanguageData = async () => {
      const response = await fetch(`/locales/${selectedLanguage}/translation.json`);
      console.log(response)
      const data = await response.json();
      setLanguageData(data);
    
    };

    fetchLanguageData();
  }, [selectedLanguage]);
// const setDataa = t(setLanguageData);
// console.log(setDa)
  if (!languageData) {
    return <div><Loading/></div>;
  }

  // console.log(languageData.LinkstoFollow.forms)

  return (
 
    <div className="dizme_tm_section" id="home">
    
      <div className="dizme_tm_hero d-none">
        <div
          className="background-home"
          // data-img-url={`img/slider/home-1.jpg`}
          // style={{ backgroundImage: `img/slider/home-1.jpg` }}
        />
       
        {/* <div >{t('Banner.titleOne')}</div> */}
     

        <div className="container">
          <div className="content">
            <div className="details">
              <div className="hello">
                <h3 className="orangeText">{t('Banner.titleOne')}</h3>
              </div>
              <div className="name">
                <h3>{t('Banner.titleTwo')}</h3>
              </div>
            {<p>{t('Banner.titleOne')} {t('Banner.titleTwo')}</p>}
              <div className="job">
                <p>
                  A <span className="greenText">{data && data.mainSkill}</span>{" "}
                  From <span className="purpleText">{data.address}</span>
                  {/* {  languageData.forms.map((key) => (
        <div key={key}>{t(`translation.${key}`)}</div>
      ))} */}
{/* <p>{t(languageData.dashboard)}</p>.




        {languageData.LinkstoFollow.forms.map((item, index) => (
        <div key={index}>{t(item.title)}</div>
      ))}
        {languageData.LinkstoFollow.forms.map((item, index) => (
        <div key={index}>{t(item.title)}</div>
      ))} */}
                </p>
              </div>
              <div className="text">
                <p>{t('Banner.description')}</p>
              </div>
              <div className="button">
                <div className="dizme_tm_button">
                  <Link className="anchor" to='/contact-us'>
                    <span>Get Started Today</span>
                  </Link>
                </div>
                <div className="social">
                  <ul>
                    {data &&
                      data.social &&
                      data.social.map((social, i) => (
                        <li key={i}>
                          <a href="#">
                            <i className={social.icon} />
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="avatar">
              <div className="image">
                <img
                  src={data && data.img ? data.img : "/img/slider/avatar.png"}
                  alt="image"
                />
                {data &&
                  data.skills &&
                  data.skills.map(
                    (skill, i) =>
                      skill.icon && (
                        <span
                          key={i}
                          className={`skills ${skill.name} anim_moveBottom`}
                        >
                          {parse(skill.icon)}
                        </span>
                      )
                  )}
              </div>
            </div>
          </div>
        </div>
        <div className="dizme_tm_down">
          <a className="anchor d-none" href="#process">
            <svg
              width="26px"
              height="100%"
              viewBox="0 0 247 390"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: "1.5",
              }}
            >
              <path
                id="wheel"
                d="M123.359,79.775l0,72.843"
                style={{
                  fill: "none",
                  stroke: dark ? "#fff" : "#000",
                  strokeWidth: 20,
                }}
              />
              <path
                id="mouse"
                d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                style={{
                  fill: "none",
                  stroke: dark ? "#fff" : "#000",
                  strokeWidth: 20,
                }}
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="hero-banner">
      <div class="remote-training-banner-area">
            <div class="container-fluid">
                <div class="row align-items-center pt--80">
                    <div class="col-lg-6 col-md-12">
                        <div class="remote-training-banner-content">
                            <h1 class="title">
                                Find Simple &amp; Effective <b>Training</b> Courses Now                            </h1>
                            <p><b>Signet</b> is a Global training provider based across the Australia that specialises in accredited and bespoke training courses. Flexible easy to access learning opportunities can bring a significant change.</p>

                                                            <form class="search-box" method="get" action="https://themes.envytheme.com/ellen/">
                                    <input type="text" name="s" class="input-search" placeholder="What do you want to learn today?"/>
                                    <input type="hidden" value="course" name="ref"/>
                                    <input type="hidden" name="post_type" value="courses"/>

                                                                            <button type="submit" className="theme-btn">
                                                                                            <i class="flaticon-search"></i>
                                                                                        Search Now                                        </button>
                                                                    </form>
                            
                            <div class="support-box">
                                <div class="d-flex align-items-center">
                                    <div class="images d-flex align-items-center">
                                                                                    <img decoding="async" src="https://themes.envytheme.com/ellen/wp-content/uploads/2022/01/user4.jpg" alt="Find Simple &amp; Effective <b>Training</b> Courses Now"/>
                                                                                    <img decoding="async" src="https://themes.envytheme.com/ellen/wp-content/uploads/2021/11/user2.jpg" alt="Find Simple &amp; Effective <b>Training</b> Courses Now"/>
                                                                                    <img decoding="async" src="https://themes.envytheme.com/ellen/wp-content/uploads/2021/11/user3.jpg" alt="Find Simple &amp; Effective <b>Training</b> Courses Now"/>
                                                                            </div>
                                    <div class="text">
                                        <p>
                                            <span>500K+</span> People already trusted us.                                                                                            <a href="https://themes.envytheme.com/ellen/success-stories/"> View Reviews</a>
                                                                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="remote-training-banner-image">
                                                            <img decoding="async" src="https://themes.envytheme.com/ellen/wp-content/uploads/2022/07/remote-training-main.jpg" alt="Find Simple &amp; Effective <b>Training</b> Courses Now"/>
                            
                            <div class="banner-video-1">
                                <div class="video">
                                                                            <img decoding="async" src="https://themes.envytheme.com/ellen/wp-content/uploads/2022/07/banner-user-image1.gif" alt="Find Simple &amp; Effective <b>Training</b> Courses Now"/>
                                                                    </div>
                            </div>
                            <div class="banner-video-2">
                                <div class="video">
                                                                            <img decoding="async" src="https://themes.envytheme.com/ellen/wp-content/uploads/2022/07/banner-user-image2.gif" alt="Find Simple &amp; Effective <b>Training</b> Courses Now"/>
                                                                    
                                </div>
                                                                    <a href="https://www.youtube.com/watch?v=PWvPbGWVRrU" class="popup-video">
                                        <i class="bx bx-play"></i>
                                    </a>
                                   
                            </div>
                            <div class="banner-wrap-shape">
                                                                    <a href="https://themes.envytheme.com/ellen/success-stories/">
                                   
                                                                            <img decoding="async" src="https://themes.envytheme.com/ellen/wp-content/uploads/2022/07/shape-1.png" alt="Find Simple &amp; Effective <b>Training</b> Courses Now"/>
                                     
                                                                    </a>
                                   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
