// import native react modules
import React from "react";
import "./UserCard.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserImage from "./userImage";
import UserNav from "../UserNav";

function UserCard({ userData }) {
  return (
    <Container>
      <Row>
        <Col>
          <div className="container">
            {/* will change cardTitle content to userName */}
            <div className="cardTitle">{userData.name.first}</div>
            <p className="cardTitle">{userData.name.last}</p>

            <div className="cardBody">
              <UserImage image={userData.picture.large} />
              {/* <div className="cardImage">
          <img src={userData.picture.medium} alt="users photo" />
        </div> */}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default UserCard;
