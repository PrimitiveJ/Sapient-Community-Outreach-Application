
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
} from '../styles/StyledBackgroundImage.style';

function BackgroundImage({ children, opacity, image, backgroundColor, style }) {

    // return background component
    return (
        <StyledBackgroundImageContainer backgroundColor={backgroundColor} style={style}>
            <StyledBackgroundImage opacity={opacity} src={image}/>
        </StyledBackgroundImageContainer>
    );
}

export default BackgroundImage;
