import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import AmericanLifeStyleSlider from '../elements/sliders/AmericalLifeStyleSlider'
import ScrollAnimation from 'react-animate-on-scroll'
import AustralianBanner from '../elements/sliders/AustralianBanner'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTranslations } from '../actions/languageActions'
import { Link } from 'react-router-dom'
import NewHeader from '../components/Header/NewHeader'
import Loading from "../components/loading/Loading";
import FormModal from '../elements/FormModal'
import { Helmet } from 'react-helmet-async'
const AustralianLifestyle = () => {
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
    
    const { australianlifestyle } = translations;
    const lifeInAustraliaListOne = australianlifestyle.lifeInAustralia.list;
    const whoWeAreData = australianlifestyle.whoWeAre.list;
  return (
    <div className='as-li' >
      <Helmet>
<title>Australian Lifestyle - Signet Institute | National Recognised Training</title>
<meta name='description' content='Experience the quality education and a rich cultural adventure at Signet Institute. Enroll now and embark on a transformative journey in the heart of Australian lifestyle.'data-rh="true" />
</Helmet>
        <NewHeader/>

        {/* banner section */}
        <section className="team-setion-two  rel z-1 pt--120 rpt-90 pb-10 rpb-40 aus-banner">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-5">
                        <h4 className="ab-tle">
                            {australianlifestyle.title}
                        </h4>
                        <h2>{australianlifestyle.banner.title}</h2>
                        <p>{australianlifestyle.banner.description}</p>
                        <Link to='/contact-us' className="theme-btn border-0">{australianlifestyle.banner.button}</Link>
                    </div>
                    <div className="col-md-7">
                        <div className="ab-ig">
                            <AustralianBanner/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* banner section */}
        <div className="asu-li">
   
<section className="team-setion-two aus-banner-two rel z-1 pt-80 rpt-90 pb-80 rpb-40">
    <div className="container">
        <div className="row g-5 align-items-center">
            <div className="col-md-6 life-sec-one">
            <div className="row g-4 justify-content-center">
                <div className="col-md-6 life-sec-im-one">
                    <img src="/images/adelaide/img-2.jpg" alt="" />
                </div>
                <div className="col-md-6 life-sec-im-two">
                    <img src="/images/melbourne/img-1.jpg" alt="" />
                </div>
                <div className="col-md-9 life-sec-im-three">
                    <img src="/images/sydney/img-1.jpg" alt="" />
                </div>
            </div>
            </div>
            <div className="col-md-6 life-sec-two">
                <h5 className="sec-one-title">{australianlifestyle.lifeInAustralia.title}</h5>
                <h2 className="sec-one-main-title">{australianlifestyle.lifeInAustralia.titleTwo}</h2>
                <p className="sec-desc-one">{australianlifestyle.lifeInAustralia.description}</p>
                <div className="sec-one-row row">
                {
                    lifeInAustraliaListOne.map((data)=>(

                    <div className="col-md-6">
                        <h3 className="sec-one-row-title">{data.title}</h3>
                        <p className="sec-one-row-desc">{data.description}</p>
                    </div>
                    ))
                }
                    
                </div>
                <p className="sec-desc-three">{australianlifestyle.lifeInAustralia.descriptionT}</p>
            </div>
        </div>
    </div>
</section>

<section className="team-setion-two aus-banner-three rel z-1 pt--80  rpt-90 pb-80 rpb-40">
    <div className="container">
        <div className="row g-5 align-items-center">
           
            <div className="col-md-6 life-sec-two">
                <h5 className="sec-one-title">{australianlifestyle.inclusiveBliss.title}</h5>
                <h2 className="sec-one-main-title">{australianlifestyle.inclusiveBliss.titleTwo}</h2>
                <div className="sec-one-row ">
                   
                        <h3 className="sec-one-row-title">{australianlifestyle.inclusiveBliss.list[0].title}</h3>
                        <p className="sec-one-row-desc">{australianlifestyle.inclusiveBliss.list[0].description}</p>
                   
                        <h3 className="sec-two-row-title">{australianlifestyle.inclusiveBliss.list[1].title}</h3>
                   
                </div>
                <p className="sec-desc-three">{australianlifestyle.inclusiveBliss.list[1].description}</p>
            </div>
            <div className="col-md-6 life-sec-one">
           <AmericanLifeStyleSlider/>
            </div>
        </div>
    </div>
</section>

{/* who we are */}
<section className="team-setion-two aus-banner-three rel z-1 pt--60  rpt-90 pb-0 rpb-40">
<div className="container pb-40">
    <div className="row">
        <div className="col-md-6">
            <img src='/img/thumbs/feedback.png' className='who-we-img ' alt='who we are'/>
        </div>
        <div className="col-md-6 who-we-sec-two">
            <h3 className="who-we-tit">{australianlifestyle.whoWeAre.title}</h3>
            <h5 className="who-we-title-two">{australianlifestyle.whoWeAre.titleTwo}</h5>
            <div className="row">
                <div className="col-md-12">
                    <h2 className="who-one-ttle">{australianlifestyle.whoWeAre.titleThree}</h2>
                    <p className="who-one-desc">{australianlifestyle.whoWeAre.description}</p>
                </div>
           {
            whoWeAreData.map((data)=>(
                <div className="col-md-6">
                    <h2 className="who-two-ttle" >{data.title}</h2>
                    <p className="who-two-des">
                   {data.description}
                    </p>
                </div>
               
            ))
           }
            </div>
        </div>
    </div>

</div>
</section>



{/* who we are */}



{/* competitive advantage section starts here */}

<section className="team-setion-two aus-banner-two rel z-1 pt--80  rpt-90 pb-70 rpb-40">
    <div className="container">
        <div className="row justify-content-between">
          
            <div className="col-md-6 who-we-sec-two">
                <h3 className="who-we-tit">{australianlifestyle.competitiveAdvantage.title}</h3>
                <h5 className="who-we-title-two">{australianlifestyle.competitiveAdvantage.titleTwo}</h5>
<p className="who-we-sec-des-one">{australianlifestyle.competitiveAdvantage.descriptionOne}</p>
<strong className="who-we-sec-desc-two">{australianlifestyle.competitiveAdvantage.descriptionTwo}</strong>
<p className="who-we-sec-desc-three">{australianlifestyle.competitiveAdvantage.descriptionThree}</p>
            <button className="theme-btn border-0" >
                <FormModal/>
            </button>
            </div>
            <div className="col-md-6">
                <div className="who-we-sec-img">
                <img src="/img/about/banner-03-2.png" className='' alt="" />
                </div>
            </div>
        </div>

    </div>
</section>


{/* competitive advantage section starts here */}
</div>

        <Footer/>
    </div>
  )
}

export default AustralianLifestyle