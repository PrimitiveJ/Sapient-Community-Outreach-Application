

import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledRoundButton, StyledDefaultButton } from '../../../components/styles/StyledButton.style';
// import { Container, Row, Col } from 'react-bootstrap';

const StyledNavbarContainer = styled.nav`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* background-color: #445e50; */
    background-color: #483922;
    position: sticky;
    top: 0;
    z-index: 2; /* ? might be able to replace this with position relative instead */

    button {
        background-color: #4c764e;
        padding: 20px;
        font-size: 1rem;
        color: white;
        font-weight: 900;
        transition: background-color 0.5s;
        font-family: 'Edu VIC WA NT Beginner', cursive;
    }

    button:hover {
        background-color: #3d5e3e;
    }

    button[data-state="active"] {
        background-color: #7da57d;
    }

    @media screen and (max-width: 574px) {
        background-color: #4c764e;
    }
`

const StyledContentContainer = styled.div`
    /* margin-top: 70px; */
    margin-left: 10px;
    margin-right: 10px;
    /* margin-bottom: 100px; */
    padding: 20px;
    overflow: hidden;
    /* font-family: 'Edu SA Beginner', cursive; */
    font-family: 'Josefin Sans', sans-serif;

    @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }

    @keyframes slideIn {
        0% { left: -100%; }
        100% { left: 0; }
    }

    > div {
        margin-top: 50px;
        margin-bottom: 50px;
        position: relative;
        left: -100%;
        opacity: 0;

        animation: fadeIn 0.5s linear forwards,
            slideIn 0.25s ease-out forwards;
    }

    h2 {
        text-align: center;
        font-family: 'Edu VIC WA NT Beginner', cursive;
        font-size: 2.1rem;
        color: #3b473d;
        margin-bottom: 2rem;
        font-weight: 900;
    }

    .centerText {
        margin-left: auto;
        margin-right: auto;
    }

    .centerText > * {
        margin-bottom: 25px;
    }

    .centerText p {
        color: white;
        font-weight: 600;
        font-size: 1.4rem;
        text-align: center;
        letter-spacing: 1px;
    }
`

const Navbar = ({children}) => {
    const navLinkData = [
        ['about', 'About Us'],
        ['contact', 'Contact'],
        ['mission', 'Our Mission']
    ];

    const [currentLink, setCurrentLink] = useState('about');

    return (
        <>
            <StyledNavbarContainer>
                {navLinkData.map(([linkState, linkName]) => {
                    return <StyledDefaultButton 
                        key={linkState}
                        onClick={() => setCurrentLink(linkState)}
                        data-state={linkState === currentLink ? 'active' : 'inactive'}>
                            {linkName}
                        </StyledDefaultButton>
                })}
            </StyledNavbarContainer>
            <StyledContentContainer>
                {children.map(child => child.props.nav === currentLink && child)}
            </StyledContentContainer>
        </>
    );
}

export default Navbar;
