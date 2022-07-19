
// import assets
import React from 'react';
import styled, { css } from 'styled-components';
import { images } from '../../assets';


export const StyledLogoContainer = styled.div`
    --size: ${({ size }) => size || '100px'};
    padding: ${({ padding }) => padding || '0px'};
    width: var(--size);
    height: var(--size);
    position: relative;

    > div, img {
        width: 100%;
        height: 100%;
    }

    > div {
        position: relative;
    }

    img {
        position: absolute;
    }
`


export const Logo = ({ children, topText, size, padding, className }) => {

    // return logo component
    return (
        <StyledLogoContainer padding={padding} size={size} className={className}>
            <div>
                <img
                    src={images.branding.appLogo.base} 
                    alt="our logo" 
                />
                {children}
            </div>
        </StyledLogoContainer>
    );

}


