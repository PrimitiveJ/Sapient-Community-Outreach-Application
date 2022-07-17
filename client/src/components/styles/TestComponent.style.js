

import styled from 'styled-components';

export const TestComponent = styled.button`

    border-radius: 10px;
    padding: 10px 20px;
    color: white;
    background: black;
    border: none;
    position: relative;

    &:hover {
        div {
            opacity: 1;
            visibility: visible;
        }
    }

`

export const ListItem = styled.button`

    background-color: red;
    color: white;

    &:hover {
        background-color: green;
    }
    

`;

export const ListFrame = styled.div`

    padding: 10px;
    height: 200px;
    background-color: gray;
    opacity: 0;
    position: absolute;
    width: 100px;
    top: calc(100%);
    left: 0;

    visibility: hidden;
    transition-property: opacity;
    transition-duration: 0.5s;
    transition-timing-function: ease-in;

    &:active {
        background-color: blue;
    }

`;
