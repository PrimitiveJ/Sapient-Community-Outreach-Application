/*

    Page: User Home Page 

    Purpose: Main content page that user is interfaced with upon 
    logging in. This page should contain the posted events made from
    other users, sorting events by location/date/etc, and should
    also allow access for the user to join an event, allow an
    organizer to create an event, or register their business as
    a potential sponsor.

    And other general settings

*/

// import native react modules
import React, { useEffect, useState } from "react";
// import { Route, Routes } from "react-router-dom";
// import { useThemeContext } from "../../providers/ThemeProvider";
import UserNav from "./UserNav";
import UserCard from "./UserCard";
import "./UserHome.css";
import EventPage from "../EventPage";
// import Organizer from "./Organizer";
// import Business from "./Business";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HomePage = () => {
  //     const { theme, setTheme } = useThemeContext();

  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=1");
        userData = (await response.json()).results;
      } catch (error) {
        console.log(error, "random user");
        userData = [];
      }
      setUsers(userData);
    })();
  }, []);
  return (
    <Container>
      <Row>
        <Col lg={1}>
          <UserNav />
        </Col>
        <Col>
          <div lg={4}>
            {users.map((user, index) => (
              <UserCard userData={user} key={index} />
            ))}
          </div>
        </Col>

        <Col xs={8} lg={7}>
          <EventPage />
        </Col>
      </Row>
    </Container>
  );
};
export default HomePage;
