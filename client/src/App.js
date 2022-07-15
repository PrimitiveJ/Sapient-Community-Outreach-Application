// import native react modules
import React, { useState } from "react";
import { ThemeProvider, useThemeContext } from "./providers/ThemeProvider";

import { Route, Routes } from "react-router-dom";

// import page components
import {
  LandingPage,
  RegisterPage,
  UserHomePage,
  EventPage,
  EventCreationPage,
  LandingPageIntro,
} from "./pages";

// import all custom css themes
import "./themes";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<LandingPageIntro />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/user-home" element={<UserHomePage />} />
        <Route path="/user-register" element={<RegisterPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
