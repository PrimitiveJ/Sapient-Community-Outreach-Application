// import native react modules
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";

import { useQuery } from "@apollo/client";
// import { GET_MAP_API_KEY } from "../../../utils/queries";

// import { Route, Routes } from "react-router-dom";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import UserCalendarModal from "../UserCalendar";
// import UserMapModal from "../UserMap";

import auth from "../../../utils/auth";
import EventModal from "../CreateEventModal";
import { POST_EVENT } from "../../../utils/mutations";
import { useMutation } from "@apollo/client";
/*
  Replaced the 'UserNav.css' file with this style component
  place all your local css for this component here :D

  -Will
*/

const LocalStyles = styled.div`
  .nav {
    height: 100%;
  }

  button {
    cursor: pointer;
    background-color: #4d714e !important;
    border-color: white !important;
  }

  .config-btn-group {
    margin-top: 20px;
    width: 100%;
    height: 100%;
  }

  .btn-group-vertical > * {
    border: none;
    margin-top: 5px;
    margin-bottom: 5px;
    background-color: #849b85 !important;
  }
`;

const UserNav = () => {
  const [activeModal, setActiveModal] = useState("none");
  const hideModal = () => setActiveModal("none");
  const showUserCalendarModal = () => setActiveModal("user-calendar");
  const API_KEY = useRef();

  const showUserMapModal = () => {
    setActiveModal("user-map");
  };

  const showEventModal = () => setActiveModal("post-event");

  const [postEvent] = useMutation(POST_EVENT);

  const handleLogout = () => {
    auth.logout();
    window.location.assign('/home');
  }

  return (
    <LocalStyles>
      <Nav defaultActiveKey="/home" className="flex-column nav">
        <ButtonGroup vertical>
          {/* <Button onClick={showUserMapModal} variant="primary"> */}
          <Button onClick={() => window.alert('Coming soon!')} variant="primary"> 
            Events
          </Button>
          <Button onClick={showEventModal}>Create Event</Button>
          <Button onClick={() => window.alert('Coming soon!')}>My Events</Button>
          <Button onClick={showUserCalendarModal} variant="primary">
            My Calendar
          </Button>

          <Button onClick={() => window.location.assign('/home')}>Home</Button>
          <Button onClick={() => window.alert('Coming soon!')}>Settings</Button>
          <Button onClick={handleLogout}>Logout</Button>

          <UserCalendarModal
            modalActive={activeModal === "user-calendar"}
            hideModal={hideModal}
          />
          {/* <UserMapModal
            modalActive={activeModal === "user-map"}
            hideModal={hideModal}
            apiKey={API_KEY}
          /> */}
        </ButtonGroup>
      </Nav>
      <EventModal hideModal={hideModal} isShown={activeModal === "post-event"} postFunc={postEvent}/>
    </LocalStyles>
  );
};

export default UserNav;
