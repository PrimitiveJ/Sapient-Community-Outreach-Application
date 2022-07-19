import React from "react";
function UserImage({ image }) {
  return (
    <div className="cardImage">
      <img src={image} alt="users photo" />
    </div>
  );
}

export default UserImage;
