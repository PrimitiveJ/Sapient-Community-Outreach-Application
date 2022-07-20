// import native react modules
import React, { useState } from "react";
import styled from 'styled-components';
import Nav from "react-bootstrap/Nav";

// import { Route, Routes } from "react-router-dom";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import UserCalendarModal from "../UserCalendar";

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
      background-color: #4d714e!important;
      border-color: white !important;
  }

`

const UserNav = () => {
  const [activeModal, setActiveModal] = useState("none");
  const hideModal = () => setActiveModal("none");
  const showUserCalendarModal = () => setActiveModal("user-calendar");

  return (
    <LocalStyles>
      <Nav defaultActiveKey="/home" className="flex-column nav">
        <ButtonGroup vertical>
          <Button>Events</Button>
          <Button onClick={showUserCalendarModal} variant="primary">
            My Calendar
          </Button>
          <Button>Settings</Button>
          <Button>Logout</Button>

          <UserCalendarModal
            modalActive={activeModal === "user-calendar"}
            hideModal={hideModal}
          />
        </ButtonGroup>
      </Nav>
    </LocalStyles>
  );
};

export default UserNav;
