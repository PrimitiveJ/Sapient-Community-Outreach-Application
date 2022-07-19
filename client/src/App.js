// import native react modules
import React, { useState } from 'react';
import { ThemeSelectionProvider } from './providers/ThemeSelectionProvider';
import { Route, Routes } from 'react-router-dom';
import { setContext } from "@apollo/client/link/context";

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink
} from "@apollo/client";


// import page components
import {
  LandingPage,
  UserHomePage,
  EventPage,
  EventCreationPage,
  LandingPageIntro,
  TestPage,
} from "./pages";

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

/*
  changed react-scripts from 5.0.1 to 4.0.3 to solve
  weird proxy issue

  if we need to revert back to 5.0.1, use this code:
*/
const httpLink = createHttpLink({
  uri: process.env.NODE_ENV === 'production' 
    ? '/graphql'
    : 'http://localhost:3001/graphql'
});

// use this proxy link for react-scripts 4.0.3
// const httpLink = createHttpLink({
//   uri: '/graphql'
// });
//

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeSelectionProvider>
        <Routes>
          <Route path="/" element={<LandingPageIntro/>}/>
          <Route path="/home" element={<LandingPage/>}/>
          <Route path="/user-home" element={<UserHomePage/>}/>
          <Route path="/event/:id" element={<EventPage/>}/>
          <Route path="/dev" element={<TestPage/>}/>
        </Routes>
      </ThemeSelectionProvider>
    </ApolloProvider>
  );
}

export default App;
