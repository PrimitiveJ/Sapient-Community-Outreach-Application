// import native react modules
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";

import { useQuery } from "@apollo/client";
import { GET_MAP_API_KEY } from "../../../utils/queries";

// import { Route, Routes } from "react-router-dom";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import UserCalendarModal from "../UserCalendar";
import UserMapModal from "../UserMap";

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
    background-color: #b6d0b7 !important;
    border-color: white !important;
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

  // mount hook - only runs code once per page load
  useEffect(() => {
    API_KEY.current = useQuery(GET_MAP_API_KEY, {
      variables: {},
    });

    console.log("API KEY RESPONSE: ", API_KEY.current);
  }, []);

  return (
    <LocalStyles>
      <Nav defaultActiveKey="/home" className="flex-column nav">
        <ButtonGroup vertical>
          <Button onClick={showUserMapModal} variant="primary">
            Events
          </Button>
          <Button onClick={showUserCalendarModal} variant="primary">
            My Calendar
          </Button>
          <Button>Settings</Button>
          <Button>Logout</Button>

          <UserCalendarModal
            modalActive={activeModal === "user-calendar"}
            hideModal={hideModal}
          />
          <UserMapModal
            modalActive={activeModal === "user-map"}
            hideModal={hideModal}
            apiKey={API_KEY}
          />
        </ButtonGroup>
      </Nav>
    </LocalStyles>
  );
};

export default UserNav;
