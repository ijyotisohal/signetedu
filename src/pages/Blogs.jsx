import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchTranslations } from "../actions/languageActions";
import { Link } from "react-router-dom";
import { slugify } from "../utils";
import NewHeader from "../components/Header/NewHeader";
import Loading from "../components/loading/Loading";
import { Helmet } from "react-helmet-async";
const Blogs = () => {
  const [filteredData, setFilteredData] = useState();
  const [selectedCategory, setSelectedCategory] = useState("");
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const translations = useSelector(
    (state) => state.language.translations[selectedLanguage]
  );
  useEffect(() => {
    // Scroll to 1000px vertically
    window.scrollTo(0, 650);
  }, []);
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
  const handleTitleFilter = (title) => {
    const filtered = Data.filter((product) => product.title.includes(title));
    setFilteredData(filtered);
  };

  const handleCategoryFilter = (cate) => {
    const filtered = Data.filter((product) => product.cate === cate);
    setFilteredData(filtered);
  };

  const handleCategoryClick = (cate) => {
    setSelectedCategory(cate);
    if (cate === "") {
      setFilteredData(Data);
    } else {
      handleCategoryFilter(cate);
    }
  };
  return (
    
    <div>
      <Helmet>
<title>Blog - Signet Institute of Australia</title>
<meta name='description' content='Stay updated with our informative articles, tips, insights & industry trends across various topics we provide in our blog @SignetInstitute'data-rh="true" />
</Helmet>
      <NewHeader />
      <div className="sub-course-banner pt--150">
        <div className="container">
          <div className="sub-banner-text pt-80">
            <div className="row">
              <div className="col-md-6 banner-sub-text-one">
                <h3 className="banner-sub-ttile">{blogs.banner.title}</h3>
                <p className="banner-sub-descr">{blogs.banner.titleOne} </p>
               
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

      {/* blog body starts here */}
      <div className="dizme_tm_section pt--80" id="blog ">
      <div className="dizme_tm_news dizme_tm_news_blog">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            {/* <span>From My Blog</span> */}
            {/* <h3>{`Our Recent Updates, Blog, Tips, Tricks & More`}</h3> */}
            <h3>{`Our Blog`}</h3>
          </div>
          <div className="news_list row">
            {Data &&
                Data.map((blog, i) => (
           <div className="col-md-3 blog-cards">
           <Link to={process.env.PUBLIC_URL + `/blogs/${slugify(blog.title)}`}>
                  <div className="wow fadeInUp" data-wow-duration="1s" key={i}>
                    <div className="list_inner">
                      <div className="image">
                        <img src={blog.img} alt="image" />
                        <div
                          className="main"
                          data-img-url={blog && blog.img}
                          style={{
                            backgroundImage: `url(${blog && blog.img})`,
                          }}
                        />
                        <div className="date">
                          <h3>{blog && blog.date && blog.date.date}</h3>
                          <span>{blog && blog.date && blog.date.month}</span>
                        </div>
                        <a
                          className="dizme_tm_full_link"
                          href="#"
                         
                        />
                      </div>
                      <div className="details">
                        <span className="category">
                          <a href="#">{blog.category}</a>
                        </span>
                        <h3 className="title">
                          <a href="#">{blog.title}</a>
                        </h3>
                      </div>
                      <div className="news_hidden_details">
                        <div className="news_popup_informations">
                          <div className="text">
                            {blog.details &&
                              blog.details.map((details, i) => (
                                <p key={i}>{details}</p>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
           </Link>
            </div>
                ))}
          </div>
        </div>
        {/* <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/news/1.png" alt="image" />
        </div>
        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/news/2.png" alt="image" />
        </div> */}
      </div>
    </div>
      {/* blog body starts here */}
      <Footer />
    </div>
  );
};

export default Blogs;
