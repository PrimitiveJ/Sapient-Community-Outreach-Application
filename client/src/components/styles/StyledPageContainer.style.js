

import styled from 'styled-components';

const isCentered = centered => {
    if (centered) {
        return `margin-left: auto; margin-right: auto;`;
    }
}

export const StyledPageContainer = styled.div`
    width: ${({ width }) => width || '100%'};
    min-height: 100vh;
    position: ${({relative}) => relative ? "relative" : "static"};
    background-color: ${({backgroundColor, theme}) => theme[backgroundColor] || backgroundColor || ""};
`;

