import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import HomeData from "../data/home/home.json";
import CountryData from '../data/countries/countryCodesWithUnicodes.json'
import TabOne from "../components/lotties/tabs/TabOne";
import TabTwo from "../components/lotties/tabs/TabTwo";
import TabThree from "../components/lotties/tabs/TabThree";
import TabFour from "../components/lotties/tabs/TabFour";
import Loading from '../components/loading/Loading'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTranslations } from '../actions/languageActions';
import { useEffect } from "react";


const countryCodeData = CountryData;
const Data = HomeData.map((data)=>data);
function TabPanel(props) {
  
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
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
  const chooseData = homepage.whyChoose.list;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
<div className="vert-tabs-section">
  
<div className="container pt--100 ">
      <div className="title-sec text-center pb-40">
            <h6 className="count-text">{homepage.whyChoose.title}</h6>
            <h3 className="prog-title">{homepage.whyChoose.titleTwo}</h3>
        </div>
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            height: "fit-content",
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
            className="col-md-3"
          >
            <Tab label="Be Transparent" {...a11yProps(0)} />
            <Tab label="Be Collaborative" {...a11yProps(1)} />
            <Tab label="Be Respectful" {...a11yProps(2)} />
            <Tab label="Be Proactive" {...a11yProps(3)} />
            <Tab label="Be Ethical" {...a11yProps(4)} />
          </Tabs>
          <div className="tabs-content-sec col-md-9">
          <TabPanel value={value} index={0}>
              <div className="row align-items-center">
                <div className=" col-md-6">
                <h3 className="tab-title" >
 <strong>{homepage.whyChoose.list[0].title}</strong> </h3>
{homepage.whyChoose.list[0].description}
                </div>
                <div className=" col-md-6">
                 {/* <TabOne/> */}
                 <img src={homepage.whyChoose.list[0].image} alt="" />
                </div>
              </div>
            </TabPanel>
            
          
            <TabPanel value={value} index={1}>
            <div className="row align-items-center">
                <div className=" col-md-6">
                <h3 className="tab-title" >
 <strong>{homepage.whyChoose.list[1].title}</strong> </h3>
{homepage.whyChoose.list[1].description}
                </div>
                <div className=" col-md-6">
                 {/* <TabOne/> */}
                 <img src={homepage.whyChoose.list[1].image} alt="" />
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <div className="row align-items-center">
                <div className=" col-md-6">
                <h3 className="tab-title" >
 <strong>{homepage.whyChoose.list[2].title}</strong> </h3>
{homepage.whyChoose.list[2].description}
                </div>
                <div className=" col-md-6">
                 {/* <TabOne/> */}
                 <img src={homepage.whyChoose.list[2].image} alt="" />
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
            <div className="row align-items-center">
                <div className=" col-md-6">
                <h3 className="tab-title" >
 <strong>{homepage.whyChoose.list[3].title}</strong> </h3>
{homepage.whyChoose.list[3].description}
                </div>
                <div className=" col-md-6">
                 {/* <TabOne/> */}
                 <img src={homepage.whyChoose.list[3].image} alt="" />
                </div>
              </div>
            </TabPanel> 
            <TabPanel value={value} index={4}>
            <div className="row align-items-center">
                <div className=" col-md-6">
                <h4 className="tab-title" >
 <strong>{homepage.whyChoose.list[4].title}</strong> </h4>
{homepage.whyChoose.list[4].description}
                </div>
                <div className=" col-md-6">
                 {/* <TabOne/> */}
                 <img src={homepage.whyChoose.list[4].image} alt="" />
                </div>
              </div>
            </TabPanel> 
          </div>
        </Box>
      </div>
</div>
    </>
  );
}
