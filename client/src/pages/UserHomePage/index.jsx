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

import UserNav from "./UserNav";
import UserCard from "./UserCard";
import UserEvents from "./UserEvents";
import "./UserHome.css";
import { images } from "../../assets";
import BackgroundImage from "../../components/BackgroundImage";
import { StyledPageContainer } from "../../components/styles/StyledPageContainer.style";
import GlobalStyle from "../../components/styles/GlobalStyle.style";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// import Organizer from "./Organizer";
// import Business from "./Business";

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
    <StyledPageContainer
      // ref={pageContainerRef}
      backgroundColor="backgroundOne"
      relative={false}
    >
      {/* conditionally render intro animation
      {loadWithIntro && <IntroTransition />} */}

      {/* use global styles */}
      <GlobalStyle />

      {/* Page container background */}
      <BackgroundImage
        opacity="0.5"
        backgroundColor="white"
        image={images.backgrounds.landingPageHeader}
      />

      <Row>
        <Col sm={12} lg={4}>
          <div>
            {users.map((user, index) => (
              <UserCard userData={user} key={index} />
            ))}
          </div>
        </Col>

        <Col sm={12} lg={7}>
          <Row>
            <Col className="event-header">
              <h1>Upcoming Events</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <UserEvents />
            </Col>
          </Row>
        </Col>
      </Row>
    </StyledPageContainer>
  );
};
export default HomePage;
