// import native react modules
import React from "react";
import "./UserNav.css";
import { Route, Routes } from "react-router-dom";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const UserNav = () => {
  const path = window.location.pathname;
  // return (
  //   <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
  //     <div className="container flex mx-auto ">
  //       <ul className="container flex flex-wrap items-center justify-around text-gray-800">
  //         <NavActive to="/About">About</NavActive>
  return (
    <div className="userNav">
      {/*left sidebar nav */}
      <ul>
        <NavActive to="/events">Events</NavActive>
        <NavActive to="/user-calendar">My Calendar</NavActive>

        <NavActive to="/settings">Settings</NavActive>

        <NavActive to="/logout">Logout</NavActive>

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

function NavActive({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "bg-gray-700 text-white rounded p-0.5" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
export default UserNav;
