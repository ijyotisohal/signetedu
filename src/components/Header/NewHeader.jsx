import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTranslations } from '../../actions/languageActions';
import { useEffect } from "react";
import Loading from '../loading/Loading';
import FormModal from '../../elements/FormModal';
function NewHeader() {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.language.selectedLanguage);
  const translations = useSelector((state) => state.language.translations[selectedLanguage]);
  
  useEffect(() => {
    dispatch(fetchTranslations(selectedLanguage));
  }, [dispatch, selectedLanguage]);
  
  if (!translations) {
    return <div><Loading/></div>; // Show loading state while translations are being fetched
  }
  
  const { header } = translations;
  return (
    <header class="eduvibe-elementor-header-wrapper elementor-header-1-by-daljit-6318">
      <div class="eduvibe-header-container">
        <div class="eduvibe-sticky-header-wrapper eduvibe-header-sticky">
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#"><Link
          to="/"
          data-elementor-open-lightbox=""
          class="elementor-clickable"
        >
          <img
            alt="Signet institute Logo"
            src="/logo.png"
            className='logo-img'
          />
        </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
           
            navbarScroll
          >
             <div class="eduvibe-nav-menu-wrapper eduvibe-header-area eduvibe-navbar-expand-lg eduvibe-elementor-nav-menu-wrapper">
          <nav class="main-navigation eduvibe-navbar-collapse eduvibe-elementor-nav">
            <ul
              id="menu-1-3cb1353"
              class="eduvibe-navbar-nav eduvibe-navbar-right nav-menu eduvibe-nav-ul-wrapper"
            >
              <li
                itemscope="itemscope"
                itemtype="https://www.schema.org/SiteNavigationElement"
                id="menu-item-9364"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-9338 current_page_item nav-item menu-item-9364 active"
              >
                <Link
                  class="nav-link"
                  to="/"
                >
                 {header.home}
                
                </Link>
              </li>
              <li
                itemscope="itemscope"
                itemtype="https://www.schema.org/SiteNavigationElement"
                id="menu-item-9393"
                class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-9393"
              >
                <Link
                  class="nav-link"
                  to="/about-us"
                >
                  {header.about}
                </Link>
              </li>
              <li
                itemscope="itemscope"
                itemtype="https://www.schema.org/SiteNavigationElement"
                id="menu-item-9784"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nav-item menu-item-9784 dropdown"
              >
                <Link
                  class="nav-link"
                  to="/courses"
                  aria-haspopup="true"
                >
                 {header.courses}
                </Link>
                <ul role="menu" class=" eduvibe-dropdown-menu">
                  <li
                    itemscope="itemscope"
                    itemtype="https://www.schema.org/SiteNavigationElement"
                    id="menu-item-9381"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nav-item menu-item-9381 eduvibe-dropdown-submenu"
                  >
                    <Link
                      class="nav-link"
                      to="/automotive-courses/"
                    >
                      {header.automotive}
                    </Link>
                    <ul
                      role="menu"
                      class=" eduvibe-dropdown-menu"
                    >
                      <li
                        itemscope="itemscope"
                        itemtype="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-9394"
                        class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-9394"
                      >
                        <Link
                          class="nav-link"
                          to="/automotive-courses/certificate-iii-light-vehicle-mechanical-technology/"
                        >
                          {header.automotiveOne}
                        </Link>
                      </li>
                      <li
                        itemscope="itemscope"
                        itemtype="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-9786"
                        class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-9786"
                      >
                        <Link
                          class="nav-link"
                          to="/automotive-courses/certificate-iii-automotive-diesel-engine-technology/"
                        >
                       {header.automotiveTwo}
                        </Link>
                      </li>
                      <li
                        itemscope="itemscope"
                        itemtype="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-9785"
                        class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-9785"
                      >
                        <Link
                          class="nav-link"
                          to="/automotive-courses/certificate-iv-in-automotive-mechanical-diagnosis/"
                        >
                       {header.automotiveThree}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    itemscope="itemscope"
                    itemtype="https://www.schema.org/SiteNavigationElement"
                    id="menu-item-9383"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nav-item menu-item-9383 eduvibe-dropdown-submenu"
                  >
                    <Link
                      class="nav-link"
                      to="/business-courses/"
                    >
                     {header.business}
                    </Link>
                    <ul
                      role="menu"
                      class=" eduvibe-dropdown-menu"
                    >
                      <li
                        itemscope="itemscope"
                        itemtype="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-10102"
                        class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-10102"
                      >
                        <Link
                          class="nav-link"
                          to="/business-courses/diploma-of-leadership-and-management/"
                        >
                         {header.businessOne}
                        </Link>
                      </li>
                      <li
                        itemscope="itemscope"
                        itemtype="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-10103"
                        class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-10103"
                      >
                        <Link
                          class="nav-link"
                          to="/business-courses/advanced-diploma-of-leadership-and-management/"
                        >
                          {header.businessTwo}
                        </Link>
                      </li>
                      <li
                        itemscope="itemscope"
                        itemtype="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-10104"
                        class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-10104"
                      >
                        <Link
                          class="nav-link"
                          to="/business-courses/graduate-diploma-of-management/"
                        >
                         {header.businessThre}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    itemscope="itemscope"
                    itemtype="https://www.schema.org/SiteNavigationElement"
                    id="menu-item-9382"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nav-item menu-item-9382 eduvibe-dropdown-submenu"
                  >
                    <Link
                      class="nav-link"
                      to="/construction-courses/"
                    >
                      {header.building}
                    </Link>
                    <ul
                      role="menu"
                      class=" eduvibe-dropdown-menu"
                    >
                      <li
                        itemscope="itemscope"
                        itemtype="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-10105"
                        class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-10105"
                      >
                        <Link
                          class="nav-link"
                          to="/construction-courses/certificate-iii-wall-floor-tiling/"
                        >
                         {header.buldingOne}
                        </Link>
                      </li>
                      <li
                        itemscope="itemscope"
                        itemtype="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-10106"
                        class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-10106"
                      >
                        <Link
                          class="nav-link"
                          to="/construction-courses/certificate-iii-bricklaying-block-laying/"
                        >
                          {header.buildingTwo}
                        </Link>
                      </li>
                      <li
                        itemscope="itemscope"
                        itemtype="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-10107"
                        class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-10107"
                      >
                        <Link
                          class="nav-link"
                          to="/construction-courses/diploma-of-building-construction/"
                        >
                          {header.buildingThree}
                        </Link>
                      </li>
                      <li
                        itemscope="itemscope"
                        itemtype="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-10108"
                        class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-10108"
                      >
                        <Link
                          class="nav-link"
                          to="/construction-courses/advanced-diploma-of-civil-construction-design/"
                        >
                          {header.buildingFour}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    itemscope="itemscope"
                    itemtype="https://www.schema.org/SiteNavigationElement"
                    id="menu-item-9384"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nav-item menu-item-9384 eduvibe-dropdown-submenu"
                  >
                    <Link
                      class="nav-link"
                      to="/community-courses/"
                    >
                      {header.community}
                    </Link>
                    <ul
                      role="menu"
                      class=" eduvibe-dropdown-menu"
                    >
                      <li
                        itemscope="itemscope"
                        itemtype="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-10109"
                        class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-10109"
                      >
                        <Link
                          class="nav-link"
                          to="/community-courses/certificate-iii-in-individual-support/"
                        >
                         {header.communityOne}
                        </Link>
                      </li>
                      <li
                        itemscope="itemscope"
                        itemtype="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-10110"
                        class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-10110"
                      >
                        <Link
                          class="nav-link"
                          to="/community-courses/certificate-iv-in-ageing-support/"
                        >
                         {header.communityTwo}
                        </Link>
                      </li>
                      <li
                        itemscope="itemscope"
                        itemtype="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-10111"
                        class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-10111"
                      >
                        <Link
                          class="nav-link"
                          to="/community-courses/certificate-iv-in-disability-support/"
                        >
                          {header.communityThree}
                        </Link>
                      </li>
                      <li
                        itemscope="itemscope"
                        itemtype="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-10112"
                        class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-10112"
                      >
                        <Link
                          class="nav-link"
                          to="/community-courses/diploma-of-community-services/"
                        >
                          {header.communityFour}
                        </Link>
                      </li>
                      <li
                        itemscope="itemscope"
                        itemtype="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-10113"
                        class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-10113"
                      >
                        <Link
                          class="nav-link"
                          to="/community-courses/diploma-of-mental-health/"
                        >
                          {header.communityFive}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    itemscope="itemscope"
                    itemtype="https://www.schema.org/SiteNavigationElement"
                    id="menu-item-9386"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nav-item menu-item-9386 eduvibe-dropdown-submenu"
                  >
                    <Link
                      class="nav-link"
                      to="/manufacturing-and-engineering/"
                    >
                      {header.fabrication}
                    </Link>
                    <ul
                      role="menu"
                      class=" eduvibe-dropdown-menu"
                    >
                      <li
                        itemscope="itemscope"
                        itemtype="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-10116"
                        class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-10116"
                      >
                        <Link
                          class="nav-link"
                          to="/manufacturing-and-engineering/certificate-iii-in-engineering-fabrication-trade/"
                        >
                       {header.fabricationOne}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    itemscope="itemscope"
                    itemtype="https://www.schema.org/SiteNavigationElement"
                    id="menu-item-9386"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nav-item menu-item-9386 eduvibe-dropdown-submenu"
                  >
                    <Link
                      class="nav-link"
                      to="/general-english/"
                    >
                      {header.general}
                    </Link>
                    <ul
                      role="menu"
                      class=" eduvibe-dropdown-menu"
                    >
                      <li
                        itemscope="itemscope"
                        itemtype="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-10116"
                        class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-10116"
                      >
                        <Link
                          class="nav-link"
                          to="/general-english/general-english-elementary-to-advanced/"
                        >
                       {header.generalOne}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    itemscope="itemscope"
                    itemtype="https://www.schema.org/SiteNavigationElement"
                    id="menu-item-9385"
                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nav-item menu-item-9385 eduvibe-dropdown-submenu"
                  >
                    <Link
                      class="nav-link"
                      to="/healthcare-courses/"
                    >
                      {header.health}
                    </Link>
                    <ul
                      role="menu"
                      class=" eduvibe-dropdown-menu"
                    >
                      <li
                        itemscope="itemscope"
                        itemtype="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-10114"
                        class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-10114"
                      >
                        <Link
                          class="nav-link"
                          to="/healthcare-courses/certificate-iii-in-pathology-collection/"
                        >
                     {header.healthOne}
                        </Link>
                      </li>
                      <li
                        itemscope="itemscope"
                        itemtype="https://www.schema.org/SiteNavigationElement"
                        id="menu-item-10115"
                        class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-10115"
                      >
                        <Link
                          class="nav-link"
                          to="/healthcare-courses/diploma-of-dental-technology/"
                        >
                         {header.healthTwo}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  
               
                </ul>
              </li>
              <li
                itemscope="itemscope"
                itemtype="https://www.schema.org/SiteNavigationElement"
                id="menu-item-9369"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item menu-item-9369 dropdown"
              >
                <Link
                  class="nav-link"
                  to="#"
                  aria-haspopup="true"
                >
                  {header.currentStudents}
                </Link>
                <ul role="menu" class=" eduvibe-dropdown-menu">
                  <li
                    itemscope="itemscope"
                    itemtype="https://www.schema.org/SiteNavigationElement"
                    id="menu-item-9387"
                    class="menu-item menu-item-type-custom menu-item-object-custom nav-item menu-item-9387"
                  >
                    <Link
                      class="nav-link"
                      target="_blank"
                      to="https://signet.instructure.com/"
                    >
                      {header.CanvasLMs}
                    </Link>
                  </li>
                  <li
                    itemscope="itemscope"
                    itemtype="https://www.schema.org/SiteNavigationElement"
                    id="menu-item-9389"
                    class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-9389"
                  >
                    <Link
                      class="nav-link"
                      to="/forms/"
                    >
                    {header.Form}
                    </Link>
                  </li>
                  <li
                    itemscope="itemscope"
                    itemtype="https://www.schema.org/SiteNavigationElement"
                    id="menu-item-9392"
                    class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-9392"
                  >
                    <Link
                      class="nav-link"
                      to="/policies-and-procedures/"
                    >
                   {header.PoliciesandProcedures}
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                itemscope="itemscope"
                itemtype="https://www.schema.org/SiteNavigationElement"
                id="menu-item-9370"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item menu-item-9370 dropdown"
              >
                <Link
                  class="nav-link"
                  to="#"
                  aria-haspopup="true"
                >
                 {header.futureStudents}
                </Link>
                <ul role="menu" class=" eduvibe-dropdown-menu">
                  <li
                    itemscope="itemscope"
                    itemtype="https://www.schema.org/SiteNavigationElement"
                    id="menu-item-9398"
                    class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-9398"
                  >
                    <Link
                      class="nav-link"
                      to="/australian-lifestyle/"
                    >
                  {header.australianlifestyle}
                    </Link>
                  </li>
                  {/* <li
                    itemscope="itemscope"
                    itemtype="https://www.schema.org/SiteNavigationElement"
                    id="menu-item-9399"
                    class="menu-item menu-item-type-custom menu-item-object-custom nav-item menu-item-9399"
                  >
                    <Link
                      class="nav-link"
                      target="_blank"
                      to="https://www.homestaynetwork.org/acfe-students/"
                    >
                      {header.homestay}
                    </Link>
                  </li> */}
                </ul>
              </li>
              <li
                itemscope="itemscope"
                itemtype="https://www.schema.org/SiteNavigationElement"
                id="menu-item-9371"
                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nav-item menu-item-9371 dropdown"
              >
                <Link
                  class="nav-link"
                  to="#"
                  aria-haspopup="true"
                >
                  {header.agents}
                </Link>
                <ul role="menu" class=" eduvibe-dropdown-menu">
                  <li
                    itemscope="itemscope"
                    itemtype="https://www.schema.org/SiteNavigationElement"
                    id="menu-item-10190"
                    class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-10190"
                  >
                    <Link
                      class="nav-link"
                      to="/agent-application-form/"
                    >
                    {header.AgentApplicationForm}
                    </Link>
                  </li>
                  {/* <li
                    itemscope="itemscope"
                    itemtype="https://www.schema.org/SiteNavigationElement"
                    id="menu-item-10192"
                    class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-10192"
                  >
                    <Link
                      class="nav-link"
                      to="/agent-list/"
                    >
                    {header.AgentList}
                    </Link>
                  </li> */}
                </ul>
              </li>
              <li
                itemscope="itemscope"
                itemtype="https://www.schema.org/SiteNavigationElement"
                id="menu-item-9368"
                class="menu-item menu-item-type-post_type menu-item-object-page nav-item menu-item-9368"
              >
                <Link
                  class="nav-link"
                  to="/contact-us/"
                >
                 {header.ContactUs}
                </Link>
              </li>
              <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9368">
              <a href="tel:
130+610223312"> 1300 223 312</a>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9368 nav-modal">
                <FormModal/>
                </li>
                
            </ul>
          </nav>
          <div class="eduvibe-default-header-mobile-navbar eduvibe-mobile-menu">
            <div class="eduvibe-elementor-mobile-menu-overlay"></div>
            <div class="eduvibe-elementor-mobile-hamburger-menu">
              <Link to="javascript:void(0);">
                <svg
                  aria-hidden="true"
                  class="e-font-icon-svg e-fas-bars"
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                </svg>
              </Link>
            </div>
            <div class="eduvibe-mobile-menu-nav-wrapper eduvibe-elementor-mobile-menu-nav-wrapper">
              <div class="eduvibe-elementor-mobile-menu-close">
                <Link to="javascript:void(0);">
                  <svg
                    aria-hidden="true"
                    class="e-font-icon-svg e-fas-times"
                    viewBox="0 0 352 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                  </svg>
                </Link>
              </div>
              <ul
                id="eduvibe-elementor-mobile-menu-item"
                class="eduvibe-elementor-mobile-menu-item metismenu"
              >
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-9338 current_page_item menu-item-9364">
                  <Link
                    to="/"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9393">
                  <Link to="/about-us/">
                    About Us
                  </Link>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-9784">
                  <Link to="/courses/">
                    Courses
                  </Link>
                  <ul class="sub-menu mm-collapse">
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-9381">
                      <Link to="/automotive-courses/">
                        Automotive Courses
                      </Link>
                      <ul class="sub-menu mm-collapse">
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9394">
                          <Link to="/certificate-iii-in-light-vehicle-mechanical-technology/">
                            Certificate III in Light Vehicle
                            Mechanical Technology
                          </Link>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9786">
                          <Link to="/certificate-iii-in-automotive-diesel-engine-technology/">
                            Certificate III in Automotive Diesel
                            Engine Technology
                          </Link>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9785">
                          <Link to="/certificate-iv-in-automotive-mechanical-diagnosis/">
                            Certificate IV in Automotive
                            Mechanical Diagnosis
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-9383">
                      <Link to="/business-courses/">
                        Business Course
                      </Link>
                      <ul class="sub-menu mm-collapse">
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10102">
                          <Link to="/diploma-of-leadership-and-management/">
                            Diploma of Leadership and Management
                          </Link>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10103">
                          <Link to="/advanced-diploma-of-leadership-and-management/">
                            Advanced Diploma of Leadership and
                            Management
                          </Link>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10104">
                          <Link to="/diploma-of-management-learning/">
                            Graduate Diploma of Management
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-9382">
                      <Link to="/building-construction-courses/">
                        Building &amp; Construction Courses
                      </Link>
                      <ul class="sub-menu mm-collapse">
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10105">
                          <Link to="/cpc31320-certificate-iii-in-wall-and-floor-tiling/">
                            Certificate III Wall &amp; Floor
                            Tiling
                          </Link>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10106">
                          <Link to="/cpc33020-certificate-iii-in-bricklaying-blocklaying/">
                            Certificate III Bricklaying &amp;
                            Blocklaying
                          </Link>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10107">
                          <Link to="/diploma-of-building-and-construction/">
                            Diploma of Building &amp;
                            Construction
                          </Link>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10108">
                          <Link to="/advanced-diploma-of-civil-construction-design/">
                            Advanced Diploma of Civil
                            Construction &amp; Design
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-9384">
                      <Link to="/community-service-courses/">
                        Community Service Courses
                      </Link>
                      <ul class="sub-menu mm-collapse">
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10109">
                          <Link to="/certificate-iii-in-individual-support/">
                            Certificate III in Individual
                            Support
                          </Link>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10110">
                          <Link to="/chc43015-certificate-iv-in-ageing-support/">
                            Certificate IV in Ageing Support
                          </Link>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10111">
                          <Link to="/certificate-iv-in-disability-support/">
                            Certificate IV in Disability Support
                          </Link>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10112">
                          <Link to="/diploma-of-community-services/">
                            Diploma of Community Services
                          </Link>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10113">
                          <Link to="/diploma-of-mental-health/">
                            Diploma of Mental Health
                          </Link>
                        </li>
                      </ul>
                    </li>
                   
                   
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-9386">
                      <Link to="/ge-course/">
                        GE Course
                      </Link>
                      <ul class="sub-menu mm-collapse">
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10116">
                          <Link to="/general-english-elementary-to-advanced/">
                            General English (Elementary To
                            Advanced)
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-9385">
                      <Link to="/healthcare-courses/">
                        Health Courses
                      </Link>
                      <ul class="sub-menu mm-collapse">
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10114">
                          <Link to="/certificate-iii-in-pathology-collection/">
                            Certificate III in Pathology
                            Collection
                          </Link>
                        </li>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10115">
                          <Link to="/diploma-of-dental-technology/">
                            Diploma of Dental Technology
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-9369">
                  <Link to="#">Current Students</Link>
                  <ul class="sub-menu mm-collapse">
                    <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-9387">
                      <Link
                        target="_blank"
                        rel="noopener"
                        to="https://signet.instructure.com/"
                      >
                        Canvas LMS
                      </Link>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9389">
                      <Link to="/forms/">
                        Forms
                      </Link>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9392">
                      <Link to="/policies-procedures/">
                        Policies and Procedures
                      </Link>
                    </li>
                  </ul>
                </li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-9370">
                  <Link to="#">Future Students</Link>
                  <ul class="sub-menu mm-collapse">
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9398">
                      <Link to="/australian-lifestyle/">
                        Australian Lifestyle
                      </Link>
                    </li>
                    <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-9399">
                      <Link
                        target="_blank"
                        rel="noopener"
                        to="https://www.homestaynetwork.org/acfe-students/"
                      >
                        Homestay
                      </Link>
                    </li>
                  </ul>
                </li>
                <li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-9371">
                  <Link to="#">Agents</Link>
                  <ul class="sub-menu mm-collapse">
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10190">
                      <Link to="/agent-application-form/">
                        Agent Application Form
                      </Link>
                    </li>
                    <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10192">
                      <Link to="/agent-list/">
                        Agent List
                      </Link>
                    </li>
                  </ul>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9368">
                  <Link to="/contact-us/">
                    Contact Us
                  </Link>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9368">
                  <Link to="/contact-us/">
                    Contact Us
                  </Link>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9368">
                  <Link to="/contact-us/">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>{" "}
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </div>
    </header>
  );
}

export default NewHeader;