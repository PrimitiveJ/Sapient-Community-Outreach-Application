
/*

    Page: Landing Page

    Purpose: Initial page rendered when user visits home URL. 
    Upon page load, logo and title fade in and then eventually loads
    the main page content which should include selling points
    of the application, and the login/signup buttons.


*/

// import native react modules
import React, { useRef, useEffect } from 'react';
import { useThemeContext } from '../../providers/ThemeSelectionProvider';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

// import local css modules
import anims from './anims.module.css';

// import assets
import { images } from '../../assets';

// import components
import Logo from '../../components/Logo';
import { Link } from 'react-router-dom';
import BackgroundImage from '../../components/BackgroundImage';
import Header from './Header';
import { StyledPageContainer } from '../../components/styles/StyledPageContainer.style';

// Destructure css modules //
// animations
const {
    fadeInPageContainer,
} = anims;

const StyledLandingPageBody = styled.div`
    width: 100%;
    min-height: 100vh;
    margin-left: auto;
    margin-right: auto;
    background-color: ${({theme}) => theme.backgroundOne};
`

// LandingPage component
// todo: only activate 'startMountAnimation' when being directed here from LandingPageIntro
const LandingPage = ({ loadWithAnim }) => {

    const { theme } = useThemeContext();
    const pageContainerRef = useRef();

    // on page load animations
    const startMountAnimation = () => {
        pageContainerRef.current.classList.add(fadeInPageContainer);
    }

    // load landing page mount animations
    useEffect(() => {
        const pageMountAnimId = setTimeout(startMountAnimation, 500);
        return () => clearTimeout(pageMountAnimId);
    }, []);

    // return page component
    return (
        // Main page container
        <StyledPageContainer 
        ref={pageContainerRef}
        position="relative">
            
            {/* Page container background */}
            <BackgroundImage 
            opacity="0.5" 
            image={images.backgrounds.landingPageHeader}>

                {/* Bootstrap container */}
                <Container>
                    <Row style={{justifyContent: 'center'}}>
                        <Col xl={8} lg={9} >
                            <StyledLandingPageBody>
                               <Header/>
                            </StyledLandingPageBody>
                        </Col>
                    </Row>

                </Container>

            </BackgroundImage>
        </StyledPageContainer>
    );

}

export default LandingPage;
