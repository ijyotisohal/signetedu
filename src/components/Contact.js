import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchTranslations } from '../actions/languageActions';
import { Link } from "react-router-dom";
import Loading from '../components/loading/Loading'
// import { fatchData } from "../utilitss";
const Contact = () => {
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
  const data = homepage.contactHome.contact
  return (
    // <div className="dizme_tm_section" id="contact">
    //   <div className="dizme_tm_contact">
    //     <div className="container">
    //       <div className="dizme_tm_main_title" data-align="center">
    //         <span>{homepage.contactHome.title}</span>
    //         <h3>{homepage.contactHome.titleTwo}</h3>
    //         <p>
    //           {homepage.contactHome.titleThree}
    //         </p>
    //       </div>
    //       <div className="contact_inner">
    //         <div className="left wow fadeInLeft" data-wow-duration="1s">
    //           {data && data && (
    //             <ul>
    //               <li>
    //                 <div className="list_inner">
    //                   <div className="icon orangeBackground">
    //                     <i className="icon-location orangeText" />
    //                   </div>
    //                   <div className="short">
    //                     <h3>{data.addressTitle}</h3>
    //                     <span>{data.address}</span>
    //                   </div>
    //                 </div>
    //               </li>
    //               <li>
    //                 <div className="list_inner">
    //                   <div className="icon greenBackground">
    //                     <i className="icon-mail-1 greenText" />
    //                   </div>
    //                   <div className="short">
    //                     <h3>{data.emailTitle}</h3>
    //                     <span>
    //                       <a href="#">{data.email}</a>
    //                     </span>
    //                   </div>
    //                 </div>
    //               </li>
    //               <li>
    //                 <div className="list_inner">
    //                   <div className="icon purpleBackground">
    //                     <i className="icon-phone purpleText" />
    //                   </div>
    //                   <div className="short">
    //                     <h3>{data.phoneTitle}</h3>
    //                     <span>{data.phn}</span>
    //                   </div>
    //                 </div>
    //               </li>
    //             </ul>
    //           )}
    //         </div>
    //         <div className="right wow fadeInRight" data-wow-duration="1s">
    //           <div className="fields">
    //             <form
    //               action="/"
    //               method="post"
    //               className="contact_form"
    //               id="contact_form"
    //               autoComplete="off"
    //             >
    //               <div
    //                 className="returnmessage"
    //                 data-success="Your message has been received, We will contact you soon."
    //               />
    //               <div className="empty_notice">
    //                 <span>Please Fill Required Fields</span>
    //               </div>
    //               <div className="input_list">
    //                 <ul>
    //                   <li>
    //                     <input id="name" type="text" placeholder="Your Name" />
    //                   </li>
    //                   <li>
    //                     <input
    //                       id="email"
    //                       type="text"
    //                       placeholder="Your Email"
    //                     />
    //                   </li>
    //                   <li>
    //                     <input
    //                       id="phone"
    //                       type="number"
    //                       placeholder="Your Phone"
    //                     />
    //                   </li>
    //                   <li>
    //                     <input id="subject" type="text" placeholder="Subject" />
    //                   </li>
    //                 </ul>
    //               </div>
    //               <div className="message_area">
    //                 <textarea
    //                   id="message"
    //                   placeholder="Write your message here"
    //                   defaultValue={""}
    //                 />
    //               </div>
    //               <div className="dizme_tm_button">
    //                 <a id="send_message" href="#">
    //                   <span>Submit Now</span>
    //                 </a>
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //         {/* <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
    //           <img src="img/brushes/contact/2.png" alt="image" />
    //         </div> */}
    //       </div>
    //       <div className="dizme_tm_map wow fadeInUp" data-wow-duration="1s">
    //         <div className="mapouter">
    //           <div className="gmap_canvas">
    //             <iframe
    //               height={375}
    //               style={{ width: "100%" }}
    //               id="gmap_canvas"
    //               src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
    //             />
    //             <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon" />
    //             <br />
    //           </div>
    //         </div>
    //         {/* Get your API here https://www.embedgooglemap.net */}
    //       </div>
    //     </div>
    //     {/* <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
    //       <img src="img/brushes/contact/1.png" alt="image" />
    //     </div> */}
    //   </div>
    // </div>
    <>
      <div id="location" className="pt--60">
        <div className="container">
        <h2>Locations Offered </h2>
        <div className="row pt-60">
          <div className="location-details-card">
            <div className="image-sec-location">
            <img src="/images/melbounrne.jpg" alt="" />
            </div>
            <div className="location-text">
              <h3 className="loc-title">Melbourne</h3>
              <Link to='/melbourne/'>View </Link>
            </div>
          </div>
          <div className="location-details-card">
            <div className="image-sec-location">
            <img src="/images/adelaide.jpg" alt="" />
            </div>
            <div className="location-text">
              <h3 className="loc-title">Adelaide</h3>
              <Link to='/adelaide/'>View </Link>
            </div>
          </div>
          <div className="location-details-card">
            <div className="image-sec-location">
            <img src="/images/sydney.jpg" alt="" />
            </div>
            <div className="location-text">
              <h3 className="loc-title">Sydney</h3>
              <Link to='/sydney/'>View </Link>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
