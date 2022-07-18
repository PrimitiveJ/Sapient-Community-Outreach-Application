/*

    Page: Landing Page

    Purpose: Initial page rendered when user visits home URL. 
    Upon page load, logo and title fade in and then eventually loads
    the main page content which should include selling points
    of the application, and the login/signup buttons.


*/

// import native react modules
import React, { useRef, useEffect, useState } from "react";
// import { useSearchParams } from 'react-router-dom';
import { useThemeContext } from "../../providers/ThemeSelectionProvider";
import { Container, Row, Col } from "react-bootstrap";
// import { getIfNumber } from '../../utils';
import styled from "styled-components";

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

// Destructure css modules //
// animations
// const {
//     fadeInPageContainer,
// } = anims;

const StyledLandingPageBody = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  /* background-color: ${({ theme }) => theme.backgroundOne}; */
  background-color: #819984;
  /* border-left: 20px solid #49685e69;
    border-right: 20px solid #49685e69; */
  border-left: 20px solid #483922;
  border-right: 20px solid #483922;
`;

/*
    Page mount animation components
*/
const StyledIntroTransition = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  pointer-events: none;

  @keyframes slideUp {
    0% {
      top: 0;
    }
    100% {
      top: -50vh;
    }
  }

  @keyframes slideDown {
    0% {
      bottom: 0;
    }
    100% {
      bottom: -50vh;
    }
  }

  > div[data-side="bottom"],
  > div[data-side="top"] {
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
  }

  > div[data-side="bottom"] {
    bottom: 0;
    animation-name: slideDown;
  }

  > div[data-side="top"] {
    top: 0;
    animation-name: slideUp;
  }
`;

const StyledIntroSlide = styled.div`
  position: absolute;
  width: 100vw;
  height: 50vh;
  background-color: ${({ theme }) => theme.backgroundOne};
`;

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
const LandingPage = () => {
  // const [searchParams, setSearchParams] = useSearchParams();

  const { theme } = useThemeContext();
  const pageContainerRef = useRef();

  // get persistent state for loading the mount page animation
  const loadWithIntro = JSON.parse(localStorage.getItem("loadWithIntro"));

  // load landing page mount animations
  useEffect(() => {
    // after page renders, disable page intro animation until this value is toggled again
    localStorage.setItem("loadWithIntro", false);
  }, []);

  // return page component
  // todo: look into removing 'Container' and 'Row' components as they may be redundant
  return (
    // Main page container
    <StyledPageContainer
      ref={pageContainerRef}
      backgroundColor="backgroundOne"
      relative={false}
    >
      {/* conditionally render intro animation */}
      {loadWithIntro && <IntroTransition />}

      {/* use global styles */}
      <GlobalStyle />

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
            <Header />
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
