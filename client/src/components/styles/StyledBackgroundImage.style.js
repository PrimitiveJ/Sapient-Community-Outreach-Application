
import styled from 'styled-components';


export const StyledBackgroundImageContainer = styled.div`

    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${({backgroundColor}) => backgroundColor || 'none'};

`

export const StyledBackgroundImage = styled.img`

    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    opacity: ${({ opacity }) => opacity || 1};

`


// export const StyledBackgroundImageChildren = styled.div`

//     width: 100%;
//     height: 100%;
//     position: relative;

// `

