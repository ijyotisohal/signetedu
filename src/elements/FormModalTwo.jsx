import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { contactUsMobileValidation } from '../components/errors/errorFun';
function FormModalTwo({title}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    mobile: '',
    message: '',
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitFailed, setSubmitFailed] = useState(false);

  const [automotiveCourses, setAutomotiveCourses] = useState(false);
  const [businessCourses, setBusinessCourses] = useState(false);
  const [bandcCourses, setBandcCourses] = useState(false);
  const [communityServiceCourses, setCommunityServiceCourses] = useState(false);
  const [healthCourses, setHealthCourses] = useState(false);
  const [geCourses, setGeCourses] = useState(false);

  const [mobileError, setMobileError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Hello');
    const mobVer = contactUsMobileValidation(formData.mobile, setMobileError);
    if (mobVer) {
      await axios
        .post(`${process.env.REACT_APP_BACKEND_LINK}/forms/contactUs`, {
          formData,
          automotiveCourses,
          businessCourses,
          bandcCourses,
          communityServiceCourses,
          healthCourses,
          geCourses,
        })
        .then((result) => {
          if (result.data.Status === 'Success') {
            setSubmitSuccess(true);
          } else {
            setSubmitFailed(true);
          }
        })
        .catch((e) => {
          console.log('Url not found axios', e);
        });
    }
  };
  return (
    <>
      <button className="theme-btn-1" onClick={handleShow}>
       More Info
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Signet Institute Of Australia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="pt--20">
            <h3 className="form-tle-dta">
              Register Now For Your Free Info Pack
            </h3>
            <Container>
              <Form className="contact-us-form">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>
                    Full Name<span className="mandate">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>
                    Your Email<span className="mandate">*</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>
                    Name Of Your Country<span className="mandate">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="country"
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>
                    Phone Number<span className="mandate">*</span>
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    name="mobile"
                    onChange={handleChange}
                    required
                  />
                  {mobileError ? (
                    <p style={{ color: 'red' }}>
                      Enter valid mobile number with country code
                    </p>
                  ) : null}
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Which Field are you Intereste in?</Form.Label>
                  <div className="contact-us-checkbox-outer-div-flex">
                    <Form.Check
                      inline
                      label="Automotive Courses"
                      name="Automotive Courses"
                      type="checkbox"
                      className="contact-us-checkbox"
                      onChange={(e) => {
                        {
                          automotiveCourses
                            ? setAutomotiveCourses(false)
                            : setAutomotiveCourses(true);
                        }
                      }}
                    />
                    <Form.Check
                      inline
                      label="Business Course"
                      name="Business Course"
                      type="checkbox"
                      className="contact-us-checkbox"
                      onChange={(e) => {
                        {
                          businessCourses
                            ? setBusinessCourses(false)
                            : setBusinessCourses(true);
                        }
                      }}
                    />
                    <Form.Check
                      inline
                      label="Building & Construction Courses"
                      name="Building & Construction Courses"
                      type="checkbox"
                      className="contact-us-checkbox"
                      onChange={(e) => {
                        {
                          bandcCourses
                            ? setBandcCourses(false)
                            : setBandcCourses(true);
                        }
                      }}
                    />
                    <Form.Check
                      inline
                      label="Community Service Courses"
                      name="Community Service Courses"
                      type="checkbox"
                      className="contact-us-checkbox"
                      onChange={(e) => {
                        {
                          communityServiceCourses
                            ? setCommunityServiceCourses(false)
                            : setCommunityServiceCourses(true);
                        }
                      }}
                    />
                    <Form.Check
                      inline
                      label="Health Course"
                      name="Health Course"
                      type="checkbox"
                      className="contact-us-checkbox"
                      onChange={(e) => {
                        {
                          healthCourses
                            ? setHealthCourses(false)
                            : setHealthCourses(true);
                        }
                      }}
                    />

                    <Form.Check
                      inline
                      label="GE Course"
                      name="GE Course"
                      type="checkbox"
                      className="contact-us-checkbox"
                      onChange={(e) => {
                        {
                          geCourses ? setGeCourses(false) : setGeCourses(true);
                        }
                      }}
                    />
                  </div>
                </Form.Group>
                <button
                  type="submit"
                  className="theme-btn"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                {submitSuccess ? (
                  <p className="success">Form Submitted Successfully</p>
                ) : null}
                {submitFailed ? (
                  <p className="failed">Form Submission Failed</p>
                ) : null}
              </Form>
            </Container>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default FormModalTwo;