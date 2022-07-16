
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
import {Logo, StyledLogoContainer} from '../../components/Logo';

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

    h1 {
        opacity: 0;
        text-align: center;
        /* position: absolute; */
        width: 100%;
        /* height: 1vw; */
        top: 1vw;
        position: absolute;
        z-index: 2;
        font-size: 4.2vw;
        color: ${({theme}) => theme.textColorTwo};
        text-shadow: 3px 3px #12361a;
        font-family: 'Edu NSW ACT Foundation', cursive;
    }

    @media screen and (max-width: 752px) {
        h1 {
            font-size: 30px;
            top: 5px;
        }
    }

    h2 {
        position: relative;
        top: -50px;
        font-family: 'Edu VIC WA NT Beginner', cursive;
        font-size: 3rem;
        color: ${({theme}) => theme.textColorOne};
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

    .introLogo {
        --size: 20vw;
        --min-size: 150px;

        width: var(--size);
        height: var(--size);
        min-width: var(--min-size);
        min-height: var(--min-size);

        margin-bottom: 75px;
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
        }, 1500);

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
    // todo: look into method for styled-component altering
    return (
        <StyledPageContainer>
            <StyledIntroContainer ref={introContainerRef}>
                <h2 ref={welcomeTitleRef}>Welcome</h2>
                <div ref={introBodyRef}>
                    <Logo className="introLogo">
                        <h1 ref={primaryTitleRef}>Sapient</h1>
                    </Logo>
                </div>
            </StyledIntroContainer>
        </StyledPageContainer>
    );

}

export default LandingPageIntro;







