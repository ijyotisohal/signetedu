import React, { useState,useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import SignatureCanvas from 'react-signature-canvas';
import JsonData from '../../data/countries/countryName.json';
import axios from 'axios';
import Loading from "../../components/loading/Loading";
import { useDispatch, useSelector } from 'react-redux';
import { fetchTranslations } from '../../actions/languageActions';
import {
  IdValidation,
  OtherRequestCheck,
  RequestDobValidation,
  RquestLeaveOnCheck,
  emailValidator,
  handleNameError,
  handleProcessedNameError,
  mobileValidation,
  requestValidator,
  typeOfIdValidation,
} from '../../components/errors/errorFun';
import NewHeader from '../../components/Header/NewHeader';
import Footer from '../../components/Footer/Footer';
import { Helmet } from 'react-helmet-async';

const StudentRequestForm = () => {
  const [sign, setSign] = useState();
  const [url, setUrl] = useState();

  const handleClear = (e) => {
    e.preventDefault();
    sign.clear();
    setUrl('');
  };

  const handleGenerate = (e) => {
    e.preventDefault();
    setUrl(sign.getTrimmedCanvas().toDataURL('image/png'));
  };

  const [formData, setFormData] = useState({
    studentID: '',
    surName: '',
    givenName: '',
    dob: '',
    mobCode: '',
    mobile: '',
    email: '',
    courseCode: '',
    courseName: '',
    date: '',
  });

  const [updateContact, setUpdateContact] = useState(false);
  const [enrollmentLetter, setEnrollmentLetter] = useState(false);
  const [certificate, setCertificate] = useState(false);
  const [soa, setSoa] = useState(false);
  const [progressReport, setProgressReport] = useState(false);
  const [leave, setLeave] = useState(false);
  const [otherReq, setOtherReq] = useState(false);

  const [updateContactValue, setUpdateContactValue] = useState('');
  const [leaveFrom, setLeaveFrom] = useState('');
  const [leaveTo, setLeaveTo] = useState('');
  const [otherInput, setOtherInput] = useState('');
  const [reqNull, setReqNull] = useState(false);
  const [idError, setIdError] = useState(false);
  const [idNull, setIdNull] = useState(false);

  const [nameNull, setNameNull] = useState(false);
  const [nameError, setNameError] = useState(false);

  const [dobError, setDobError] = useState(false);

  const [courseError, setCourseError] = useState(false);

  const [leaveError, setLeaveError] = useState(false);

  const [otherError, setOtherError] = useState(false);

  const [dateError, setDateError] = useState(false);
  const [signNull, setSignNull] = useState(false);

  const [mobileContryCodeNull, setMobileCountryCodeNull] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [mobileNull, setMobileNUll] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [emailNull, setEmailNull] = useState(false);

  const [courseNameNull, setCourseNameNull] = useState(false);
  const [courseCodeNull, setCourseCodeNull] = useState(false);

  const [dateNull, setDateNull] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpateContact = () => {
    if (updateContact === false) {
      setUpdateContact(true);
    } else {
      setUpdateContact(false);
    }
  };

  const handleEnrollmentLetter = () => {
    if (enrollmentLetter === false) {
      setEnrollmentLetter(true);
    } else {
      setEnrollmentLetter(false);
    }
  };

  const handleCertificate = () => {
    if (certificate === false) {
      setCertificate(true);
    } else {
      setCertificate(false);
    }
  };

  const handleSOA = () => {
    if (soa === false) {
      setSoa(true);
    } else {
      setSoa(false);
    }
  };

  const handleProgressReport = () => {
    if (progressReport === false) {
      setProgressReport(true);
    } else {
      setProgressReport(false);
    }
  };

  const handleLeave = () => {
    if (leave === false) {
      setLeave(true);
    } else {
      setLeave(false);
    }
  };

  const handleOtherReq = () => {
    if (otherReq === false) {
      setOtherReq(true);
    } else {
      setOtherReq(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const IdVer = IdValidation(formData.studentID, setIdError, setIdNull);
    const namVer = handleNameError(
      formData.surName,
      formData.givenName,
      setNameNull,
      setNameError
    );
    const dobVer = RequestDobValidation(formData.dob, setDobError);
    const leaveVer = RquestLeaveOnCheck(
      leave,
      leaveFrom,
      leaveTo,
      setLeaveError
    );
    const OtherVer = OtherRequestCheck(otherReq, otherInput, setOtherError);
    // const dateVer = RequestDobValidation(formData.date, setDateError);
    const signVer = typeOfIdValidation(url, setSignNull);
    const courseCodeVer = typeOfIdValidation(
      formData.courseCode,
      setCourseCodeNull
    );
    const courseNameVer = typeOfIdValidation(
      formData.courseName,
      setCourseNameNull
    );
    const mobVer = mobileValidation(
      formData.mobCode,
      formData.mobile,
      setMobileCountryCodeNull,
      setMobileError,
      setMobileNUll
    );
    const emailVer = emailValidator(
      formData.email,
      setEmailError,
      setEmailNull
    );
    const requestVer = requestValidator(
      updateContact,
      enrollmentLetter,
      certificate,
      soa,
      progressReport,
      leave,
      otherReq,
      leaveFrom,
      leaveTo,
      otherInput,
      setReqNull
    );
    const dateVer = typeOfIdValidation(formData.date, setDateNull);
    if (
      IdVer &&
      namVer &&
      dobVer &&
      courseNameVer &&
      leaveVer &&
      OtherVer &&
      dateVer &&
      signVer &&
      emailVer &&
      courseCodeVer &&
      mobVer &&
      requestVer
    ) {
      const arr = [url];
      await axios
        .post(`${process.env.REACT_APP_BACKEND_LINK}/forms/srf`, {
          formData,
          updateContact,
          enrollmentLetter,
          certificate,
          soa,
          progressReport,
          leave,
          otherReq,
          leaveFrom,
          leaveTo,
          otherInput,
          arr,
        })
        .then((res) => {
          if (res.data.Status === 'Success') {
            alert('Success');
          } else {
            alert('Failed');
          }
        })
        .catch((e) => {
          console.log('Axios error', e);
        });
    }
  };
  useEffect(() => {
    // Scroll to 1000px vertically
    window.scrollTo(0, 650);
  }, []);
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.language.selectedLanguage);
  const translations = useSelector((state) => state.language.translations[selectedLanguage]);
  
  useEffect(() => {
    dispatch(fetchTranslations(selectedLanguage));
  }, [dispatch, selectedLanguage]);
  
  if (!translations) {
    return <div><Loading/></div>; // Show loading state while translations are being fetched
  }
  
  const { forms } = translations;
  return (
    <>
      <Helmet>
<title>Student Request Form Submit Online - Signet Institute of Australia</title>
<meta name='description' content='Easily submit your Student Request Form of details, preferences and essentials, streamlining the process for a prompt & efficient resolution.'data-rh="true" />
</Helmet>
    <NewHeader/>
    <div className="sub-course-banner pt--150">
       <div className="container">
       <div className="sub-banner-text pt-80">
          <div className="row">
         
            <div className="col-md-6 banner-sub-text-one">
      
            <h4 className="banner-sub-ttile">
            {forms.banner.changeofStudentDetailsForm.title}
              </h4>
              <h2>{forms.banner.changeofStudentDetailsForm.titleTwo}</h2>
              <p className="banner-sub-descr">
              {forms.banner.changeofStudentDetailsForm.descriptionOne}
              </p>
              <p className="sub-banner-cap">{forms.banner.changeofStudentDetailsForm.descriptionTwo}</p>   
            </div>
            <div className="col-md-5 banner-sub-text-two ">
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
                    src="/assets/images/about/man.png"
                    alt="banner"
                  />
               
                </div>
                <div className="sub-c-banner-tw">
                <img className='sp-one'
                    src="/assets/images/shapes/circle-dots-two.png"
                    alt="banner"
                  />
                </div>
                <div className="sub-c-banner-th">
                <img className='sp-two'
                    src="https://themes.envytheme.com/ellen/wp-content/uploads/2022/07/shape-1.png"
                    alt="banner"
                  />
                  <img class="sp-three" src="/img/brushes/contact/2.png" alt="banner"></img>
                </div>
               
            </div>
          </div>
        </div>
       </div>
       </div>
    <div className="outer-div pt--100">
      <Container>
        <h1 className="form-h1">STUDENT REQUEST FORM</h1>
        <div className="form-parent">
          <Form className="form-div">
            <p className="form-p">STUDENT DETAILS</p>

            <div className="name-div complaint-input row">
            <Form.Group className="mb-3 col-md-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                Student ID:<span className="mandate">*</span>
              </Form.Label>
              <br />
              <Form.Control
                type="text"
                name="studentID"
                onChange={handleChange}
              />
              {idError ? (
                <p style={{ color: 'red' }}>Enter valid Student number</p>
              ) : null}
              {idNull ? (
                <p style={{ color: 'red' }}>Enter Student number</p>
              ) : null}
            </Form.Group>
              <Form.Group
                className="mb-3 col-md-6"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  Student Name:<span className="mandate">*</span>
                </Form.Label>
                <div className="row">
                  <Form.Group
                    className="mb-3 col-md-6"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      type="text"
                      name="surName"
                      onChange={handleChange}
                    />
                    <p className="input-p">Surname</p>
                  </Form.Group>
                  <Form.Group
                    className="mb-3 col-md-6"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      type="text"
                      name="givenName"
                      onChange={handleChange}
                    />
                    <p className="input-p">Given Name</p>
                  </Form.Group>
                </div>
              </Form.Group>
              {nameError ? (
                <p style={{ color: 'red' }}>
                  surname and givenname should contain only alphabets
                </p>
              ) : null}
              {nameNull ? (
                <p style={{ color: 'red' }}>Student Name field is required</p>
              ) : null}
            
            <Form.Group className="mb-3 col-md-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Date of Birth:</Form.Label>
              <br />
              <Form.Control type="date" name="dob" onChange={handleChange} />
              {dobError ? (
                <p style={{ color: 'red' }}>Select valid DOB</p>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-3 col-md-4" controlId="exampleForm.ControlInput1">
              <Form.Label>
                Mobile:<span className="mandate">*</span>
              </Form.Label>
              <br />
              <div className="mobile-flex-div-child">
                <Form.Select
                  aria-label="Default select example"
                  className="flag-select"
                  onChange={handleChange}
                  name="mobCode"
                  value={formData.mobCode}
                >
                  <option>Select</option>
                  {JsonData.map((value) => {
                    return (
                      <option value={value.dial_code}>
                        <span>
                          <span>{value.flag} &nbsp;</span>
                          <span>{value.name} &nbsp;</span>
                          <span>{value.dial_code}</span>
                        </span>
                      </option>
                    );
                  })}
                </Form.Select>
                <Form.Control
                  type="tel"
                  onChange={handleChange}
                  name="mobile"
                  value={formData.mobile}
                />
              </div>
              {mobileContryCodeNull ? (
                <p style={{ color: 'red' }}>Please select country dail code</p>
              ) : null}
              {mobileError ? (
                <p style={{ color: 'red' }}>Enter valid mobile number</p>
              ) : null}
              {mobileNull ? (
                <p style={{ color: 'red' }}>Enter your mobile number</p>
              ) : null}
            </Form.Group>
            <Form.Group className="mb-3 col-md-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                Email:<span className="mandate">*</span>
              </Form.Label>
              <br />
              <Form.Control
                type="email"
                onChange={handleChange}
                name="email"
                value={formData.email}
              />
              <p className="input-p">example@example.com</p>
              {emailError ? (
                <p style={{ color: 'red' }}>Enter valid email</p>
              ) : null}
              {emailNull ? (
                <p style={{ color: 'red' }}>Enter your email</p>
              ) : null}
            </Form.Group>
              <Form.Group
                className="mb-3 col-md-2"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  Course Code:<span className="mandate">*</span>
                </Form.Label>
                <br />
                <Form.Control
                  type="text"
                  name="courseCode"
                  onChange={handleChange}
                />
                {courseCodeNull ? (
                  <p style={{ color: 'red' }}>Course Code is required</p>
                ) : null}
              </Form.Group>
              <Form.Group
                className="mb-3 col-md-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  Course Name:<span className="mandate">*</span>
                </Form.Label>
                <br />
                <Form.Control
                  type="text"
                  name="courseName"
                  onChange={handleChange}
                />
                {courseError ? (
                  <p style={{ color: 'red' }}>
                    Course should containe only alphabets
                  </p>
                ) : null}
                {courseNameNull ? (
                  <p style={{ color: 'red' }}>Course Code is required</p>
                ) : null}
              </Form.Group>
            </div>
            <div className="textarea-div checkReq">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  REQUEST TYPE (Tick below)<span className="mandate">*</span>
                </Form.Label>
               <div className='row'>
               <Form.Check
                  inline
                  label="Update contact details"
                  name="group1"
                  type="checkbox"
                  onChange={handleUpateContact}
                  className="checkIn"
                />
                <Form.Check
                  inline
                  label="Request for enrolment letter"
                  name="group1"
                  type="checkbox"
                  onChange={handleEnrollmentLetter}
                  className="checkIn"
                />
                <Form.Check
                  inline
                  label="Request for Certificate"
                  name="group1"
                  type="checkbox"
                  onChange={handleCertificate}
                  className="checkIn"
                />
                <Form.Check
                  inline
                  label="Request for SOA"
                  name="group1"
                  type="checkbox"
                  onChange={handleSOA}
                  className="checkIn"
                />
                <Form.Check
                  inline
                  label="Request for Course progress report"
                  name="group1"
                  type="checkbox"
                  onChange={handleProgressReport}
                  className="checkIn"
                />
                <Form.Check
                  inline
                  label="Request for Leave"
                  name="group1"
                  type="checkbox"
                  onChange={handleLeave}
                  className="checkIn"
                />
               </div>
                {leave ? (
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      Leave Date(From):<span className="mandate">*</span>
                    </Form.Label>
                    <br />
                    <Form.Control
                      type="date"
                      value={leaveFrom}
                      onChange={(e) => {
                        setLeaveFrom(e.target.value);
                      }}
                      className="leave-input"
                    />
                    <Form.Label>
                      Leave Date(To):<span className="mandate">*</span>
                    </Form.Label>
                    <Form.Control
                      type="date"
                      value={leaveTo}
                      onChange={(e) => {
                        setLeaveTo(e.target.value);
                      }}
                      className="leave-input"
                    />
                    {leaveError ? (
                      <p style={{ color: 'red' }}>
                        Leave Date must be selected
                      </p>
                    ) : null}
                  </Form.Group>
                ) : null}
                <Form.Check
                  inline
                  label="Other Request (Detail below) :"
                  name="group1"
                  type="checkbox"
                  onChange={handleOtherReq}
                  className="checkIn"
                />
                {otherReq ? (
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      type="text"
                      onChange={(e) => {
                        setOtherInput(e.target.value);
                      }}
                      value={otherInput}
                    />
                    {otherError ? (
                      <p style={{ color: 'red' }}>
                        Other request field should not be empty
                      </p>
                    ) : null}
                  </Form.Group>
                ) : null}
                {reqNull ? (
                  <p style={{ color: 'red' }}>This field is required</p>
                ) : null}
              </Form.Group>
            </div>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                Signature<span className="mandate">*</span>
              </Form.Label>
              <br />
              <div className="sign_div">
                <SignatureCanvas
                  canvasProps={{
                    width: 300,
                    height: 100,
                    className: 'sigCanvas',
                  }}
                  ref={(data) => setSign(data)}
                />
              </div>
              {!url ? (
                <button onClick={handleGenerate} className="sign-btn me-3 theme-btn  ">
                  Save
                </button>
              ) : (
                <button className="sign-btn theme-btn  saved-btn" disabled={true}>
                  Saved
                </button>
              )}
              <button onClick={handleClear} className="sign-btn theme-btn ">
                Clear
              </button>
              {signNull ? (
                <p style={{ color: 'red' }}>Signature is required</p>
              ) : null}
            </Form.Group>

            <Form.Group
              className="mb-3 date"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>
                Date:<span className="mandate">*</span>
              </Form.Label>
              <br />
              <Form.Control type="date" onChange={handleChange} name="date" />
              {dateNull ? (
                <p style={{ color: 'red' }}>This field is required</p>
              ) : null}
            </Form.Group>
            <button className='theme-btn mt-4 mb-40' onClick={handleSubmit}>Submit</button>
          </Form>
        </div>
      </Container>
    </div>
<Footer/>
    </>
  );
};

export default StudentRequestForm;
