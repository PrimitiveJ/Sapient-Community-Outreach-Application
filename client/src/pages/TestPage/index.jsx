

import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Button } from 'react-bootstrap';

const LocalStyles = styled.div`
    p {
        background-color: black;
    }
`

const TestPage = () => {
    return (
        <LocalStyles>
            <Col xl={2} lg={3}>
                <p>Hello, world!</p>
            </Col>
        </LocalStyles>
    );
}

export default TestPage;

