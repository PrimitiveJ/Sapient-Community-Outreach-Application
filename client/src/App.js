
// import native react modules
import React, { useState } from 'react';
import { ThemeProvider, useThemeContext } from './providers/ThemeProvider';
// import page components
import {
  LandingPage,
  RegisterPage,
  UserHomePage,
  EventPage,
  EventCreationPage
} from './pages';

// import all custom css themes
import './themes';


function App() {
  return (
    <ThemeProvider>
      <LandingPage/>
    </ThemeProvider>
  );
}

export default App;
