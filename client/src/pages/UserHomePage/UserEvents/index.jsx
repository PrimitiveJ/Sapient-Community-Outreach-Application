import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./UserEvents.css";

const UserEvents = () => {
  return (
    <Container className="events">
      {[
        {
          name: "Carrboro Canned Food Drive",
          location: "Carrboro, NC",
          date: "6/27/2022 to 6/28/2022",
        },
        {
          name: "Chapel Hill Shoes",
          location: "Chapel Hill, NC",
          date: "7/13/2022 to 7/20/2022",
        },
        {
          name: "End of Grade Litter Gathering",
          location: "Carrboro, NC",
          date: "6/6/2022 to 6/8/2022",
        },
      ].map((event) => (
        <Card
          bg="secondary"
          key={event.name}
          text="white"
          className="event-body mb-2"
        >
          <Card.Header>
            {event.date} {event.location}
          </Card.Header>
          <Card.Body>
            <Card.Title>{event.name} </Card.Title>
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
