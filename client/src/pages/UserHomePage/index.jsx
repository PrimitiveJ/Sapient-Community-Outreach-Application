

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
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { useThemeContext } from '../../providers/ThemeProvider';
import Volunteer from "./Volunteer";
import Organizer from "./Organizer";
import Business from "./Business";



const HomePage = () => {

    //     const { theme, setTheme } = useThemeContext();
  
    return (
        <div className="bg-gray-800">
          {/* <Header /> */}
          
            <Volunteer/>

    
    
          {/* <Footer /> */}
        </div>
    )
}
export default HomePage;
