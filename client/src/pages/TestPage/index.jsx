

import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Button } from 'react-bootstrap';
import assets from '../../assets';

const ThingOne = styled.div`
    width: 100px;
    height: 100px;
`

const ThingTwo = styled(ThingOne)`
    background-color: red;
`

const TestPage = () => {
    console.log(Button);
    return (
        <div>
            <ThingTwo/>
        </div>
    );
}

export default TestPage;

