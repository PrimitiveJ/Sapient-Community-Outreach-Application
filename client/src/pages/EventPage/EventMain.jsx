import React, {useState, useRef, useEffect} from "react";
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
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_EVENT } from '../../utils/queries';
import { v4 as uuidv4 } from 'uuid';

const HoverEffect = styled.div`
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


function EventMain(props) {
    const box = useRef();

    // Get the id from the '/event/:id' url
    const { id: eventId } = useParams();

    /*
        Make a query for the single event data given an event ID in the URL parameters.
            - Must use the 'loading' property from the data response in order to debounce
            multiple queries
    */
    let eventData; {
        const { loading, data } = useQuery(GET_EVENT, { variables: { id: eventId }});

        if (loading) return <p style={{fontSize: '3rem'}}>Loading...</p>;
        eventData = data.getEvent;
        console.log(eventData);
    }

    return (
        <StyledPageContainer relative={true}>
            <BackgroundImage image={images.backgrounds.landingPageHeader} opacity="0.5"/>

        <Container>
            <Card className="bg-light main-container">
                <Row className="event-head-info">
                    <Col sm={8}>
                        <h1>Event: <span>{eventData.title}</span></h1>
                    </Col>
                    <Col sm={4} className="event-date-title">Date: <span>{eventData.date}</span></Col>
                </Row>
                <img src={images.backgrounds.lakeCleanup}/>
                <Row className="event-body-info">
                    <Col sm>
                        <h2>Location: <span className="blue">{eventData.location.city}, {eventData.location.state}</span></h2>
                    </Col>
                    <Col sm>
                        <h2>Organizer: <span className="green">{eventData.author}</span></h2>
                    </Col>
                    <Col sm>
                        <h2>Business Sponsor</h2>
                    </Col>
                    <div className="description-box">
                        <h3>Description:</h3>
                        <p>{eventData.description}</p>
                    </div>
                </Row>
                <Button className="signup-participant-btn" variant="success">Sign Up as a Participant</Button>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Comments</Accordion.Header>
                        <Accordion.Body>

                            {eventData.comments.map((comment) => (
                                // <HoverEffect key={uuidv4()}>
                                    <Card 
                                        // bg={variant.toLowerCase()}
                                        // text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                        style={{ width: '30%vw' }}
                                        className="mb-4">

                                        <Card.Header>
                                            Date/Time of comment
                                        </Card.Header>

                                        <Card.Body>
                                            <Card.Title>{comment.author}</Card.Title>
                                            <Card.Text>{comment.content}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                // </HoverEffect>
                            ))}

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card>
            <HoverEffect> <Button variant="primary">Submit a Comment</Button></HoverEffect>
                {' '}
        </Container>
    </StyledPageContainer>
    );
}


export default EventMain;
