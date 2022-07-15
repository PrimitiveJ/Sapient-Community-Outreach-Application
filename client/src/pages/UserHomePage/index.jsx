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
// import Organizer from "./Organizer";
// import Business from "./Business";

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
    <div className="userAside">
      {users.map((user, index) => (
        <UserCard userData={user} key={index} />
      ))}
    </div>
  );
};
export default HomePage;
