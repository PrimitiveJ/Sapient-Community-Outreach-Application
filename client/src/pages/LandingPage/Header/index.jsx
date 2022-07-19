

import React, { useState } from 'react';
import styled from 'styled-components';

import auth from '../../../utils/auth';

// import BackgroundImage from '../../../components/BackgroundImage';
import {Logo} from '../../../components/Logo';
import { StyledRoundButton } from '../../../components/styles/StyledButton.style';
import { Container, Row, Col } from 'react-bootstrap';
import RegisterModal from '../RegisterModal';
import LoginModal from '../LoginModal';

// import { images } from '../../../assets';

const StyledHeader = styled.header`
    width: 100%;
    background-image: url(${({backgroundImage}) => backgroundImage});
    background-size: cover;
    background-position: center;
    padding-bottom: 20px;

    .headerLogo {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: 'Edu VIC WA NT Beginner', cursive;
    }

    .registerButtonContainer {
        margin-top: 50px;
        margin-bottom: 10px;
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
    }

    .signupBtn,
    .loginBtn {
        font-weight: 700;
        background: none;
        box-shadow: 0 0 5px black;
        transition: background-color 0.5s;
    }

    .signupBtn {
        text-decoration: underline;
    }

    .loginBtn {
        background-color: #6f9674;
    }

    .registerBtn:hover {
        background-color: ${({theme}) => theme.themeEight};
    }

    h1 {
        font-family: inherit;
        color: ${({theme}) => theme.textColorFour};
        font-size: 3rem;
        margin-bottom: 10px;
    }

    .headerLogo p {
        font-family: inherit;
        text-align: center;
    }
`

const Header = () => {

    /*
        Modal active states:
            * none: no modals are visible
            * register: register modal is visible
            * login: login modal is visible
    */
    const [activeModal, setActiveModal] = useState('none');

    // login state
    const [isLoggedIn, setLoggedIn] = useState(auth.loggedIn());


    // handlers
    const hideModal = () => setActiveModal('none');
    const showLoginModal = () => setActiveModal('login');
    const showRegisterModal = () => setActiveModal('register');

    // !debug
    console.log('is logged in: ', isLoggedIn);

    return (
        <StyledHeader>
            <div className="headerLogo">
                <Logo size="200px" padding="15px"/>
                <h1>Sapient</h1>
                <Col lg={4} md={6} xs={12}>
                    <p>Globally scoped, locally focused. Because compassion is in our DNA.</p>
                </Col>
            </div>
            {
                isLoggedIn ? <button>Logout</button> :
                <div className="registerButtonContainer">
                    <StyledRoundButton onClick={showLoginModal} className="registerBtn loginBtn">Login</StyledRoundButton>
                    <StyledRoundButton onClick={showRegisterModal} className="registerBtn signupBtn">Sign Up</StyledRoundButton>
                </div>
            }
            <RegisterModal modalActive={activeModal === 'register'} hideModal={hideModal}/>
            <LoginModal modalActive={activeModal === 'login'} hideModal={hideModal} setLoggedIn={setLoggedIn}/>
        </StyledHeader>
    );
}

export default Header;
