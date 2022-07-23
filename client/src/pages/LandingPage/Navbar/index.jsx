

import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { StyledRoundButton, StyledDefaultButton } from '../../../components/styles/StyledButton.style';
import auth from '../../../utils/auth';
import { StyledNavbarContainer, StyledContentContainer } from './local.style';

const Navbar = ({children}) => {
    const navLinkData = [
        ['about', 'About Us'],
        ['contact', 'Contact'],
        ['mission', 'Our Mission']
    ];

    const [currentLink, setCurrentLink] = useState('about');
    const navigate = useNavigate();

    return (
        <>
            <StyledNavbarContainer>
                {navLinkData.map(([linkState, linkName, style]) => {
                    return <StyledDefaultButton 
                        key={linkState}
                        onClick={() => setCurrentLink(linkState)}
                        data-state={linkState === currentLink ? 'active' : 'inactive'}>
                            {linkName}
                        </StyledDefaultButton>
                })}
                {
                    auth.loggedIn()
                    ?   <StyledDefaultButton
                        onClick={() => navigate('/user-home')}>
                            My Profile
                        </StyledDefaultButton>
                    : ''
                }
            </StyledNavbarContainer>
            <StyledContentContainer>
                {children.map(child => child.props.nav === currentLink && child)}
            </StyledContentContainer>
        </>
    );
}

export default Navbar;
