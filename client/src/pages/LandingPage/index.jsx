
/*

    Page: Landing Page

    Purpose: Initial page rendered when user visits home URL. 
    Upon page load, logo and title fade in and then eventually loads
    the main page content which should include selling points
    of the application, and the login/signup buttons.

*/


// import native react modules
import React from 'react';
import { useThemeContext } from '../../providers/ThemeProvider';

// import local css styling
import './style.css';

// import assets
import { images } from '../../assets';

const LandingPage = () => {
    const { theme, setTheme } = useThemeContext();

    return (
        <div className="page-container">
            <img src="" alt="" />
        </div>
    );
}

export default LandingPage;

