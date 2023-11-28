import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchTranslations } from "../actions/languageActions";
import NewHeader from "../components/Header/NewHeader";
import Loading from "../components/loading/Loading";
import { Helmet } from "react-helmet-async";
const SelectForm = () => {
  useEffect(() => {
    // Scroll to 1000px vertically
    window.scrollTo(0, 650);
  }, []);
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

  const { forms } = translations;
  return (
    <>
      <Helmet>
<title>Forms - Signet Institute | Certificate & Diploma Courses in Australia</title>
<meta name='description' content='Discover a wide range of forms & applications at Signet Institute. Submit (Online Forms) requests, applications inquiries efficiently.'data-rh="true" />
</Helmet>
      <NewHeader />
      <div className="sub-course-banner sub-course-bannerr pt--60">
        <div className="container">
          <div className="sub-banner-text pt-80">
            <div className="row align-items-center">
              <div className="col-md-6 banner-sub-text-one">
                <h3 className="banner-sub-ttile">{forms.banner.title}</h3>
                <p className="banner-sub-descr">
                 {forms.banner.description}
                </p>
                <p className="sub-banner-cap">
                {forms.banner.descriptionTwo}
                </p>
              </div>
              <div className="col-md-5 banner-sub-text-two pt--100">
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
                  <img src="/img/about/boy.png" alt="banner" />
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
                    className="sp-twoo"
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
      <div className="as-li as-lli pt--150">
        <div className="container">
          
          <div className="row">
            <div className="selectForm-parent">
              <div className="selectForm-child">
              <h3>{forms.banner.theForm}</h3>
                <div className="row justify-content-around">
                  <div className="col-md-5 forms-card">
                    <Link to={"/refund-request-form"}>{forms.banner.refundrequestForm}</Link>
                  </div>
                  <div className="col-md-5 forms-card">
                    <Link to={"/complaint-form"}>{forms.banner.complaintForm}</Link>
                  </div>
                  <div className="col-md-5 forms-card">
                    <Link to={"/student-request-form"}>
                      {forms.banner.studentRequestForm}
                    </Link>
                  </div>
                  <div className="col-md-5 forms-card">
                    <Link to={"/change-of-student-details-form"}>
                      {forms.banner.changeOfStudentDetailsForm}
                    </Link>
                  </div>
                  <div className="col-md-5 forms-card">
                    <Link to={"/application-for-credit-transfer"}>
                      {forms.banner.appliactionforcredittransfer}
                    </Link>
                  </div>
                  <div className="col-md-5 forms-card">
                    <Link to={"/application-to-cancel-enrollment"}>
                      {forms.banner.applicationtocancelenrollment}
                    </Link>
                  </div>
                  <div className="col-md-5 forms-card">
                    <Link to={"/gte-form"}>
                      {forms.banner.gteform}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SelectForm;
