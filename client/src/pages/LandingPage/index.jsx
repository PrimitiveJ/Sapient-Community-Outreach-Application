
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
import './style.module.css';

// import assets
import { images } from '../../assets';


// LandingPage component
const LandingPage = () => {

    // import global theme provider
    const { theme, setTheme } = useThemeContext();

    // return page component
    return (
        <div className="page-container">
            <div className="intro fade-in-focus-intro">
                <div className="logo-group">
                    <h1 className="fade-in-focus-title">Sapient</h1>
                    <img className="logo-base" src={images.brand.appLogo.base} alt=""/>
                    <img className="logo-lights fade-in-lights" src={images.brand.appLogo.lights} alt=""/>
                </div>
            </div>
        </div>
    );

}

export default LandingPage;

