

import React from 'react';
import styled from 'styled-components';

import BackgroundImage from '../../../components/BackgroundImage';
import Logo from '../../../components/Logo';
import { StyledButton } from '../../../components/styles/StyledButton.style';

import { images } from '../../../assets';

const StyledHeader = styled.header`
    width: 100%;
    background-image: url(${({ backgroundImage }) => backgroundImage});
    background-size: cover;
    background-position: center;
    padding-bottom: 20px;

    .headerLogo {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .reg-btn {
        /* color: blue; */
        font-weight: 700;
    }

    .registerButtonContainer {
        margin-top: 50px;
        margin-bottom: 10px;
        display: flex;
        gap: 1rem;
        justify-content: center;
    }

    h1 {
        font-family: 'Edu VIC WA NT Beginner', cursive;
        color: ${({theme}) => theme.textColorFour};
        font-size: 3rem;
    }
`

const Header = () => {
    return (
        <StyledHeader>
            <div className="headerLogo">
                <Logo size="200px" padding="15px"/>
                <h1>Sapient</h1>
            </div>
            <div className="registerButtonContainer">
                <StyledButton className="reg-btn">Login</StyledButton>
                <StyledButton className="reg-btn">Sign Up</StyledButton>
            </div>
        </StyledHeader>
    );
}

export default Header;
