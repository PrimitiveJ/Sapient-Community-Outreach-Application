
// import assets
import React from 'react';
import styled from 'styled-components';
import { images } from '../../assets';

const StyledLogoContainer = styled.div`
    --size: ${({ size }) => size || '100px'};
    padding: ${({ padding }) => padding || '0px'};
    width: var(--size);
    height: var(--size);
    position: relative;

    img {
        width: 100%;
        height: 100%;
        /* position: absolute; */
    }
`

const Logo = ({ children, topText, size, padding }) => {

    // return logo component
    return (
        <StyledLogoContainer padding={padding} size={size}>
            <img
                src={images.brand.appLogo.base} 
                alt="our logo" 
            />
            {children}
        </StyledLogoContainer>
    );

}

export default Logo;

