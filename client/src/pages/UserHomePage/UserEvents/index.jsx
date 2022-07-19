import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./UserEvents.css";

const UserEvents = () => {
  return (
    <Container className="events">
      {[
        "Primary",
        "Secondary",
        "Success",
        "Danger",
        "Warning",
        "Info",
        "Light",
        "Dark",
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === "light" ? "dark" : "white"}
          //   style={{ width: "40rem" }}
          className="mb-2"
        >
          <Card.Header>9/11/2022</Card.Header>
          <Card.Body className="event-body">
            <Card.Title>{variant} Card Title </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button>Sign Up</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};
export default UserEvents;
