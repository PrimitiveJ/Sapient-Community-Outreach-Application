// import native react modules
import React, { useState } from "react";
import "./UserNav.css";
import Nav from "react-bootstrap/Nav";
// import { Route, Routes } from "react-router-dom";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import UserCalendarModal from "../UserCalendar";
import UserMapModal from "../UserMap";

const UserNav = () => {
  const [activeModal, setActiveModal] = useState("none");
  const hideModal = () => setActiveModal("none");
  const showUserCalendarModal = () => setActiveModal("user-calendar");
  const showUserMapModal = () => setActiveModal("user-map");

  return (
    <Nav defaultActiveKey="/home" className="flex-column nav">
      <ButtonGroup vertical>
        <Button onClick={showUserMapModal}>Events Near Me</Button>
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
        />
      </ButtonGroup>
    </Nav>
  );
};

export default UserNav;
