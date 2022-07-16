

import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledRoundButton, StyledDefaultButton } from '../../../components/styles/StyledButton.style';
// import { Container, Row, Col } from 'react-bootstrap';

const StyledNavbarContainer = styled.nav`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #234734;
    position: sticky;
    top: 0;

    button {
        background-color: #183118;
        padding: 20px;
        font-size: 1rem;
        color: white;
        font-weight: 900;
        transition: background-color 0.5s;
        font-family: 'Edu VIC WA NT Beginner', cursive;
    }

    button[data-state="active"] {
        background-color: #3d5e3e;
    }

    button:hover {
        background-color: #4c764e;
    }

    @media screen and (max-width: 576px) {
        background-color: #183118;
    }
`

const Navbar = () => {
    const navLinkData = [
        ['about', 'About Us'],
        ['contact', 'Contact'],
        ['mission', 'Our Mission']
    ];

    const [currentLink, setCurrentLink] = useState();

    return (
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
    );
}

export default Navbar;
