// import native react modules
import React from "react";
import "./UserCard.css";
import UserImage from "./userImage";
import UserNav from "../UserNav";

function UserCard({ userData }) {
  return (
    <div className="userSide">
      {/* will change cardTitle content to userName */}
      <div className="cardTitle">{userData.name.first}</div>
      <div className="cardBody">
        <UserImage image={userData.picture.medium} />
        {/* <div className="cardImage">
          <img src={userData.picture.medium} alt="users photo" />
        </div> */}
        <p className="cardTitle">{userData.name.last}</p>
      </div>
      <UserNav />
    </div>
  );
}
export default UserCard;
