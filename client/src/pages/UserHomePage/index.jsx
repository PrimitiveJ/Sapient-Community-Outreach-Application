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
        <Col xs={2}>
          <UserNav />
        </Col>
        <Col lg={true} xs={2}>
          <div className="userAside">
            {users.map((user, index) => (
              <UserCard userData={user} key={index} />
            ))}
          </div>
        </Col>

        <Col xs={8} lg={true}>
          <div className="event-list">
            <ul>
              <li>
                <div className="card">
                  <h3>School Year End Trash Pickup</h3>
                  <p>6/12/23</p>
                </div>
              </li>
              <li>
                <div className="card">
                  <h3>Coat Drive!</h3>
                  <p>11/01/22</p>
                </div>
              </li>
              <li>
                <div className="card">
                  <h3>Food Drive!</h3>
                  <p>3/23/23</p>
                </div>
              </li>
              <li>
                <div className="card">
                  <h3>Give Us Your Plasma, MotherFuckers!</h3>
                  <p>Every Sunday in July</p>
                </div>
              </li>
              <li>
                <div className="card">
                  <h3>Peaceful Protest about Something</h3>
                  <p>5/28/23</p>
                </div>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default HomePage;
