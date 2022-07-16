
// import native react modules
import React, { useState } from 'react';
import { ThemeProvider, useThemeContext } from './providers/ThemeProvider';

import { Route, Routes } from 'react-router-dom';


// import page components
import {
  LandingPage,
  RegisterPage,
  UserHomePage,
  EventPage,
  EventCreationPage,
  LandingPageIntro
} from './pages';

// import all custom css themes
import './themes';


function App() {
  return (
    <ThemeProvider>
     <EventPage/>
    </ThemeProvider>
  );
}

export default App;
