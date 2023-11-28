import { useEffect, useState } from "react";
import { activeSkillProgress } from "../utils";
// import { activeSkillProgress, fatchData } from "../utilitss";
import { useDispatch, useSelector } from 'react-redux';
import { fetchTranslations } from '../actions/languageActions';
import Loading from "./loading/Loading";
import FormModal from "../elements/FormModal";
const Skills = ({ dark }) => {
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
  const data = homepage.skills.list;

  return (
    <div className="dizme_tm_section pt--80" id="skills-sec">
      <div className="dizme_tm_skills">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div
                className="dizme_tm_main_title wow fadeInUp"
                data-wow-duration="1s"
                data-align="left"
              >
                <span>
                  {" "}
                  <span className="count-text">
                   {homepage.skills.title}
                  </span>{" "}
                  {homepage.skills.titleSub}

                </span>
                <h3>{homepage.skills.titleTwo}
</h3>
                <p>
                {homepage.skills.description}

                </p>
              </div>
              <div
                className="dodo_progress wow fadeInUp"
                data-wow-duration="1s"
              >
              <div className="row">
              {
                data.map((skillData,i)=>(

              <div key={i} className=" col-md-6">
                  <h5 className="skill-title "><span className="count-text">{skillData.title}</span> </h5>
                  <p className="skill-desc">{skillData.description}</p>
                </div>
                ))
              }
               
              </div>
              </div>
            </div>
            <div className="right">
              <img src={`img/skills/${dark ? 2 : 1}.jpg`} alt="image" />
            </div>
          </div>
          <div className="instructor-sec ">
      <div class="rt-instructor-area ">
            <div class="container">
              <div class="row align-items-center justify-content-center pt-40 pb-40">
                <div class="col-lg-6 col-md-12">
                  <div class="rt-instructor-image">
                  <img src="/assets/images/video/ll.jpg"/>
                  </div>
                </div>

                <div class="col-lg-6 col-md-12">
                  <div class="rt-instructor-content">
                  
               
                    <h3 class="title title-one">
                    {homepage.becomeIntructor.title}
                    <span className="title-one">{homepage.becomeIntructor.goldText}</span>
                    </h3>
                    <p>
                    {homepage.becomeIntructor.description}  
                                      </p>
                    <div class="instructor-btn">
                      <a
                        href="#"
                        class="default-btn"
                      >
                        {" "}
                       <FormModal/>
                        
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="rt-instructor-shape-1">
              <img
                width="1158"
                height="1143"
                src="https://themes.envytheme.com/ellen/wp-content/uploads/2022/07/rt-shape1.png"
                class="attachment-full size-full"
                alt=""
                decoding="async"
                loading="lazy"
                srcset="https://themes.envytheme.com/ellen/wp-content/uploads/2022/07/rt-shape1.png 1158w, https://themes.envytheme.com/ellen/wp-content/uploads/2022/07/rt-shape1-300x296.png 300w, https://themes.envytheme.com/ellen/wp-content/uploads/2022/07/rt-shape1-1024x1011.png 1024w, https://themes.envytheme.com/ellen/wp-content/uploads/2022/07/rt-shape1-768x758.png 768w, https://themes.envytheme.com/ellen/wp-content/uploads/2022/07/rt-shape1-600x592.png 600w, https://themes.envytheme.com/ellen/wp-content/uploads/2022/07/rt-shape1-100x100.png 100w"
                sizes="(max-width: 1158px) 100vw, 1158px"
              />{" "}
            </div>
            <div class="rt-instructor-shape-2">
              <img
                width="210"
                height="210"
                src="https://themes.envytheme.com/ellen/wp-content/uploads/2022/07/rt-shape2.png"
                class="attachment-full size-full"
                alt=""
                decoding="async"
                loading="lazy"
                srcset="https://themes.envytheme.com/ellen/wp-content/uploads/2022/07/rt-shape2.png 210w, https://themes.envytheme.com/ellen/wp-content/uploads/2022/07/rt-shape2-150x150.png 150w, https://themes.envytheme.com/ellen/wp-content/uploads/2022/07/rt-shape2-100x100.png 100w"
                sizes="(max-width: 210px) 100vw, 210px"
              />{" "}
            </div>
          </div>
      </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
