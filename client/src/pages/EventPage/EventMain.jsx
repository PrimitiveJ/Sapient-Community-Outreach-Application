import React, {useState, useRef} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import EventComments from './EventComments'
import styled from 'styled-components';
import BackgroundImage from "../../components/BackgroundImage";
import { images } from '../../assets';
import { StyledPageContainer } from "../../components/styles/StyledPageContainer.style";

const HoverEffect = styled.div `
.button {
    transition: background-color 0.5s;
}
    & .button:hover {
        background-color: green !important;
    }
.card {
    transition: background-color 0.5s;
}
    & .card:hover {
        background-color: green !important;
       
    }
`

const something = () => {
    console.log('something');
}

function EventMain() {
    const box = useRef();

    const changeBackgroundColor = () => {
        box.current.style.backgroundColor = "green";
    }
    return (
        <StyledPageContainer relative={true}>
            <BackgroundImage image={images.backgrounds.landingPageHeader}/>

            <Container>
        <Card className="bg-light">
            <Row>
                <Col sm={8}>
                    <h1>Event-Name</h1>
                </Col>
                <Col sm={4}>Date:01/02/03</Col>
            </Row>
            <img src={Image}/>
            <Row>
                <Col sm>
                    <h2>Location</h2>
                </Col>
                <Col sm>
                    <h3>Organizer</h3>
                </Col>
                <Col sm>
                    <h3>Business Sponsor</h3>
                </Col>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, tempora hic consequatur aspernatur eius sint dolore obcaecati explicabo, totam rem tenetur reprehenderit, nam quas dicta fugiat amet quis quae culpa?</p>
            </Row>
            <Button variant="success">Sign Up as a Participant</Button>
            {' '}
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Comments</Accordion.Header>
                    <Accordion.Body>
                        <> {
                            [
                                'Primary',
                                'Secondary',
                                'Success',
                                'Danger',
                                'Warning',
                                'Info',
                                'Light',
                                'Dark',
                                // {event.comments} goes here to map over all comments from an event.
                            ].map((variant) => (<HoverEffect>
                                <Card bg={
                                        variant.toLowerCase()
                                    }
                                    key={variant}
                                    text={
                                        variant.toLowerCase() === 'light' ? 'dark' : 'white'
                                    }
                                    style={
                                        {width: '30%vw'}
                                    }
                                    className="mb-4">
                                    <Card.Header>Date/Time of comment</Card.Header>
                                    <Card.Body>
                                        <Card.Title>UserName
                                        </Card.Title>
                                        <Card.Text>
                                            EXAMPLECOMMENTHERE
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </HoverEffect>))
                        } </>
                    </Accordion.Body>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>First Accordion</Accordion.Header>
                            <Accordion.Body>
                                <CommentReaction/>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Second Accordion</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  
                                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  
                                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  
                                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  
                                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat  
                                      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id  
                                      est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Accordion.Item>
            </Accordion>
        </Card>
        <HoverEffect>
            <Button variant="primary">Submit a Comment</Button>
        </HoverEffect>
        {' '} </Container>;
    </StyledPageContainer>
    );
}


export default EventMain;
