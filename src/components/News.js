import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTranslations } from "../actions/languageActions";
import { Link } from "react-router-dom";
import { slugify } from "../utils";
import Loading from "./loading/Loading";

const News = () => {
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
    dispatch(fetchTranslations(selectedLanguage));
  }, [dispatch, selectedLanguage]);

  if (!translations) {
    return (
      <div className="load text-center ">
        <div className="load-sc">
          <h4><Loading/>..</h4>
          <h1>
            PLease Wait Your Selected language {selectedLanguage} Is Being
            Loading
          </h1>
        </div>
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
    

      {/* blog body starts here */}
      <div className="" id="blog-home">
      <div className="dizme_tm_news">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            {/* <span>From My Blog</span> */}
            {/* <h3>{`Our Recent Updates, Blog, Tips, Tricks & More`}</h3> */}
            <h3>{`Our Blog`}</h3>
          </div>
          <div className=" row">
            {Data &&
                Data.map((blog, i) => (
           <div key={i} className="col-md-3 blog-cards">
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
                          <a href="#">{blog.titleTwo}</a>
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
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/news/1.png" alt="image" />
        </div>
        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/news/2.png" alt="image" />
        </div>
      </div>
    </div>
      {/* blog body starts here */}
    </div>
  );
};

export default News;
