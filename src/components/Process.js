import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { slugify } from "../utils";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchTranslations } from "../actions/languageActions";
import Loading from "./loading/Loading";
// import { fatchData } from "../utilitss";

const Process = ({ dark }) => {
  
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
  const data = homepage.process.list;
console.log("process",data)

  return (
    <div className="dizme_tm_section pt-80" id="process">
      <div className="dizme_tm_process">
        <div className="container">
        <div className="title-sec text-center pb-40">
            <h6 className="count-text">{homepage.process.title}</h6>
            <h2 className="prog-title">{homepage.process.titleTwo}</h2>
        </div>
          <div className="list">
            <ul>
              {data &&
                data.map((data, i) => (
                  <li className="wow fadeInUp" data-wow-duration="1s" key={i}>
                    <div className="list_inner">
                      <div className="icon">
                        <span>
                          <img
                            className="brush"
                            src={data.icons}
                            alt={homepage.process.title}
                          />
                         
                        </span>
                      </div>
                      <div className="title">
                        <h3>{data.title}</h3>
                      </div>
                      <div className="text">
                        <p>{data.dec}</p>
                      </div>
                      <div
                className="dizme_tm_button wow fadeInUp"
                data-wow-duration="1s"
              >
                <Link className="anchor" to={process.env.PUBLIC_URL + `/${slugify(data.url)}`} >
                  <span>{data.urlTitle}</span>
                </Link>
              </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Process;
