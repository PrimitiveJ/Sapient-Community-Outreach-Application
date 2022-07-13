
// import native react modules
import React from 'react';

// import page components
// import {
//   LandingPage,
//   RegisterPage,
//   UserHomePage,
//   EventPage,
//   EventCreationPage
// } from './pages';

import LandingPage from './pages/LandingPage';
import UserHomePage from './pages/UserHomePage';
import RegisterPage from './pages/RegisterPage';
import EventCreationPage from './pages/EventCreationPage';
import EventPage from './pages/EventPage';

function App() {
  return (
    <div className="App">
      <LandingPage/>
    </div>
  );
}

export default App;
