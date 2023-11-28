import React, { useEffect } from 'react'
import NewHeader from '../components/Header/NewHeader'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTranslations } from '../actions/languageActions'
import Loading from "../components/loading/Loading";
import { Helmet } from 'react-helmet-async'
const AgentApplicationForm = () => {
  

  useEffect(() => {
    // Scroll to 1000px vertically
    window.scrollTo(0, 650);
  }, []);

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
  
  const { agentappliaction } = translations;
  return (
    <div>
      <Helmet>
<title>Agent Application Form - Signet Institute of Australia</title>
<meta name='description' content='Embark on a rewarding journey as an agent by completing our Agent Application Form. Submit your details, and experience seamlessly. And becoming a valued agent partner.'data-rh="true" />
</Helmet>
      <NewHeader/>
      <div className="sub-course-banner pt--150">
       <div className="container">
       <div className="sub-banner-text pt-80">
          <div className="row">
         
            <div className="col-md-6 banner-sub-text-one">
      
              <h3 className="banner-sub-ttile">
            {agentappliaction.banner.title}
              </h3>
              <p className="banner-sub-descr">
              {agentappliaction.banner.descriptionOne}              </p>
              <p className="sub-banner-cap">{agentappliaction.banner.descriptionTwo}</p>
            </div>
            <div className="col-md-5 banner-sub-text-two ">
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
                <div className="sub-c-banner sub-c-bannerra">
                <img
                    src="/img/about/boy2.png"
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
                <img className='sp-twoo'
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
       <div className="agent-form-sub pt--100">
     <div className="agent-sec">
        <div className="agent-form container">
        {/* <a href="https://www.zoho.com/forms/?serviceurl=%2Fsignetinstituteofaustralia%2Fform%2FEDUCATIONAGENTAPPLICATIONFORM" download>Signet.I-Education-Agent-Application-Form</a> */}
        <a href="https://forms.zohopublic.com.au/signetinstituteofaustralia/form/EDUCATIONAGENTAPPLICATIONFORM/formperma/Bg3Sl-1IU_pcBmqbdSh2TLS3jKG9J86eEgMq4BeNEKw" download>Signet.I-Education-Agent-Application-Form</a>
        </div>
      </div>
     </div>
       <Footer/>
    </div>
  )
}

export default AgentApplicationForm