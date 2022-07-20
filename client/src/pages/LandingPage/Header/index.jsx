import React, { useState } from "react";
import auth from '../../../utils/auth';

// import BackgroundImage from '../../../components/BackgroundImage';
import { Logo } from "../../../components/Logo";
import { StyledRoundButton } from "../../../components/styles/StyledButton.style";
import { Container, Row, Col } from "react-bootstrap";
import RegisterUserModal from "../RegisterUserModal";
import RegisterOtherModal from "../RegisterOtherModal";
import LoginModal from "../LoginModal";
import LocalStyles from "./local.styles";


const Header = () => {
    /*
        Modal active states:
            * none: no modals are visible
            * registerUser: (if) user is logged out
            * registerOther: (if) user is logged in
            * login: login modal is visible (if) user is logged out
    */
    const [registerType, setRegisterType] = useState('none');
    const hideModal = () => setRegisterType('none');

    const handleLogout = () => {
      auth.logout();
      window.location.assign('/home');
    }

    return (
        <LocalStyles>
            <div className="headerLogo">
                <Logo size="200px" padding="15px"/>
                <h1>Sapient</h1>
                <Col lg={4} md={6} xs={12}>
                    <p>Globally scoped, locally focused. Because compassion is in our DNA.</p>
                </Col>
            </div>
            {
                // (if) user is logged in
                auth.loggedIn() 
                ? <div className="registerButtonContainer">

                    {/* Logout button */}
                    <StyledRoundButton 
                    onClick={handleLogout} 
                    className="registerBtn logoutBtn">
                      Logout
                    </StyledRoundButton>

                    {/* Register as business/organizer button */}
                    <StyledRoundButton 
                    onClick={() => setRegisterType('registerOther')} 
                    className="registerBtn signupBtn">
                      Register
                    </StyledRoundButton>
                  </div> 

                // (if) user is NOT logged in
                : <div className="registerButtonContainer">

                    {/* Login button */}
                    <StyledRoundButton 
                    onClick={() => setRegisterType('login')} 
                    className="registerBtn loginBtn">
                      Login
                    </StyledRoundButton>

                    {/* Register account button */}
                    <StyledRoundButton 
                    onClick={() => setRegisterType('registerUser')} 
                    className="registerBtn signupBtn">
                      Sign Up
                    </StyledRoundButton>
                </div>
            }

            
            {/* 
              Register prompts based on user register type selection
            */}
            {auth.loggedIn()
              ? <RegisterOtherModal 
                active={registerType === 'registerOther'}
                onHide={hideModal}
                />
              : <RegisterUserModal 
                active={registerType === 'registerUser'}
                onHide={hideModal}
                />
            }

            {/* Render login modal (if) user is logged out */}
            <LoginModal 
            active={registerType === 'login'} 
            onHide={hideModal}
            />
        </LocalStyles>
    );
}

export default Header;
