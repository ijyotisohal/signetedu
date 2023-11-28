/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect } from 'react';
import PageBanner from '../components/about/PageBanner'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTranslations } from '../actions/languageActions';
import NewHeader from '../components/Header/NewHeader';
import Loading from "../components/loading/Loading";
import { useParams } from 'react-router-dom';
const ContactUsMelbourne = () => {
  


  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.language.selectedLanguage);
  const translations = useSelector((state) => state.language.translations[selectedLanguage]);
  
  useEffect(() => {
    dispatch(fetchTranslations(selectedLanguage));
  }, [dispatch, selectedLanguage]);
  useEffect(() => {
    // Scroll to 1000px vertically
    window.scrollTo(0, 900);
  }, []);
  if (!translations) {
    return <div>
      <Loading/>
    </div>; // Show loading state while translations are being fetched
  }
  
  const { contact } = translations;
  return (
    <>
    <NewHeader/>
    <div className="sub-course-banner pt--150">
       <div className="container">
       <div className="sub-banner-text pt-80">
          <div className="row align-items-center">
         
            <div className="col-md-6 banner-sub-text-one">
      
             
            <h4 className="banner-sub-ttile">
            {contact.banner.title}
              </h4>
              <h2>{contact.banner.titleTwo}</h2>
              <p className="banner-sub-descr">
              {contact.banner.descriptionOne}
                       </p>
              <p className="sub-banner-cap"> {contact.banner.descriptionTwo}</p>
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
      <section className="contact-info-area rel z-1 py-130 rpt-90 rpb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 text-center">
        
              <div className="contact-info-wrap rmb-75 wow fadeInUp delay-0-2s">
                <div className="section-title mb-25">
                  {/* <span className="sub-title-two">Need Any Helps ?</span> */}
                  {/* <h2>Contact For Information</h2> */}
                  <h5 className="our-branchs">{contact.ourBranches.title}</h5>
            <h3 className='based-in' >{contact.ourBranches.titleTwo}</h3>
                </div>
                <p>
                {contact.ourBranches.description}                </p>
                <div className="row no-gap mt-50">
                  <div className="col-md-12 col-sm-6 mb-40">
                 <div className="row" id="melbourne">
                 <div className="col-md-6">
                  <div className="contact-info-box">
                      {/* <i className="fas fa-map-marker-alt" /> */}
                      <h4>{contact.melbourne.title}</h4>
                      <span>{contact.melbourne.address}</span>
                      <p>
                      <a href='tel:1300223312'>
                      1300 22 33 12
                      </a>
                      </p>
                      <p>
                        <a href="tel:03 8638 9956">{contact.melbourne.phone}</a>
                      </p>
                      <p>
                        <a href="mailto:info@signet.edu.au">{contact.melbourne.email}</a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                  <div className="contact-info-box">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d581.8947512503314!2d144.95736727100058!3d-37.81026510155278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65daf441a8ed5%3A0xa7301f49fc8ca76f!2sSignet%20Institute%20of%20Australia%20(Melbourne)!5e0!3m2!1sen!2sin!4v1687779547669!5m2!1sen!2sin" width="600" height="312" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                 </div>
                  </div>
                  <div className="col-md-12 col-sm-6 mb-40">
                 <div className="row">
                 <div className="col-md-6">
                  <div className="contact-info-box">
                      {/* <i className="fas fa-map-marker-alt" /> */}
                      <h4>{contact.sydney.title}</h4>
                      <span>{contact.sydney.address}</span>
                      <p>
                      <a href='tel:1300223312'>
                      1300 22 33 12
                      </a>
                      </p>
                      <p>
                        <a href="tel:02 7804 6980">{contact.sydney.phone}</a>
                      </p>
                      <p>
                        <a href="mailto:info@signet.edu.au">{contact.sydney.email}</a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                  <div className="contact-info-box">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6624.359097766504!2d151.1734633935791!3d-33.8850294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12afbafe0a558b%3A0xf2204aae84cc8b5!2sSignet%20Institute%20of%20Australia%20(Sydney)!5e0!3m2!1sen!2sin!4v1687780159192!5m2!1sen!2sin" width="600" height="312" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                 </div>
                  </div>
                  <div className="col-md-12 col-sm-6 mb-40">
                 <div className="row">
                 <div className="col-md-6">
                  <div className="contact-info-box">
                      {/* <i className="fas fa-map-marker-alt" /> */}
                      <h4>{contact.adelaide.title}</h4>
                      <span>{contact.adelaide.address}</span>
                      <p>
                      <a href='tel:1300223312'>
                      1300 22 33 12
                      </a>
                      </p>
                      <p>
                        <a href="tel:08 8220 1008">{contact.adelaide.phone}</a>
                      </p>  
                      <p>
                        <a href="mailto:info@signet.edu.au">{contact.adelaide.email}</a>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                  <div className="contact-info-box">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.2765948046526!2d138.59881167564222!3d-34.92459947284099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0cf597e5fd167%3A0xb9dcbfe4bb6737bc!2sSignet%20Institute%20of%20Australia%20(Adelaide)!5e0!3m2!1sen!2sin!4v1687780066061!5m2!1sen!2sin" width="600" height="312" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                    </div>
                  </div>
                 </div>
                  </div>  
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4">
              <div className="contact-page-image wow fadeInUp delay-0-4s">
                <img
                  src="assets/images/contact/contact-page.png"
                  alt="Contact Page"
                />
              </div>
            </div> */}
          </div>
        </div>
        <span className="bg-text">Signet</span>
      </section>
      {/* Contact Info End */}
      {/* Contact Form Start */}
      <section className="contact-form-area wow fadeInUp delay-0-2s">
        <div className="container">
          <form
            onSubmit={(e) => e.preventDefault()}
            id="contact-form"
            className="contact-form p-50 z-1 rel"
            name="contact-form"
            action="#"
            method="post"
          >
            <div className="section-title text-center mb-50">
              <span className="sub-title-two">{contact.sendMessage.title}</span>
              <h2>{contact.sendMessage.titleTwo}</h2>
            </div>
            <div className="row mt-25">
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    className="form-control"
                    defaultValue=""
                    placeholder="Full Name"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="email"
                    id="email-address"
                    name="email"
                    className="form-control"
                    defaultValue=""
                    placeholder="Email Address"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="form-control"
                    defaultValue=""
                    placeholder="Phone Number"
                    required=""
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows={4}
                    placeholder="Write Message"
                    required=""
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group text-center mb-0">
                  <button type="submit" className="theme-btn">
                    send Message <i className="fas fa-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* Contact Form End */}
      {/* Location Map Area Start */}
      <div className="contact-page-map">
        <div className="our-location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d136834.1519573059!2d-74.0154445224086!3d40.7260256534837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1639991650837!5m2!1sen!2sbd"
            height={975}
            style={{ border: 0, width: "100%" }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default ContactUsMelbourne;
