import React from 'react'

import CoursesData from '../data/courses/courses.json';
import {Link, useParams} from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { slugify } from '../utils';
import Header from '../components/Header/Header';
import PageBanner from '../components/about/PageBanner';
import Footer from '../components/Footer/Footer';
import NewHeader from '../components/Header/NewHeader';
const Data = CoursesData;
const Instructors = () => {
    const automotiveData = Data.filter(data => slugify(data.teacherCate ? data.teacherCate : "") === "InstructorOne");
    const businessData = Data.filter(data => slugify(data.cate ? data.cate : "") === "business");
    const constructionData = Data.filter(data => slugify(data.cate ? data.cate : "") === "construction");
    const communityData = Data.filter(data => slugify(data.cate ? data.cate : "") === "community");
    const healthcareData = Data.filter(data => slugify(data.cate ? data.cate : "") === "healthcare");
    const generalData = Data.filter(data => slugify(data.cate ? data.cate : "") === "general");
    console.log(automotiveData);
    console.log(businessData);
    console.log(constructionData);
    console.log(communityData);
    console.log(healthcareData);
    console.log(generalData);

//   console.log(detailsService)
  return (
    <div>
      <NewHeader/>
      <Fade   delay={1e2} triggerOnce cascade damping={1e-9}>
      {/* <PageBanner pageName={ detailsService.title} /> */}
  {/* <div className="pt-130">
  <div className="container">
        <div className="row">
          {
            Data.filter(data => slugify(data.cate ? data.cate : "") === detailsService.data).map((cData)=>(
             <div className="col-md-4">
                    <div className="coach-item wow fadeInUp delay-0-4s">
                      <div className="coach-image">
                      <Link to={process.env.PUBLIC_URL + `/courses/${slugify(couseSlug)}/${slugify(cData.title)}`}>
                          <a className="category">{cData.title}</a>
                        </Link>
                        <img
                          src={cData.image}
                          alt={cData.title}
                        />
                      </div>
                      <div className="coach-content">
                        <span className="label">Basic Coach</span>
                        <h4>
                        <Link to={process.env.PUBLIC_URL + `/courses/${slugify(couseSlug)}/${slugify(cData.title)}`}>

                           {cData.title}
                          </Link>
                        </h4>
                        <div className="ratting-price">
                          <div className="ratting">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <span>(3k)</span>
                          </div>
                          <span className="price">256.95</span>
                        </div>
                        <ul className="coach-footer">
                          <li>
                            <i className="far fa-file-alt" />
                            <span>12 Lessions</span>
                          </li>
                          <li>
                            <i className="far fa-user" />
                            <span>seats</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
            ))
          }
         
        </div>
      </div>
  </div> */}
      </Fade>
      <Footer/>
    </div>
  )
}

export default Instructors