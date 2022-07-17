// import native react modules
import React from "react";
import "./UserCard.css";
import { images } from "../../../assets/";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import UserImage from "./userImage";
import UserNav from "../UserNav";

function UserCard({ userData }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={images.backgrounds.landingPageHeader} />
      <UserImage image={userData.picture.large} />
      <Card.Body>
        <Card.Title>
          {userData.name.first} {userData.name.last}
        </Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          voluptatibus, ad laborum nihil sed officia rem! Sit ab debitis ipsum
          voluptas minus quis, harum qui labore saepe, a at quaerat!
        </Card.Text>
        <Button variant="primary">Something</Button>
      </Card.Body>
    </Card>
  );
}
export default UserCard;
