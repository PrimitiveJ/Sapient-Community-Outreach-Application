// import native react modules
<<<<<<< HEAD
import React, { useState } from "react";
import { ThemeProvider, useThemeContext } from "./providers/ThemeProvider";
=======
import React, { useState } from 'react';
import { ThemeProvider, useThemeContext } from './providers/ThemeProvider';

import { Route, Routes } from 'react-router-dom';


>>>>>>> develop
// import page components
import {
  LandingPage,
  RegisterPage,
  UserHomePage,
  EventPage,
  EventCreationPage,
<<<<<<< HEAD
} from "./pages";
=======
  LandingPageIntro
} from './pages';
>>>>>>> develop

// import all custom css themes
import "./themes";

function App() {
  return (
    <ThemeProvider>
<<<<<<< HEAD
      <LandingPage />
      <UserHomePage />
=======
      <Routes>
        <Route path="/" element={<LandingPageIntro/>}/>
        <Route path="/home" element={<LandingPage/>}/>
        <Route path="/user-home" element={<UserHomePage/>}/>
        <Route path="/user-register" element={<RegisterPage/>}/>
      </Routes>
>>>>>>> develop
    </ThemeProvider>
  );
}

export default App;
