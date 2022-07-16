
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    p {
        color: ${({theme}) => theme.textColorOne};
    }
`;

export default GlobalStyle;