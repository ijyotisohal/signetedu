import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTranslations } from '../actions/languageActions';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Link, useParams } from 'react-router-dom';
import { slugify } from '../utils';
import NewHeader from '../components/Header/NewHeader';
import Loading from "../components/loading/Loading";
const BlogDetails = () => {
    const params = useParams();
  const courseSlug = params.slug;
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
    return (
      <div >
       <Loading/>
      </div>
    ); // Show loading state while translations are being fetched
  }

  const { blogs } = translations;
  const Data = blogs.blogDetails.blogs;
  console.log("courses", Data);
  console.log(blogs);
  const getCourseData =Data && Data.filter(data => slugify(data.title) === courseSlug);
    const detailsService = getCourseData[0];
    console.log(detailsService)
  return (
    <div>
        <NewHeader/>
        <div className="sub-course-banner pt--150">
        <div className="container">
          <div className="sub-banner-text pt-80">
            <div className="row">
              <div className="col-md-6 banner-sub-text-one">
                <h3 className="banner-sub-ttile">{detailsService.titleTwo}</h3>
                <p className="banner-sub-descr">{detailsService.blogdetailsDescription} </p>
                {/* <p className="sub-banner-cap">
                  Together, let's unlock the doors to success and shape a better
                  tomorrow.
                </p> */}
              </div>
              <div className="col-md-6 banner-sub-text-two ">
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
                    src="/assets/images/hero/hero-two-left.png"
                    alt="banner"
                  />
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
                    className="sp-two"
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
      {/* blog body data goes here */}
      <div className="pt-40 pb-80 blog-details-sec">
      <div className="row">
      <div className="col-md-10 mx-auto">
     <div className="container blog-data ">
     <h2>{detailsService.titleTwo}</h2>
     <img src={detailsService.img} alt={detailsService.title} />
      {
        detailsService.details.map((data)=>(
<div dangerouslySetInnerHTML={{__html: data}}
></div>
        ))
      }
     </div>
     </div>
     {/* <div className="col-md-4">
     <h2>Recent Blogs</h2>
     {
                   Data && Data.slice().sort(() => Math.random() - 0.5).map((recentBlogs)=>(
                     <>
                    <h2>{recentBlogs.title}....</h2>
                   
                     </> 
                     
                    ))
                   }
     </div> */}
     </div>
      </div>
      {/* blog body data goes here */}
        <Footer/>
    </div>  
  )
}

export default BlogDetails