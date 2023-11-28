import React, { useEffect } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Courses from './pages/Courses';
import SubCourses from './pages/SubCourses';

// import About from './About';
import CourseDetails from './pages/course-details';
import Instructors from './pages/Instructors';
import InstuctorDetails from './pages/InstuctorDetails';

import HomeComponent from './pages/MainHome';
import AboutPage from './pages/About';
import CurrentStudents from './pages/current-students';
import Futurestudents from './pages/future-students';
import ContactUs from './pages/contact';
import CurrencyConverter from './components/Sample';
import AustralianLifestyle from './pages/AustralianLifestyle';
import AgentApplicationForm from './pages/AgentApplicationForm';
import Agents from './pages/Agents';
import FilteredArray from './components/FilteredArray';
import PoliciesAndProcedures from './pages/PoliciesAndProcedures';
import Forms from './pages/Forms';
import SelectForm from './pages/SelectForm';
import ApplicationForCreditTransfer from './pages/forms/ApplicationForCreditTransfer';
import ApplicationToCancelEnrolment from './pages/forms/ApplicationToCancelEnrolment';
import ChangeOfStudentDetailsForm from './pages/forms/ChangeOfStudentDetailsForm';
import ComplaintForm from './pages/forms/ComplaintForm';
import GTEForm from './pages/forms/GteForm';
import RefundRequestForm from './pages/forms/RefundRequestForm';
import StudentRequestForm from './pages/forms/StudentRequestForm';
import Sample from './components/Sample';
import Languageoption from './components/language-dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTranslations, setLanguage } from './actions/languageActions';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import MenuList from './pages/Menu';
import Sydney from './components/locations/Sydney';
import Melbourne from './components/locations/Melbourne';
import Adelaide from './components/locations/Adelaide';
import Login from './components/admin/Login';
import Dashboard from './components/admin/Dashboard';
import AdminProfile from './components/admin/AdminProfile';
import ApplicationForCreditTransferData from './components/admin/ApplicationForCreditTransfer';
import ContactUSData from './components/admin/contactus/ContactUSData';
import AdminSelectForm from './components/admin/AdminSelectForm';
import GteFormData from './components/admin/GteFormData';
import ApplicationToCancelEnrolmentData from './components/admin/ApplicationToCancelEnrolment';
import ChangeOfStudentDetailsFormData from './components/admin/ChangeOfStudentDetailsForm';
import ComplaintFormData from './components/admin/ComplaintForm';
import RefundRequestFormData from './components/admin/RefundRequestForm';
import StudentRequestFormData from './components/admin/StudentRequestForm';
import ComplaintSM from './components/admin/showmore/ComplaintSM';
import CreditSM from './components/admin/showmore/CreditSM';
import CancelSM from './components/admin/showmore/CancelSM';
import ChangeSM from './components/admin/showmore/ChangeSM';
import RefundSM from './components/admin/showmore/RefundSM';
import GteSM from './components/admin/showmore/GteSM';
import ScrollToTop from './components/Footer/ScrollToTop';
import StudentReqSM from './components/admin/showmore/StudentReqSM';
import Contact from './components/Contact';
import ContactUsMelbourne from './pages/ContactMelbourne';
import { HelmetProvider } from 'react-helmet-async';
import FormEoi from './elements/FormEoi';
import StrudentApplication from './pages/StrudentApplication';
// import SalesIQ from './elements/ZohoSales';





const App = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.language.selectedLanguage);

  // Retrieve the selected language from localStorage on page load
  useEffect(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage) {
      dispatch(setLanguage(storedLanguage));
    }
  }, [dispatch]);

  // Fetch translations when the selected language changes
  useEffect(() => {
    dispatch(fetchTranslations(selectedLanguage));
  }, [dispatch, selectedLanguage]);

  // Store the selected language in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('selectedLanguage', selectedLanguage);
  }, [selectedLanguage]);
  const helmetContext = {}
  return (
    <HelmetProvider context={helmetContext}>
    <div>
    <Languageoption/>
      <Router>
    <ScrollToTop/>
        <Routes>
      
          <Route path='/' exact element={<HomeComponent/>}/>
          <Route path='/sample' exact element={<MenuList/>}/>
          <Route path='/about-us' exact element={<AboutPage/>}/>
          <Route path='/courses' exact element={<Courses/>}/>
          <Route path='/:slug' exact element={<SubCourses/>}/>
          <Route path='/:slug/:slug' exact element={<CourseDetails/>}/>
          <Route path='/blogs/' exact element={<Blogs/>}/>
          <Route path='/blogs/:slug' exact element={<BlogDetails/>}/>
          <Route path='/instructors' exact element={<Instructors/>}/>f
          <Route path='/australian-lifestyle' exact element={<AustralianLifestyle/>}/>
          {/* <Route path='/agent-application-form' exact element={<AgentApplicationForm/>}/> */}
          <Route path='/agent-application-form' exact element={<AgentApplicationForm/>}/>
          {/* <Route path='/agent-list' exact element={<Agents/>}/> */}
          <Route path='/forms' exact element={<SelectForm/>}/>
          <Route path='/application-for-credit-transfer' exact element={<ApplicationForCreditTransfer/>}/>
          <Route path='/application-to-cancel-enrollment' exact element={<ApplicationToCancelEnrolment/>}/>
          <Route path='/change-of-student-details-form' exact element={<ChangeOfStudentDetailsForm/>}/>
          <Route path='/complaint-form' exact element={<ComplaintForm/>}/>
          <Route path='/gte-form' exact element={<GTEForm/>}/>
          <Route path='/refund-request-form' exact element={<RefundRequestForm/>}/>
          <Route path='/student-request-form' exact element={<StudentRequestForm/>}/>
          <Route path='/instructors' exact element={<InstuctorDetails/>}/>
          <Route path='/current-students' exact element={<CurrentStudents/>}/>
          <Route path='/future-students' exact element={<policiesand/>}/>
          <Route path='/policies-and-procedures' exact element={<PoliciesAndProcedures/>}/>
          <Route path='/contact-us' exact element={<ContactUs/>}/>
          <Route path='/sydney' exact element={<Sydney/>}/>
          <Route path='/melbourne' exact element={<Melbourne/>}/>
          <Route path='/adelaide' exact element={<Adelaide/>}/>
          <Route path='/contact-us/melbourne' exact element={<ContactUsMelbourne/>}/>
          <Route path='/student-application-vn' exact element={<StrudentApplication/>}/>
{/* admin-routes */}

<Route path="/admin/login" exact element={<Login />} />

<Route path="/admin" exact element={<Dashboard />} />
<Route path="/admin/profile" exact element={<AdminProfile />} />
<Route path="/admin/contact-us-forms" exact element={<ContactUSData />} />
<Route path='/admin/forms' exact element={<AdminSelectForm />} />
<Route path="/admin/gteFormData" exact element={<GteFormData />} />
<Route
  path="/admin/applicationForCreditTransferData"
  exact
  element={<ApplicationForCreditTransferData />}
/>
<Route
  path="/admin/applicationToCancelEnrolmentData"
  exact
  element={<ApplicationToCancelEnrolmentData />}
/>
<Route
  path="/admin/changeOfStudentDetailsFormData"
  exact
  element={<ChangeOfStudentDetailsFormData />}
/>
<Route
  path="/admin/complaintFormData"
  exact
  element={<ComplaintFormData />}
/>
<Route
  path="/admin/refundRequestFormData"
  exact
  element={<RefundRequestFormData />}
/>
<Route
  path="/admin/studentRequestFormData"
  exact
  element={<StudentRequestFormData />}
/>

<Route
  path="/admin/complaintFormData/:id"
  exact
  // element={<ComplaintSM />}
  element={<ComplaintSM />}
/>
<Route path="/admin/gteFormData/:id" exact element={<GteSM />} />
<Route
  path="/admin/applicationForCreditTransferData/:id"
  exact
  element={<CreditSM />}
/>
<Route
  path="/admin/applicationToCancelEnrolmentData/:id"
  exact
  element={<CancelSM />}
/>
<Route
  path="/admin/changeOfStudentDetailsFormData/:id"
  exact
  element={<ChangeSM />}
/>
<Route
  path="/admin/refundRequestFormData/:id"
  exact
  element={<RefundSM />}
/>
<Route
  path="/admin/studentRequestFormData/:id"
  exact
  element={<StudentReqSM />}
/>
<Route
  path="/eoi"
  exact
  element={<FormEoi />}
/>
        </Routes>
{/* <SalesIQ/> */}
      </Router>
    </div>
    </HelmetProvider>
  )
}

export default App;