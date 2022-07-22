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
import EventCard from "./EventCard";
import "./UserHome.css";
import { images } from "../../assets";
import BackgroundImage from "../../components/BackgroundImage";
import { StyledPageContainer } from "../../components/styles/StyledPageContainer.style";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import auth from '../../utils/auth';
import LocalStyles from './local.style';
import { v4 as uuidv4 } from 'uuid';
// import Organizer from "./Organizer";
// import Business from "./Business";

import { useQuery } from '@apollo/client';
import { GET_10_EVENTS } from '../../utils/queries';

const HomePage = () => {
  //     const { theme, setTheme } = useThemeContext();

  // pull events data from the database
  const { data: eventsData, loading: eventsLoading } = useQuery(GET_10_EVENTS);

  // redirect back to home page if user is not logged in
  if (!auth.loggedIn()) {
    window.location.assign('/home');
    return;
  }

  return (
    <LocalStyles>
      <StyledPageContainer
        // ref={pageContainerRef}
        backgroundColor="backgroundOne"
        relative={true}
      >
        {/* conditionally render intro animation
        {loadWithIntro && <IntroTransition />} */}

        {/* Page container background */}
        <BackgroundImage
          opacity="0.5"
          backgroundColor="white"
          image={images.backgrounds.landingPageHeader}
        />

        <div style={{display: 'flex', flexWrap: 'wrap', position: 'relative'}}>
          <Col xl={2} lg={3} md={4} sm={4} xs={12}>
            <div>
              <UserCard />
            </div>
          </Col>

      {/* <Row>
        <Col sm={12} md={3} lg={3}>
          <div>
            {users.map((user, index) => (
              <UserCard userData={user} key={index} />
            ))}
          </div>
        </Col>

        <Col sm={12} md={8} lg={8}>
          <UserEvents />
        </Col>
      </Row>
    </StyledPageContainer> */}
          <Col>
            <div style={{width: '100%', height: '100vh', padding: '10px'}}>
            {
              // wait for data to finish loading until resuming
              eventsLoading 
              ? 'Loading...'
              : eventsData.get10Events.map(event => {
                 return <EventCard key={uuidv4()} eventData={event}/>
              }) 
            }
            </div>
          </Col>
        </div>
      </StyledPageContainer>
    </LocalStyles>
  );
};
export default HomePage;
