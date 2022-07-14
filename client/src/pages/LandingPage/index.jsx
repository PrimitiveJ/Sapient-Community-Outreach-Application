
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

// Destructure css modules //
// styling
const {
    pageContainer, 
    logoGroup,
    introContainer, 
    logoLights,
    introBody,
    introHiddenContent
} = styles;

// animations
const {
    fadeInFocusTitle, 
    fadeInFocusIntro,
    fadeInLights,
    tweenHeightDown
} = anims;



// LandingPage component
const LandingPage = () => {

    // import global theme provider
    const { theme, setTheme } = useThemeContext();
    const introContainerRef = useRef();

    const startIntroAnimationSequence = () => {
        // introContainerRef.current.classList.add(tweenHeightDown);
        console.log(tweenHeightDown);
        console.log('done');
    }

    // run animations after component renders
    useEffect(() => {
        const introAnimationID = setTimeout(startIntroAnimationSequence, 5000);
        return () => clearTimeout(introAnimationID);
    }, []);


    // return page component
    return (
        <div className={pageContainer}>
            <div ref={introContainerRef} className={toClassName(introContainer, fadeInFocusIntro)}>

                <div className={introBody}>

                    <div className={logoGroup}>
                        <h1 className={fadeInFocusTitle}>Sapient</h1>
                        <img className="" src={images.brand.appLogo.base} alt=""/>
                        <img className={toClassName(logoLights, fadeInLights)} src={images.brand.appLogo.lights} alt=""/>
                    </div>
                    
                </div>
            </div>
        </div>
    );

}

export default LandingPage;
