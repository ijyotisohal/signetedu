import React, { useEffect } from 'react'
import '../../assets/Courses.css';
import CoursesData from '../../data/courses/courses.json';
import {Link} from 'react-router-dom';
import {slugify} from '../../utils/index'
import { Fade } from 'react-awesome-reveal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardAction, CardActions } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTranslations } from '../../actions/languageActions';
import Loading from "../components/loading/Loading";
// const Data = CoursesData;
const CoursesMain = () => {
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
  
  const { homepage } = translations;
  const Data = homepage.program.coursesList;
 
  return (
    <div>
     <Fade   delay={1e2} triggerOnce cascade damping={1e-9}>
      {/* <h1>Courses</h1>
      <div className="container">
        <div className="row">
          {
            Data.slice(0,6).map((cData)=>(
             <div className="col-md-3 border border-1 shadow-lg courses mt-3 mb-4 mx-5">
             <Link to={process.env.PUBLIC_URL + `/courses/${slugify(cData.title)}`}>
              <img src={cData.image} alt={cData.t}/>
              <h3>{cData.title}</h3>
             </Link>
             </div>
            ))
          }
         
        </div>
      </div> */}
    <div className="container mt-5 mb-5 pt-5 pb-5">
    <div className="row">
     {
      Data.slice(0,6).map((cData)=>(
        <div className="col-md-4 mt-2 mb-3">
        <Link className='text-decoration-none' to={process.env.PUBLIC_URL + `/courses/${slugify(cData.urlTitle)}`}>
        <Card sx={{ maxWidth: 380 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={cData.image}
          alt={cData.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cData.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cData.deliveryMode}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
         <Link to={process.env.PUBLIC_URL + `/courses/${slugify(cData.title)}`}> Click Here to Available Courses</Link>
        </Button> */}
      </CardActions>
    </Card>
          </Link>
        </div>
      ))
     }
     </div>
    </div>
      </Fade>
    </div>
  )
}

export default CoursesMain