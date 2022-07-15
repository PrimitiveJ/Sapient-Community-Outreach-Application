import React from "react";
import "./UserCalendar.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { images } from "../../../assets";

const UserCalendar = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>User Calendar</h1>
          <img src={images.icons.calendarImage} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default UserCalendar;
