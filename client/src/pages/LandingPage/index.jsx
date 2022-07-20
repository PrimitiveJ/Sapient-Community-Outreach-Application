/*

    Page: Landing Page

    Purpose: Initial page rendered when user visits home URL. 
    Upon page load, logo and title fade in and then eventually loads
    the main page content which should include selling points
    of the application, and the login/signup buttons.


*/

// import native react modules
import { useQuery, useMutation } from '@apollo/client';
import React, { useRef, useEffect, useState } from "react";
import { useThemeContext } from "../../providers/ThemeSelectionProvider";
import { Container, Row, Col } from "react-bootstrap";

// import local css modules
// import anims from './anims.module.css';

// import assets
import { images } from "../../assets";

// import components
// import Logo from '../../components/Logo';
// import { Link } from 'react-router-dom';
import BackgroundImage from "../../components/BackgroundImage";
import Header from "./Header";
import { StyledPageContainer } from "../../components/styles/StyledPageContainer.style";
import GlobalStyle from "../../components/styles/GlobalStyle.style";
import Navbar from "./Navbar";
import AboutUsPage from "./AboutUsPage";
import ContactPage from "./ContactPage";
import MissionPage from "./MissionPage";
import Footer from "./Footer";
import StyledLandingPageBody from "./page-body.style";

import {
  StyledIntroTransition,
  StyledIntroSlide
 } from "./intro-anim.style";

const IntroTransition = () => {
  return (
    <StyledIntroTransition>
      <StyledIntroSlide data-side="top" />
      <StyledIntroSlide data-side="bottom" />
    </StyledIntroTransition>
  );
};

// LandingPage component
// todo: only activate 'startMountAnimation' when being directed here from LandingPageIntro
// todo: figure out why this component is loading twice on page load
const LandingPage = ({ prompt }) => {
  // const [searchParams, setSearchParams] = useSearchParams();
  const { theme } = useThemeContext();
  const pageContainerRef = useRef();

  // get persistent state for loading the mount page animation
  const loadWithIntro = JSON.parse(localStorage.getItem("loadWithIntro"));

  // load landing page mount animations
  useEffect(() => {
    // after page renders, disable page intro animation until this value is toggled again
    localStorage.setItem("loadWithIntro", false);
    console.log('loaded');
  }, []);

  // return page component
  return (
    // Main page container
    <StyledPageContainer
      ref={pageContainerRef}
      backgroundColor="backgroundOne"
      relative={false}
    >
      {/* conditionally render intro animation */}
      {loadWithIntro && <IntroTransition />}

      {/* Page container background */}
      <BackgroundImage
        opacity="0.5"
        backgroundColor="white"
        image={images.backgrounds.landingPageHeader}
      />

      <Container
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Col xl={9} lg={9} sm={12}>
          <StyledLandingPageBody>
            <Header prompt={prompt}/>
            <Navbar>
              <AboutUsPage nav="about" />
              <ContactPage nav="contact" />
              <MissionPage nav="mission" />
            </Navbar>
          </StyledLandingPageBody>
        </Col>
      </Container>
      <Footer />
    </StyledPageContainer>
  );
};

export default LandingPage;
