import React, { useEffect } from 'react'
import courseData from '../../data/courses/courses.json';
import { slugify } from '../../utils';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTranslations } from '../../actions/languageActions';
import Loading from '../loading/Loading';
import FormModal from '../../elements/FormModal';
// const Data = courseData
const CoursesHome = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.language.selectedLanguage);
  const translations = useSelector((state) => state.language.translations[selectedLanguage]);
  
  useEffect(() => {
    dispatch(fetchTranslations(selectedLanguage));
  }, [dispatch, selectedLanguage]);
  
  if (!translations) {
    return <div><Loading/></div>; // Show loading state while translations are being fetched
  }
  
  const { homepage ,header} = translations;
  const Data = homepage.program.coursesList;
console.log("courses", Data)
  return (
    <div className="dizme_tm_section pb-80 pt-80 " id="courses-home" >
        <div className="container">
        <div className="title-sec text-center pb-40">
            <h6 className="count-text">{homepage.program.title}</h6>
            <h2 className="prog-title">{homepage.program.titleTwo}</h2>
        </div>
        <div className="row">
                  {
                    Data.slice(0,6).map((data)=>(
                      <div className="col-md-4">
                        <Link to={process.env.PUBLIC_URL + `/${slugify(data.urlTitle)}`}>
                    <div className="coach-item wow fadeInUp delay-0-4s">
                      <div className="coach-image">
                          {/* <a className="category">{data.title}</a> */}
                        
                        <img
                          src={data.image}
                          alt={data.title}
                        />
                      </div>
                      <div className="coach-content">
                        {/* <span className="label">Basic Coach</span> */}
                        <h4>
                          <Link to={process.env.PUBLIC_URL + `/${slugify(data.urlTitle)}`}>
                           {data.title}
                          </Link>
                        </h4>
                        <div className="ratting-price">
                          <div className="ratting">
                            {/* <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" /> */}
                            {/* <span>{header.courses}({data.coursesLength})</span> */}
                          </div>
                          {/* <span className="price">256.95</span> */}
                        </div>
                      
                        {/* <ul className="coach-footer">
                          <li>
                            <i className="far fa-file-alt" />
                            <span>12 Lessions</span>
                          </li>
                          <li>
                            <i className="far fa-user" />
                            <span>seats</span>
                          </li>
                        </ul> */}
                      </div>
                    </div>
                    </Link>
                  </div>
                    ))
                  }
            
                </div>
        </div>
    </div>
  )
}

export default CoursesHome