import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./UserEvents.css";
// import { useNavigate } from 'react-router-dom';


const EventCard = ({ eventData }) => {

  const handleEventLink = (id) => {
    window.location.assign('event/' + id);
  }

  return (
        <Card
          style={{ backgroundColor: "#5b7b67" }}
          // style={{ backgroundColor: "#d2ddd4" }}
          className="mb-2"
        >
          <Card.Header className="eventDate">01/01/0001</Card.Header>
          <Card.Body className="event-body">
            <Card.Title className="eventTitle">{eventData.title}</Card.Title>
            <Card.Text>
              {eventData.description}
            </Card.Text>
            <Button className="eventCardBtn" onClick={() => handleEventLink(eventData._id)}>Visit</Button>
          </Card.Body>
        </Card>
  );
};


export default EventCard;
