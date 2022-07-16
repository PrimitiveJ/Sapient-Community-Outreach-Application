

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Container, Row, Col, Button } from 'react-bootstrap';


const TestPage = () => {
    console.log(Button);
    return (
        <div>
            <Container>
                <Row className="rows">
                    <Col md={3} sm={6} xs={6}>
                        <div
                        style={{
                            backgroundColor: 'red',
                            width: "100%",
                            height: '150px'
                        }}
                        >
                            <Button>test</Button>
                            <p>test</p>
                        </div>
                    </Col>
                    <Col sm={3} lg={5} xs={2}>
                        <div
                        style={{
                            backgroundColor: 'red',
                            width: "100%",
                            height: '150px'
                        }}
                        >
                            <p>test</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TestPage;

