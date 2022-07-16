
import styled from 'styled-components';

const fillScreen = () => `
    width: 100%;
    height: 100%;
`

export const StyledBackgroundImage = styled.img`

    ${fillScreen()}
    object-fit: cover;
    position: absolute;
    opacity: ${({ opacity }) => opacity || 1};

`

export const StyledBackgroundImageContainer = styled.div`

    ${fillScreen()}
    position: absolute;

`

export const StyledBackgroundImageChildren = styled.div`

    ${fillScreen()}
    position: absolute;

`

