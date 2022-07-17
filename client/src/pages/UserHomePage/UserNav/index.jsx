// import native react modules
import React from "react";
import "./UserNav.css";
import Nav from "react-bootstrap/Nav";
// import { Route, Routes } from "react-router-dom";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const UserNav = () => {
  const path = window.location.pathname;

  return (
    <Nav defaultActiveKey="/home" className="flex-column nav">
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="event-page" href="/event-page">
        Events
      </Nav.Link>
      <Nav.Link eventKey="user-calendar" href="/user-calendar">
        Calendar
      </Nav.Link>
      <Nav.Link eventKey="settings">Settings</Nav.Link>
      <Nav.Link eventKey="logout">Logout</Nav.Link>

      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav>
    // <div className="userNav">
    //   {/*left sidebar nav */}
    //   <ul>
    //     <NavActive to="/event-page">
    //       <button>Events</button>
    //     </NavActive>
    //     <NavActive to="/user-calendar">
    //       <button>My Calendar</button>
    //     </NavActive>

    //     <NavActive to="/settings">
    //       <button>Settings</button>
    //     </NavActive>

    //     <NavActive to="/logout">
    //       <button>Logout</button>
    //     </NavActive>
    //   </ul>
    // </div>
  );
};

function NavActive({ to, children, ...props }) {
  // const resolvedPath = useResolvedPath(to);
  // const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
export default UserNav;
