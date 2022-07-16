
/*
    todo: update to new logo and add lights animation

    todo: promisify animations in the future for more efficient sequencing

    todo: clean up re-used css classes by making some class names global 

*/

import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

// import local css modules
import anims from './anims.module.css';

// import components
import { StyledPageContainer } from '../../components/styles/StyledPageContainer.style';
import Logo from '../../components/Logo';

// Destructure css modules //
// animations
const {
    fadeInFocusTitle, 
    fadeInFocusIntro,
    fadeInLights,
    hideIntroLogo,
    fadeOutWelcomeTitle
} = anims;

const StyledIntroContainer = styled.div`

    opacity: 0;
    filter: blur(5px);
    width: 100vw;
    height: 100vh;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.backgroundOne};

    h2 {
        position: relative;
        top: -50px;
        font-family: 'Edu VIC WA NT Beginner', cursive;
        font-size: 3rem;
    }

    > div {
        position: relative;
        width: 25vw;
        min-width: 150px;
        height: 100%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

`

// LandingPage component
const LandingPageIntro = () => {

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
            window.location = '/home'; // todo: use react router to navigate here instead
        }, 6000);
    }

    // run animations after component renders
    useEffect(() => {
        const pageMountAnimId = setTimeout(startMountAnimation, 1000);
        return () => clearTimeout(pageMountAnimId);
    }, []);


    // return page component
    // todo: add 'light up' animation after logo renders
    return (
        // <div data-theme={defaultStaticTheme} className={toClassName(pageContainer, "theme-background-color-one")}>
        //     <div ref={introContainerRef} className={introContainer}>
        //         <h2 data-theme={defaultStaticTheme} ref={welcomeTitleRef} className={"theme-color-one"}>Welcome</h2>

        //         <div ref={introBodyRef} className={introBody}>

        //             <div className={toClassName(logoGroup, "priv-class")}>
        //                 <h1 ref={primaryTitleRef} data-theme={defaultStaticTheme} className="theme-color-two">Sapient</h1>
        //                 <img className="" src={images.brand.appLogo.base} alt=""/>
        //                 {/* <img className={toClassName(logoLights, fadeInLights)} src={images.brand.appLogo.lights} alt=""/> */}
        //                 {/* <p ref={mottoTextRef}>Globally scoped, locally focused.</p> */}
        //             </div>
                    
        //         </div>
        //     </div>
        // </div>
        <StyledPageContainer>
            <StyledIntroContainer ref={introContainerRef}>
                <h2 ref={welcomeTitleRef}>Welcome</h2>
                <div>
                    <Logo>

                    </Logo>
                </div>
            </StyledIntroContainer>
        </StyledPageContainer>
    );

}

export default LandingPageIntro;







