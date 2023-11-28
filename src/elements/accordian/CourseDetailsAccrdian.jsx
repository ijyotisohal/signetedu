import Accordion from 'react-bootstrap/Accordion';
import { slugify } from '../../utils';
import CourseDta from '../../data/courses/courses.json'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTranslations } from '../../actions/languageActions';
import Loading from './../../components/loading/Loading';
const Data = CourseDta
const  CourseDetailsAccordian = () => {
  const params = useParams();
  const courseSlug = params.slug;
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
  const Data = homepage.program.coursesList;
  console.log("Data",Data)
   
    const getCourseData =Data && Data.filter(data => slugify(data.mainTitle) === courseSlug);
    const detailsService = getCourseData[0];
  return (
    // <Accordion defaultActiveKey={['0']} alwaysOpen>
    //   {
    //     detailsService.deliveryModeList.map((data)=>(
    //         <Accordion.Item eventKey={data.id}>
    //     <Accordion.Header>{data.title}</Accordion.Header>
    //     {
    //         data.body.map((bodyData,i)=>(
    //             <Accordion.Body>
    //             <div
    //             key={i}
    //   dangerouslySetInnerHTML={{__html: bodyData}}
    // />
    //     </Accordion.Body>
    //         ))
    //     }
    //   </Accordion.Item>
    //     ))
    //   }
     
     
    // </Accordion>
    <div className="cordian">
    <Accordion defaultActiveKey="1">
                               {
                                detailsService.deliveryModeList.map((bodyData)=>(
                                     <Accordion.Item eventKey={bodyData.id}>
                                     <Accordion.Header> {bodyData.title}</Accordion.Header>
                                    <Accordion.Body>
                                    {
            bodyData.body.map((bodyDataa,i)=>(
                <Accordion.Body>
                <div
                key={i}
      dangerouslySetInnerHTML={{__html: bodyDataa}}
    />
        </Accordion.Body>
            ))
        }
                                    </Accordion.Body>
                                </Accordion.Item>
                                ))
                               }
                           
                            </Accordion>
                            </div>
  );
}

export default CourseDetailsAccordian;