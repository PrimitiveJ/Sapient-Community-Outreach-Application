
/*
    note:

    in order for this background component to work, it's parent component must be set
    to 'position: relative'

    ex: 

        <div style={{position: "relative"}}>
            <BackgroundImage image={...}>
                ...
            </BackgroundImage>
        </div>
*/

import React from 'react';

import { 
    StyledBackgroundImage, 
    StyledBackgroundImageContainer, 
    StyledBackgroundImageChildren 
} from '../styles/StyledBackgroundImage.style';

function BackgroundImage({ children, opacity, image }) {

    // return background component
    return (
        <StyledBackgroundImageContainer>
            <StyledBackgroundImage opacity={opacity} src={image}/>
            <StyledBackgroundImageChildren>
                {children}
            </StyledBackgroundImageChildren>
        </StyledBackgroundImageContainer>
    );
}

export default BackgroundImage;
