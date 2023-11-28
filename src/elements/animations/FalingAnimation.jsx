import React, { useEffect } from "react";
import ProgressHome from "../progress/ProgressHome";
import Counter from "../../components/Counter";
import { Fade } from "react-awesome-reveal";
import { useDispatch, useSelector } from "react-redux";
import { fetchTranslations } from "../../actions/languageActions";
import Loading from "../../components/loading/Loading";

const FalingAnimation = () => {
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
  const Data = homepage.numbersCount.list;
console.log("numbers", Data)
  return (
    <div>
  

      <section class="pt-overview-n dizme_tm_section">
     
        <div class="container">
          <div className="sec-parent">
            <h2 class=' ' >{homepage.numbersCount.title} <span className="count-text">{homepage.numbersCount.titleSubOne}</span> 
            {homepage.numbersCount.titleSubTwo} {homepage.numbersCount.titleSubFou}
             {/* <span className="count-text">{homepage.numbersCount.titleSubThree}</span>  */}
             </h2>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              suscipit eius, esse ipsam corporis enim provident voluptatum
              nesciunt vero. Necessitatibus, beatae. Animi dolorum in cupiditate
              praesentium necessitatibus tempora odit molestias sequi harum
              itaque, dicta quod.
            </p> */}
          </div>
          {/* <ScrollAnimation animateIn='fadeIn'
        delay={500}
  
 > */}
 {/* <Fade cascade damping={0.1} duration={2}>
          <div class="pt-overview-scene d-none">
            <div class="pt-fallbox -lg">
            <div
                class="soe_btn1 an-1 pt-fallbox-item -v1"
                style={{ transform: "translate(601.3px, 1260.5px)" }}
              >
                <span
                  style={{
                    transform: "translate(50%, -50%) rotate(5.2264rad)",
                  }}
                >
                  #Sample Animation
                </span>
              </div>
               <div
                class="soe_btn1 an-2 pt-fallbox-item -v1"
                style={{ transform: "translate(198.9px, 1245.3px)" }}
              >
                <span
                  style={{
                    transform: "translate(-50%, -50%) rotate(5.2264rad)",
                  }}
                >
                  #leads
                </span>
              </div>
             <div
                class=" pt-fallbox-item an-3 soe_btn1 -v2"
                style={{ transform: "translate(901.3px, 1260.5px)" }}
              >
                <span
                  style={{
                    transform: "translate(-50%, -50%) rotate(0.6681rad)",
                  }}
                >
                  #seo
                </span>
              </div>
               
              <div
                class="pt-fallbox-item an-4 soe_btn1 -v3 -vsm"
                style={{ transform: "translate(584.7px, 1243.2px)" }}
              >
                <span
                  style={{
                    transform: "translate(-50%, -50%) rotate(5.0545rad)",
                  }}
                >
                  #Sales
                </span>
              </div>
              <div
                class="pt-fallbox-item an-5 -v4 -vsm"
                style={{ transform: "translate(905.4px, 1230.5px)" }}
              >
                <span
                  style={{
                    transform: "translate(-50%, -50%) rotate(5.532rad)",
                  }}
                >
                  #Marketing
                </span>
              </div>

              <div
                class="pt-fallbox-item an-6 -v6"
                style={{ transform: "translate(371.7px, 1260.5px)" }}
              >
                <span
                  style={{
                    transform: "translate(-50%, -50%) rotate(6.2399rad)",
                  }}
                >
                  #Awesome!
                </span>
              </div>
              <div
                class="pt-fallbox-item an-7 -v7"
                style={{ transform: "translate(472.6px, 1225px)" }}
              >
                <span
                  style={{
                    transform: "translate(-50%, -50%) rotate(0.7856rad)",
                  }}
                >
                  #Conversion
                </span>
              </div>
              <div
                class="pt-fallbox-item -v8 an-8"
                style={{ transform: "translate(272.9px, 1230.9px)" }}
              >
                <span
                  style={{
                    transform: "translate(-50%, -50%) rotate(5.2463rad)",
                  }}
                >
                  #Designing
                </span>
              </div>
              <div
                class="pt-fallbox-item -v9 an-9"
                style={{ transform: "translate(98.9px, 1271.9px)" }}
              >
                <span
                  style={{
                    transform: "translate(-70%, -68%) rotate(-220rad)",
                  }}
                >
                  #Development
                </span>
              </div>
              <div
                class="pt-fallbox-item -v10 an-10"
                style={{ transform: "translate(800.5px, 1265.8px)" }}
              >
                <span
                  style={{
                    transform: "translate(-50%, -50%) rotate(6.2661rad)",
                  }}
                >
                  #Strategy
                </span>
              </div>
              <div
                class="pt-fallbox-item -v12 -vsm an-11"
                style={{ transform: "translate(-106.4px, 1255.5px)" }}
              >
                <span
                  style={{
                    transform: "translate(-250px, -50%) rotate(0.01rad);",
                  }}
                >
                  #Signet
                </span>
              </div>
              <div
                class="pt-fallbox-item -v11 an-12"
                style={{
                  transform: "translate(25.6px, 1220.9px) rotate(5.98deg)",
                }}
              >
                <span
                  style={{
                    transform: "translate(-185px, -50%) rotate(5.98deg)",
                  }}
                >
                  #Searches
                </span>
              </div> 
            </div>
          </div>
          </Fade> */}
{/* // </ScrollAnimation> */}
          <div className="container">
            <div class="pt-overview-content">
              {
                Data.map((nData)=>(
                  <div class="pt-overview-top cunt-sec">
                <div className="count-sec-one">
                  
                  <span className="plus-symbol"><Counter end= {nData.countTwo} />
                  +
                  </span>
                  <span className="stu count"> {nData.stName} </span>
                </div>
                {/* <div className="count-sec-two">
                  <h3>{nData.coursename}</h3>
                  <h4>{nData.title}  </h4>
                  <h5>{nData.insName}</h5>
                </div> */}
              </div>
                ))
              }
             
              <div class="pt-overview-top cunt-sec-two">
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProgressHome />
    </div>
  );
};

export default FalingAnimation;
