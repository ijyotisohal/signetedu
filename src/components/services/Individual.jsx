import React from 'react'
import courseData from '../../data/courses/courses.json';
import { useParams } from 'react-router-dom';
import { slugify } from '../../utils';
import Accordion from 'react-bootstrap/Accordion';
import { Fade, Slide } from 'react-awesome-reveal';

const Data = courseData;
const Individual = () => {
    const params = useParams();
    const courseSlug = params.slug  ;
  
    const getCourseData = Data.filter(data => slugify(data.title) === courseSlug);
    const detailsService = getCourseData[0];
    console.log(detailsService)
  return (
    <Fade   delay={1e2} triggerOnce cascade damping={1e-9}>
    <div className='pt-5 mt-5 pb-5 mb-5' >
<h3 className='text-center mb-5' >{detailsService.title}</h3>
{/*  */}
<div className="container ">
    <div className="row text-center">
    <div className="col-md-3" >
                    <div className="card border-0 shadow p-3 mb-5 rounded">
                    <Fade delay={1e3} direction='down' triggerOnce cascade damping={1e-1}>
                        <div className="card-body">
                            <h4 className="card-title">Course Code  
                            </h4>
                             <p> <strong> {detailsService.courseCode}</strong></p> 
                        </div>
                        </Fade>
                    </div>
                </div>
                <div className="col-md-3" >
                    <div className="card border-0 shadow p-3 mb-5 rounded">
                        <div className="card-body">
                            <h4 className="card-title">CRICOS Code 
                            </h4>
                             <p> <strong> {detailsService.cricosCode}</strong></p> 
                        </div>
                    </div>
                </div>
                <div className="col-md-3" >
                    <div className="card border-0 shadow p-3 mb-5 rounded">
                        <div className="card-body">
                            <h4 className="card-title">Duration  
                            </h4>
                             <p> <strong> {detailsService.duration}</strong></p> 

                        </div>
                    </div>
                </div>
                <div className="col-md-3" >
                    <div className="card border-0 shadow p-3 mb-5 rounded">
                        <div className="card-body">
                            <h4 className="card-title">Faculty   
                            </h4>
                             <p> <strong> {detailsService.faculty}</strong></p> 
                        </div>
                    </div>
                </div>
    </div>

    {/* delivery mode */}
<div className="row">
    <div className="col-md-6">
        <h3 className="title">{detailsService.title}</h3>
    </div>
</div>
<div className="accordian-sec">
<Accordion defaultActiveKey="1">
      {
        detailsService.deliveryModeList.map((indData)=>(
            <Accordion.Item eventKey={indData.id}>
        <Accordion.Header>{indData.title}</Accordion.Header>
        <Accordion.Body>
         {
            indData.body.map((bodyData,i)=>(
                <div className='serviceData' key={i} dangerouslySetInnerHTML={{__html: bodyData}}></div>
            ))
         }
        </Accordion.Body>
      </Accordion.Item>
        ))
      }
      <Accordion.Item eventKey="15">
        <Accordion.Header>{detailsService.coreUnits.title}</Accordion.Header>
        <Accordion.Body>
      <div className="row">
      {
        detailsService.coreUnits.coreUnitsList.map((uData)=>(
          <>
          <div className="col-md-5 border border-1 p-5 mx-5 text-center">{uData.title}</div>
          <div className="col-md-5 border border-1 p-5 mx-5 text-center">{uData.data}</div>
          </>
        ))
       }
      </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="16">
        <Accordion.Header>{detailsService.unitsOfCompetency.title}</Accordion.Header>
        <Accordion.Body>
      <div className="row">
      {
        detailsService.unitsOfCompetency.unitsOfCompetencyList.map((uData)=>(
          <>
          <div className="col-md-5 border border-1 p-5 mx-5 text-center  ">{uData.title}</div>
          <div className="col-md-5 border border-1 p-5 mx-5 text-center">{uData.data}</div>
          </>
        ))
       }
      </div>
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>    
</div>
{/* delivery mode  */}

</div>
{/*  */}



    </div>
    </Fade >
  )
}

export default Individual