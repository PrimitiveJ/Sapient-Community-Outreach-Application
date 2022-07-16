
// import native react modules
import React, { useState } from 'react';
import { ThemeSelectionProvider } from './providers/ThemeSelectionProvider';
import { Route, Routes } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

// import page components
import {
  LandingPage,
  // RegisterPage,
  // UserHomePage,
  // EventPage,
  // EventCreationPage,
  LandingPageIntro,
  TestPage
} from './pages';



function App() {
  return (
    <ThemeSelectionProvider>
      <Routes>
        <Route path="/" element={<LandingPageIntro/>}/>
        <Route path="/home" element={<LandingPage/>}/>
        {/* <Route path="/user-home" element={<UserHomePage/>}/>
        <Route path="/user-register" element={<RegisterPage/>}/> */}
        <Route path="/dev" element={<TestPage/>}/>
      </Routes>
    </ThemeSelectionProvider>
  );
}

export default App;
