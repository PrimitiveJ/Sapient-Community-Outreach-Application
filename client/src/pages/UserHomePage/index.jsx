

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
import { useThemeContext } from '../../providers/ThemeProvider';

const HomePage = () => {
    const { theme, setTheme } = useThemeContext();

    return (
        <div>
            <p>testing {theme}</p>
        </div>
    );
}

export default HomePage;

