
/*
    todo: update to new logo and add lights animation

    todo: promisify animations in the future for more efficient sequencing

    todo: clean up re-used css classes by making some class names global 

*/

import React, { useRef, useEffect } from 'react';

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
    logoGroup,
    introContainer, 
    logoLights,
    introBody,
    pageContainer
} = styles;

// animations
const {
    fadeInFocusTitle, 
    fadeInFocusIntro,
    fadeInLights,
    hideIntroLogo,
    fadeOutWelcomeTitle
} = anims;

// LandingPage component
const LandingPageIntro = ({ children }) => {

    // get intro page elements
    const introContainerRef = useRef();
    const introBodyRef = useRef();
    const welcomeTitleRef = useRef();
    const primaryTitleRef = useRef();
    const mottoTextRef = useRef();

    // start main introduction screen animation
    const startMountAnimation = () => {

        // begin intro animation
        introContainerRef.current.classList.add(fadeInFocusIntro);

        setTimeout(() => {
            primaryTitleRef.current.classList.add(fadeInFocusTitle);
        }, 1000);

        //close the intro screen
        setTimeout(() => {
            introBodyRef.current.classList.add(hideIntroLogo);
            welcomeTitleRef.current.classList.add(fadeOutWelcomeTitle);
        }, 3000);

        // wait for intro screen to close, then redirect
        setTimeout(() => {
            window.location = '/home'; // todo: use react router to naviage here instead
        }, 6000);
    }

    // const onIntroAnimationFinished = () => {

    // }

    // run animations after component renders
    useEffect(() => {
        const pageMountAnimId = setTimeout(startMountAnimation, 1000);
        return () => clearTimeout(pageMountAnimId);
    }, []);


    // return page component
    return (
        <div className={pageContainer}>
            <div ref={introContainerRef} className={introContainer}>
                <h2 ref={welcomeTitleRef}>Welcome</h2>

                <div ref={introBodyRef} className={introBody}>

                    <div className={logoGroup}>
                        <h1 ref={primaryTitleRef}>Sapient</h1>
                        <img className="" src={images.brand.appLogo.base} alt=""/>
                        {/* <img className={toClassName(logoLights, fadeInLights)} src={images.brand.appLogo.lights} alt=""/> */}
                        {/* <p ref={mottoTextRef}>Globally scoped, locally focused.</p> */}
                    </div>
                    
                </div>
            </div>
        </div>
    );

}

export default LandingPageIntro;







