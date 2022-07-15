// import native react modules
import React from "react";
import "./UserNav.css";
import { Route, Routes } from "react-router-dom";

const UserNav = () => {
  return (
    <div className="userNav">
      {/*left sidebar nav */}
      <ul>
        <li>
          <button>Events</button>
        </li>
        <li>
          <button>Calendar</button>
        </li>
        <li>
          <button>Settings</button>
        </li>
        <li>
          <button>Logout</button>
        </li>
      </ul>
    </div>
  );
};
export default UserNav;
