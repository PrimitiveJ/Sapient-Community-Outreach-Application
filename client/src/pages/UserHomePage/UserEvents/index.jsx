import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./UserEvents.css";
import { GET_EVENTS_10 } from "../../../utils/queries";
import { useQuery } from "@apollo/client";

const UserEvents = ({ data }) => {
  data = useQuery(GET_EVENTS_10, { variables: {} });
  console.log("from UserEvents page", data);
  return (
    <Container className="events">
      {data.map((event) => (
        <Card
          bg="secondary"
          key={event.title}
          text="white"
          className="event-body mb-2"
        >
          <Card.Header>
            {event.date} {event.location}
          </Card.Header>
          <Card.Body>
            <Card.Title>{event.title} </Card.Title>
            <Card.Text className="event-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, nam
              ipsa iste aut aliquam praesentium temporibus placeat iusto omnis.
              Odit, quisquam. Commodi nesciunt magni explicabo accusamus quam
              ipsam pariatur numquam!
            </Card.Text>
            <Button>Sign Up</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};
export default UserEvents;
