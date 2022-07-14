
/*

    Page: Landing Page

    Purpose: Initial page rendered when user visits home URL. 
    Upon page load, logo and title fade in and then eventually loads
    the main page content which should include selling points
    of the application, and the login/signup buttons.


*/

// import native react modules
import React, { useRef, useEffect } from 'react';
import { useThemeContext } from '../../providers/ThemeProvider';

// import local css modules
import styles from './style.module.css';
import anims from './anims.module.css';

// import assets
import { images } from '../../assets';

// import utils
import { objectToClassName as toClassName } from '../../utils';

// import components
import Logo from '../../components/Logo';
import { Link } from 'react-router-dom';

// Destructure css modules //
// styling
const {
    pageContainer,
    pageHeader,
    logoGroup,
} = styles;

// animations
const {
    fadeInPageContainer,
} = anims;


// LandingPage component
// todo: only activate 'startMountAnimation' when being directed here from LandingPageIntro
const LandingPage = ({ loadWithAnim }) => {

    const pageContainerRef = useRef();

    const startMountAnimation = () => {
        pageContainerRef.current.classList.add(fadeInPageContainer);
    }

    useEffect(() => {
        const pageMountAnimId = setTimeout(startMountAnimation, 500);
        return () => clearTimeout(pageMountAnimId);
    }, []);

    // return page component
    return (
        <div ref={pageContainerRef} className={pageContainer}>
            <header className={pageHeader}>
                <Logo/>
                <h1>Empower your neighborhood</h1>
            </header>
        </div>
    );

}

export default LandingPage;
