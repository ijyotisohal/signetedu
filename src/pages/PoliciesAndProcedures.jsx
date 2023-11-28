import React, { useEffect } from 'react'
// import policyData from '../data/policies/policies.json';
// import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import NewHeader from '../components/Header/NewHeader';
import { fetchTranslations } from '../actions/languageActions';
import { useDispatch, useSelector } from 'react-redux';
import Loading from "../components/loading/Loading";
import { Helmet } from 'react-helmet-async';

// const data = policyData
const PoliciesAndProcedures = () => {
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
    return <div>
      <Loading/>
    </div>; // Show loading state while translations are being fetched
  }
  
  const { policiesandprocedures } = translations;
  const data = policiesandprocedures.banner.policieslist;
  console.log(data)
  return (
   <>
     <Helmet>
<title>Policies and Procedures - Signet Institute | Top Certificate Courses</title>
<meta name='description' content='Explore our comprehensive collection of standard policies and procedures at Signet Institute of Australia.'data-rh="true" />
</Helmet>
     <NewHeader/>
    <div className='policy-pol' >
    <div className="sub-course-banner pt--60">
       <div className="container">
       <div className="sub-banner-text pt-80">
          <div className="row align-items-center">
         
            <div className="col-md-6 banner-sub-text-one">
      
              <h4 className="banner-sub-ttile">
              {/* Privacy And Policies */}
              {policiesandprocedures.banner.title}
              </h4>
              <h2>{policiesandprocedures.banner.titleTwo}</h2>
              <p className="banner-sub-descr">
              {policiesandprocedures.banner.description}
               </p>
              <p className="sub-banner-cap">{policiesandprocedures.banner.descriptionTwo}</p>
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
                <div className="sub-c-banner">
                <img
                    src="/img/about/boy.png"
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
 
        <div className="container pt-120">
        <h4><span className="count-text">{policiesandprocedures.banner.titleThree}</span></h4>
            <h2 className="policy-title">{policiesandprocedures.banner.descriptionThree}</h2>
<div className="row">
    {
        data.map((pData)=>(
            <div className="col-md-6">
                <a href={pData.image} download >
                <div className="card policy-card">
                    <div className="">
                        <h5 className="card-title">{pData.title}</h5>
                    </div>
                </div>
                </a>
            </div>
        ))
    }
</div>
        </div>
    </div>
        <Footer/>
   </>
  )
}

export default PoliciesAndProcedures