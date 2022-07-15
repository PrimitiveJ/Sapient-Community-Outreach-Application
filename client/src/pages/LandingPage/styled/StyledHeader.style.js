

import styled from 'styled-components';

export const StyledHeader = styled.header`
    width: 100%;
    background-color: #7d9e9d;
    height: 200px;
    background-image: url(${({ backgroundImage }) => backgroundImage});
    background-size: cover;
    background-position: center;
`
