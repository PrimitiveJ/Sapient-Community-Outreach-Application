import React, { useState } from "react";
import "./UserCard.css";
import { images } from "../../../assets/";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import UserImage from "./userImage";
// import UserNav from "../UserNav";
import UserCalendarModal from "../UserCalendar";
import UserNav from "../UserNav";

function UserCard({ userData }) {
  const [activeModal, setActiveModal] = useState("none");
  const hideModal = () => setActiveModal("none");
  const showUserCalendarModal = () => setActiveModal("user-calendar");
  return (
    <Card style={{ width: "18rem" }} className="profile-card text-center">
      <Card.Img variant="top" src={images.backgrounds.roadway} />

      <UserImage image={userData.picture.large} />
      <Card.Body>
        <Card.Title className="title">
          {userData.name.first} {userData.name.last}
        </Card.Title>
        <Card.Text className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Card.Text>
        <UserNav />
      </Card.Body>
    </Card>
  );
}
export default UserCard;
